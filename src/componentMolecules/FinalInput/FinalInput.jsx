import React, { useState, useEffect, useCallback, memo } from 'react'
import { Field } from 'react-final-form'
import { stopUndefined } from 'utils'
import classnames from 'classnames'
// core components
import { Exports } from 'componentAtoms'

const { TextAlert, PopoverCommon } = stopUndefined(Exports)

const DELAY = 1
const DELAY2 = 1000

const emptyArray = []

const FinalInput = memo(props => {
	const [localValue, seLocalValue] = useState('')

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
	} = props

	// set default value
	const setValue_ = setValue || seLocalValue
	const value_ = setValue || value ? value : localValue
	const popoverMessages_ = popoverMessages || emptyArray

	const [popoverFailedItems, setPopoverFailedItems] = useState({})
	const [filteredMessages, setFilteredMessages] = useState([])
	const [valid, setValid] = useState(false) // * this is needed as when typing, error from meta become undefined
	const [state] = useState({
		delay: 0, // initial delay is 0 for fast first time background validation
		timeOutID: 0,
		submitKeyPressed: false,
		focused: true, //first round should be true for initial auto check
		promise: Promise.resolve(['Invalid']),
		resolve: () => {},
		validated: false,
	})
	const [spinner, showSpinner] = useState(false)

	const generateTextListWithState = (validationResult, resolve, timeOutID) => {
		if (timeOutID === state.timeOutID) {
			const validationResult_ = validationResult || {}
			const { status, message } = validationResult_
			// validationResult value is either undefined or {status:true/false, message:string/array of string} or string or array of string
			// if validationResult is undefined, it passed validation, do not show List
			// if validationResult is status true, it passed validation, show List if message available
			// if validationResult is status if failed or string or array of string, it failed validation, it must show List because failed validation must has reason

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
				return !popoverMessages_.includes(message)
			})

			showSpinner(false)
			!state.delay && (state.focused = false) // one time only, reset back to false after first time background validation

			if (validationResult === undefined || status) {
				// if validation passed
				setValid(true)
				setFilteredMessages([])
				resolve()
			} else {
				// if validation failed
				setValid(false)
				if (filtered.length > 0) {
					setFilteredMessages(filtered)
					resolve(filtered)
				} else {
					setFilteredMessages(['something is wrong'])
					resolve(['error'])
				}
			}
			state.validated = true
			if (state.submitKeyPressed) {
				// if use click enter while state.validated is false, it will submit when state.validated is true
				state.submitKeyPressed = false
				submitRef.current.onClick()
			}
			return filtered
		}
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
						state.resolve = resolve
						state.validated = false
						state.delay > 500 && showSpinner('Puff')
						// validate after user stop typing for certain miliseconds
						clearTimeout(state.timeOutID)
						const timeOutID = setTimeout(() => {
							validation(value || '')
								.then(() => {
									if (serverValidation) {
										showSpinner('ThreeDots')
										// server side validation on typing
										clearTimeout(state.timeOutID)
										const timeOutID = setTimeout(() => {
											serverValidation(value || '').then(validationResult => {
												// do not close run this if user resume typing before server validation end
												generateTextListWithState(
													validationResult,
													resolve,
													timeOutID
												)
											})
										}, DELAY2)
										state.timeOutID = timeOutID
									} else {
										generateTextListWithState(undefined, resolve, timeOutID)
									}
								})
								.catch(result => {
									generateTextListWithState(result.errors, resolve, timeOutID)
								})
						}, state.delay)
						state.timeOutID = timeOutID
					}))
				}
				return state.promise
				// this prevent from returning undefined which is valid validation when component is not focused
				// this happen because final form run validation on all form even though there is only one field is onChange
				// so always return your own promise that has been made
			}}
		>
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
				const onChange_ = useCallback(
					e => {
						state.delay = DELAY
						if (onChange === undefined || onChange(e) === undefined) {
							setValue_(e.target.value)
							input.onChange(e)
						} else {
							const result = onChange(e)
							if (result !== false) {
								setValue_(result)
								input.onChange(e)
							}
						}
					},
					[onChange]
				)

				const onBlur_ = useCallback(
					e => {
						state.focused = false
						onBlur && onBlur(e)
						input.onBlur(e)
					},
					[onBlur]
				)

				const onFocus_ = useCallback(
					e => {
						state.focused = true
						onFocus && onFocus(e)
						input.onFocus(e)
					},
					[onFocus]
				)

				const onKeyPress_ = useCallback(
					e => {
						onKeyPress && onKeyPress(e)
						if ((e.key === 'Enter' || e.keyCode === 13) && submitRef) {
							e.preventDefault()
							if (state.validated) {
								submitRef.current.onClick()
							} else {
								state.submitKeyPressed = true
							}
						}
					},
					[onKeyPress, submitRef, serverValidation]
				)

				const hasDanger =
					!submitting &&
					(!onlyShowErrorAfterSubmit || submitFailed) &&
					!spinner &&
					errorMessages &&
					((touched && !active) || (active && modified))

				const hasSuccess =
					!submitting &&
					!hideSuccess &&
					!spinner &&
					!errorMessages &&
					((touched && !active) || (active && modified))

				const result = value_ || input.value // the input.value has no purpose other than suppress uncontrollable to controllable warning
				return (
					<>
						<Component
							id={name}
							name={name}
							value={result}
							spinner={spinner}
							hasDanger={hasDanger}
							hasSuccess={hasSuccess}
							hasFocus={active}
							onBlur={onBlur_}
							onFocus={onFocus_}
							onChange={onChange_}
							onKeyPress={onKeyPress_}
							{...restProps}
						>
							<TextAlert
								icon={classnames('tim-icons', {
									'icon-check-2': valid,
									'icon-alert-circle-exc': !valid,
								})}
								messages={
									(!dirtySinceLastSubmit && submitError) || filteredMessages
								}
								isOpen={
									(!onlyShowErrorAfterSubmit || submitFailed) &&
									filteredMessages.length > 0 &&
									!spinner &&
									!submitting &&
									!submitSucceeded &&
									(touched || (active && modified))
								}
							/>
						</Component>
						{popoverMessages_.length > 0 && (
							<PopoverCommon
								isOpen={active}
								target={name}
								spinner={spinner}
								header={`${name} rules`}
							>
								<ul>
									{popoverMessages_.map(errorMessage => {
										return (
											<li
												className={
													popoverFailedItems[errorMessage]
														? 'text-dark'
														: 'text-info'
												}
												key={errorMessage}
											>
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
})

export { FinalInput }
