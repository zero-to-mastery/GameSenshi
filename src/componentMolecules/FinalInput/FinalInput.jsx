import React, { useState, useEffect } from 'react'
import { Field } from 'react-final-form'
import { stopUndefined } from 'utils'
// core components
import { ExportAtoms } from 'componentAtoms'

const { ListText, PopoverCommon } = stopUndefined(ExportAtoms)

const DELAY = 1000

const FinalInput = props => {
	const [localValue, seLocalValue] = useState('')

	const defaultProps = {
		popoverMessages: [],
		value: localValue,
		setValue: seLocalValue,
	}

	const {
		Component,
		name,
		onBlur,
		onFocus,
		onChange,
		onKeyPress,
		validation,
		serverValidation,
		hideSuccess,
		popoverMessages,
		submitRef,
		onlyShowErrorAfterSubmit,
		value,
		setValue,
		defaultValue,
		...restProps
	} = { ...defaultProps, ...props }

	// set default value

	const [popoverFailedItems, setPopoverFailedItems] = useState({})
	const [onSubmitTimeOutID, setOnSubmitTimeOutId] = useState(0)
	const [filteredMessages, setFilteredMessages] = useState([])
	const [valid, setValid] = useState(false)
	const [state] = useState({
		delay: 0, // initial delay is 0 for fast first time background validation
		timeOutID: 0,
		focused: true,
		promise: Promise.resolve(['Invalid']),
		resolve: () => {},
		fulfilled: true,
		fulfilledServer: true,
	})
	const [spinner, showSpinner] = useState(false)
	const [spinner2, showSpinner2] = useState(false)

	const generateTextListWithState = (validationResult, resolve) => {
		const validationResult_ = validationResult || {}
		const { status, message } = validationResult_
		// if validationResult is undefined, it passed validation, do not show List
		// if validationResult is {status:true/false, message:string/array of string} and if the status is true, it passed validation, show List
		// if validationResult is string or array of string, it failed validation, show List

		const messages = message
			? [message]
			: Array.isArray(validationResult)
			? validationResult
			: validationResult
			? validationResult
			: []

		setPopoverFailedItems({})

		const filtered = messages.filter(message => {
			setPopoverFailedItems(state => {
				state[message] = true
				return state
			})
			return !popoverMessages.includes(message)
		})

		setFilteredMessages(filtered)

		showSpinner(false)
		!state.delay && (state.focused = false) // one time only, reset back to false after first time background validation
		if (validationResult === undefined || status) {
			// if validation passed
			setValid(true)
			resolve()
		} else {
			// if validation failed
			setValid(false)
			resolve(filtered)
		}
		state.fulfilled = true
		return filtered
	}

	useEffect(() => {
		return () => {
			// * clean up that solve memory leak issue
			state.resolve()
			clearTimeout(state.timeOutID)
		}
	}, [])

	return (
		<Field
			name={name}
			defaultValue={defaultValue}
			validate={value => {
				// run it in background for first time even if it is not focused (initial focus state is true)
				// we need this because to prevent every field to run validation
				if (state.focused) {
					return (state.promise = new Promise(resolve => {
						// cancel and invalidate previous validation (did not cancel server validation)
						// do not reject when doing server validation
						state.resolve(['validating'])
						if (serverValidation) {
							showSpinner2(false)
							state.fulfilledServer = false
						}
						state.resolve = resolve
						state.fulfilled = false
						// don't show spinner on first time(when delay=0)
						state.delay && showSpinner(true)
						// validate after user stop typing for certain miliseconds
						clearTimeout(state.timeOutID)
						const timeOutID = setTimeout(() => {
							validation(value || '')
								.then(() => {
									if (serverValidation) {
										showSpinner2(true)
										state.fulfilled = true
										// server side validation on typing
										serverValidation(value || '').then(validationResult => {
											// do not close run this if user resume typing before server validation end
											if (state.fulfilled) {
												showSpinner2(false)
												generateTextListWithState(validationResult, resolve)
												state.fulfilledServer = true
											}
										})
									} else {
										generateTextListWithState(undefined, resolve)
									}
								})
								.catch(result => {
									generateTextListWithState(result.errors, resolve)
								})
						}, state.delay)
						state.timeOutID = timeOutID
					}))
				}
				return state.promise
				// this prevent from returning undefined which is valid when component is not focused
				// this happen because final form run validation on all form even there is only one field is onChange
				// so always return your own promise that has been made
			}}>
			{({ input, meta }) => {
				const {
					error,
					submitError,
					touched,
					active,
					modified,
					dirtySinceLastSubmit,
					submitting,
					submitSucceeded,
					submitFailed,
				} = meta

				const errorMessages = error || (!dirtySinceLastSubmit && submitError)
				const onChange_ = e => {
					state.delay = DELAY
					if (onChange === undefined || onChange(e) === undefined) {
						setValue(e.target.value)
						input.onChange(e)
					} else {
						const result = onChange(e)
						if (result !== false) {
							setValue(result)
							input.onChange(e)
						}
					}
				}

				const onBlur_ = e => {
					state.focused = false
					onBlur && onBlur(e)
					input.onBlur(e)
				}

				const onFocus_ = e => {
					state.focused = true
					onFocus && onFocus(e)
					input.onFocus(e)
				}

				const onKeyPress_ = e => {
					onKeyPress && onKeyPress(e)
					if ((e.key === 'Enter' || e.keyCode === 13) && submitRef) {
						e.preventDefault()
						clearInterval(onSubmitTimeOutID)
						setOnSubmitTimeOutId(
							setTimeout(
								() => {
									try {
										// * the ref is real dom node, it doesn't trigger react synthetic event
										// * thus no event handler is available to onClick
										// * final form handleSubmit need event handler occasionally (need more research)
										// * if we catch the error when handleSubmit need the event handler (which is undefined)
										// * the program can continue to work normally (need more research)
										submitRef.current.onClick()
									} catch (e) {
										//console.log(e)
									}
								},
								state.fulfilled && (!serverValidation || state.fulfilledServer)
									? 0
									: DELAY
							)
						)
					}
				}

				const hasDanger =
					!submitting &&
					(!onlyShowErrorAfterSubmit || submitFailed) &&
					!spinner &&
					!spinner2 &&
					errorMessages &&
					((touched && !active) || (active && modified))

				const hasSuccess =
					!submitting &&
					!hideSuccess &&
					!spinner &&
					!spinner2 &&
					!errorMessages &&
					((touched && !active) || (active && modified))

				const spinner_ = (spinner2 && 'Puff') || (spinner && 'ThreeDots')

				const result = value || input.value // the input.value has no purpose other than suppress uncontrollable to controllable warning
				return (
					<>
						<Component
							id={name}
							name={name}
							value={result}
							spinner={spinner_}
							hasDanger={hasDanger}
							hasSuccess={hasSuccess}
							hasFocus={active}
							onBlur={onBlur_}
							onFocus={onFocus_}
							onChange={onChange_}
							onKeyPress={onKeyPress_}
							{...restProps}>
							{(!onlyShowErrorAfterSubmit || submitFailed || !errorMessages) &&
								!spinner &&
								!spinner2 &&
								!submitting &&
								!submitSucceeded &&
								(touched || (active && modified)) && (
									<ListText
										isValid={valid}
										messages={
											(!dirtySinceLastSubmit && submitError) || filteredMessages
										}
									/>
								)}
						</Component>
						{popoverMessages.length > 0 && (
							<PopoverCommon
								isOpen={active}
								target={name}
								spinner={spinner_}
								header={`${name} rules`}>
								<ul>
									{popoverMessages.map((errorMessage, i) => {
										return (
											<li
												className={
													popoverFailedItems[errorMessage]
														? 'text-dark'
														: 'text-info'
												}
												key={errorMessage}>
												{popoverFailedItems[errorMessage] ? (
													errorMessage
												) : (
													<del>{errorMessage}</del>
												)}
											</li>
										)
									})}
								</ul>
							</PopoverCommon>
						)}
					</>
				)
			}}
		</Field>
	)
}

export { FinalInput }
