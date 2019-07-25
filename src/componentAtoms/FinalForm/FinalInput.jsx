import React, { useState } from 'react'
import classnames from 'classnames'
import { Field } from 'react-final-form'
import Loader from 'react-loader-spinner'
import {
	Input,
	FormGroup,
	Label,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Popover,
	PopoverHeader,
	PopoverBody,
	Row,
	Col,
} from 'reactstrap'
import Select from 'react-select'
import { TextList } from 'componentAtoms/TextList'

const DELAY = 1000

// TODO to solve memory leak issue, not yet success
const FinalInput = props => {
	const {
		name,
		icon,
		type,
		onChange,
		onFocus,
		onBlur,
		component,
		validation,
		serverValidation,
		hideSuccess,
		popoverMessages,
		submitRef,
		onlyShowErrorOnSubmit,
		className,
		isValid,
		setIsValid,
		submitErrors,
		...restProps
	} = props

	// set default value
	const popoverMessages_ = popoverMessages || []
	const component_ = component || 'text'
	const onFocus_ = onFocus || (() => {})
	const onBlur_ = onBlur || (() => {})
	const [localIsValid, setLocalIsValid] = useState(false)
	const isValid_ = isValid || localIsValid
	const setIsValid_ = setIsValid || setLocalIsValid
	const validation_ = validation || (async () => {})
	const serverValidation_ = serverValidation || (async () => {})
	const Group = icon ? InputGroup : FormGroup

	const [popoverFailedItems, setPopoverFailedItems] = useState({})
	const [onSubmitTimeOutID, setOnSubmitTimeOutId] = useState(0)
	const [filteredMessages, setFilteredMessages] = useState([])
	const [state] = useState({
		value: '',
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

		const isObj = validationResult && status
		const messages = isObj
			? Array.isArray(message)
				? message
				: [message]
			: Array.isArray(validationResult)
			? validationResult
			: validationResult
			? [validationResult]
			: []

		setPopoverFailedItems({})

		const filtered = messages.filter(message => {
			setPopoverFailedItems(state => {
				state[message] = true
				return state
			})
			return !popoverMessages_.includes(message)
		})

		setFilteredMessages(filtered)

		showSpinner(false)
		!state.delay && (state.focused = false) // one time only, reset back to false after first time background validation
		// ! validationResult.status, what could be wrong?
		if (validationResult === undefined || status) {
			// if validation passed
			setIsValid_(true)
			resolve()
		} else {
			// if validation failed
			setIsValid_(false)
			resolve(validationResult)
		}
		state.fulfilled = true
		return filtered
	}
	return (
		<Field
			name={name}
			validate={(value = '') => {
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
						setIsValid_(false)
						// don't show spinner on first time(when delay=0)
						state.delay && showSpinner(true)
						// validate after user stop typing for certain miliseconds
						clearTimeout(state.timeOutID)
						const timeOutID = setTimeout(() => {
							validation_(state.value || '')
								.then(() => {
									if (serverValidation) {
										showSpinner2(true)
										state.fulfilled = true
										// server side validation on typing
										serverValidation_(state.value || '').then(
											validationResult => {
												// do not close run this if user resume typing before server validation end
												if (state.fulfilled) {
													showSpinner2(false)
													generateTextListWithState(validationResult, resolve)
													state.fulfilledServer = true
												}
											}
										)
									} else {
										generateTextListWithState(undefined, resolve)
									}
								})
								.catch(result => {
									generateTextListWithState(result.errors, resolve)
								})
						}, state.delay)
						state.timeOutID = timeOutID
					}).catch(e => {
						console.log('123', e)
					}))
				}
				return state.promise
				// this prevent from returning undefined which is valid when component is not focused
				// this happen because final form run validation on all form even there is only one field is onChange
				// so always return your own promise that has been made
			}}>
			{({ input, meta }) => {
				const {
					touched,
					active,
					modified,
					dirtySinceLastSubmit,
					submitting,
					submitSucceeded,
					submitFailed,
				} = meta

				return (
					<>
						{component_ === 'text' && (
							<Group
								id={name}
								className={classnames(className, {
									'has-danger':
										(!onlyShowErrorOnSubmit || submitFailed) &&
										!spinner &&
										!spinner2 &&
										!isValid_ &&
										((touched && !active) || (active && modified)),
									'has-success':
										!hideSuccess &&
										!spinner &&
										!spinner2 &&
										isValid_ &&
										((touched && !active) || (active && modified)),
									'input-group-focus': active,
									'mb-0': true,
								})}>
								{icon && (
									<InputGroupAddon addonType='prepend'>
										<InputGroupText>
											{spinner || spinner2 ? (
												<div
													style={{ height: 16 }}
													className='d-flex align-items-center'>
													<Loader
														type={
															(spinner2 && 'Puff') || (spinner && 'ThreeDots')
														}
														color='#00BFFF'
														height='15px'
														width='15px'
													/>
												</div>
											) : (
												<i className={icon} />
											)}
										</InputGroupText>
									</InputGroupAddon>
								)}
								<Input
									{...restProps}
									id={input.name}
									name={input.name}
									value={state.value || input.value} // the input.value has no purpose other than suppress uncontrollable to controllable warning
									type={type}
									onChange={e => {
										state.delay = DELAY
										if (onChange === undefined || onChange(e) === undefined) {
											state.value = e.target.value
											input.onChange(e)
										} else {
											const value = onChange(e)
											if (value !== false) {
												state.value = value
												input.onChange(e)
											}
										}
									}}
									onFocus={e => {
										state.focused = true
										onFocus_(e)
										input.onFocus(e)
									}}
									onBlur={e => {
										state.focused = false
										onBlur_(e)
										input.onBlur(e)
									}}
									onKeyPress={e => {
										if ((e.key === 'Enter' || e.keyCode === 13) && submitRef) {
											e.preventDefault()
											clearInterval(onSubmitTimeOutID)
											setOnSubmitTimeOutId(
												setTimeout(
													() => {
														try {
															// ! the ref is real dom node, it doesn't trigger react synthetic event
															// ! thus no event handler is available to onClick
															// ! final form handleSubmit need event handler occasionally (need more research)
															// ! if we catch the error when handleSubmit need the event handler (which is undefined)
															// ! the program can continue to work normally (need more research)
															submitRef.current.onClick()
														} catch (e) {
															//console.log(e)
														}
													},
													state.fulfilled &&
														(!serverValidation || state.fulfilledServer)
														? 0
														: DELAY
												)
											)
										}
									}}
								/>
							</Group>
						)}
						{component_ === 'checkbox' && (
							<FormGroup check className='text-left '>
								<Label check>
									<Input
										{...restProps}
										className={className}
										id={input.name}
										name={input.name}
										value={input.value}
										type={type}
										onChange={e => {
											if (onChange === undefined || onChange(e) === undefined) {
												state.value = e.target.value
												input.onChange(e)
											} else {
												const value = onChange(e)
												if (value !== false) {
													state.value = value
													input.onChange(e)
												}
											}
											// ! bug, details https://github.com/final-form/react-final-form/issues/134
											state.focused = true
											input.onFocus(e)
											onFocus_(e)
											onBlur_(e)
											state.focused = false
											input.onBlur(e)
										}}
										// this event cannot be triggered
										/*onFocus={e => {
											state.focused = true
											input.onFocus(e)
										}}
										onBlur={e => {
											state.focused = false
											input.onBlur(e)
										}}*/
									/>
									<span className='form-check-sign' />
									{`I agree to the `}
									<a href='#pablo' onClick={e => e.preventDefault()}>
										terms and conditions
									</a>
								</Label>
							</FormGroup>
						)}
						{component_ === 'select' && (
							<Select
								// TODO need custom styling, icon, has-danger, has-success
								{...restProps}
								className={className}
								id={input.name}
								name={input.name}
								value={state.value || input.value}
								onChange={e => {
									state.delay = DELAY
									if (onChange === undefined || onChange(e) === undefined) {
										state.value = e.target.value
										input.onChange(e)
									} else {
										const value = onChange(e)
										if (value !== false) {
											state.value = value
											input.onChange(e)
										}
									}
								}}
								onFocus={e => {
									state.focused = true
									onFocus_(e)
									input.onFocus(e)
								}}
								onBlur={e => {
									state.focused = false
									onBlur_(e)
									input.onBlur(e)
								}}
							/>
						)}
						{popoverMessages_.length > 0 && (
							<Popover
								placement='top-end'
								isOpen={active}
								target={name}
								className='popover-primary'>
								<PopoverHeader>
									<Row>
										<Col xs='1'>
											{(spinner || spinner2) && (
												<Loader
													type={
														(spinner2 && 'Puff') || (spinner && 'ThreeDots')
													}
													color='#00BFFF'
													height='15px'
													width='15px'
												/>
											)}
										</Col>
										<Col className='pl-2'>Conventions </Col>
									</Row>
								</PopoverHeader>
								<PopoverBody className='pl-0 pb-0'>
									<ul>
										{popoverMessages_.map((errorMessage, i) => {
											return (
												<li
													className={
														popoverFailedItems[errorMessage]
															? 'text-dark'
															: 'text-info'
													}
													key={i}>
													{popoverFailedItems[errorMessage] ? (
														errorMessage
													) : (
														<del>{errorMessage}</del>
													)}
												</li>
											)
										})}
									</ul>
								</PopoverBody>
							</Popover>
						)}
						{(!onlyShowErrorOnSubmit || submitFailed || isValid_) &&
							!spinner &&
							!spinner2 &&
							!submitting &&
							!submitSucceeded &&
							(touched || (active && modified)) && (
								<TextList
									isValid={isValid_}
									messages={
										!dirtySinceLastSubmit && submitErrors
											? submitErrors
											: filteredMessages
									}
								/>
							)}
					</>
				)
			}}
		</Field>
	)
}

export default FinalInput
