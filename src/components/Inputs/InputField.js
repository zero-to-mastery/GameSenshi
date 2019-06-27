import React, { useState, useRef } from 'react'
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

import ReactResizeDetector from 'react-resize-detector'
import MessageList from 'components/Inputs/MessageList'
import { EXTRA_HEIGHT, IS_VALID, SUBMIT_ERRORS, STATUS } from 'constantValues'

const InputField = props => {
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
		willUnmount,
		...restProps
	} = props

	const willUnmount2 = willUnmount || { value: false }
	const popoverMessages2 = popoverMessages || []
	const component2 = component || 'text'
	const onFocus2 = onFocus || (() => {})
	const onBlur2 = onBlur || (() => {})

	const ref = useRef(null)

	const [messageList, setMessageList] = useState([])
	const [popoverItemFailed] = useState({ items: {} })
	const [state] = useState({
		delay: 0, // initial delay is 0 for fast first time background validation
		timeOutID: 0,
		focused: true,
		value: '',
		promise: Promise.resolve(['Invalid']),
		resolve: () => {},
	})
	const [spinner, showSpinner] = useState(false)
	const [spinner2, showSpinner2] = useState(false)
	const [tState, setTState] = useState({
		[name]: undefined,
		[name + IS_VALID]: false,
		[name + EXTRA_HEIGHT]: 0,
	})
	const container = props.container || {
		state: tState,
		setState: setTState,
	} // give state option to be global state or local state

	const onResize = () => {
		// change parent component height
		// this code is too case specific and only work for signUpPage, need to make it more generic, for example as callback instead
		container.setState(state => {
			state[name + EXTRA_HEIGHT] = ref.current.clientHeight
			return state
		})
	}

	const generateMessageListWithState = (validationResult, resolve) => {
		const messageList = MessageList(
			validationResult,
			popoverMessages2,
			popoverItemFailed
		)
		showSpinner(false)
		!state.delay && (state.focused = false) // one time only, reset back to false after first time background validation
		!willUnmount2.value && setMessageList(messageList)
		if (validationResult === undefined || validationResult[STATUS]) {
			// if validation passed
			container.setState(state => {
				state[name + IS_VALID] = true
				return state
			})
			resolve()
		} else {
			// if validation failed
			container.setState(state => {
				state[name + IS_VALID] = false
				return state
			})
			resolve(validationResult)
		}
		return messageList
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
						!spinner2 && state.resolve(['validating'])
						state.resolve = resolve
						container.setState(state => {
							state[name + IS_VALID] = false
							return state
						})
						state.delay && showSpinner(true)
						// validate after user stop typing for certain miliseconds
						clearTimeout(state.timeOutID)
						const timeOutID = setTimeout(() => {
							validation(container.state[name] || '')
								.then(() => {
									if (serverValidation) {
										showSpinner2(true)
										// server side validation on typing
										serverValidation(value).then(validationResult => {
											generateMessageListWithState(validationResult, resolve)
											showSpinner2(false)
										})
									} else {
										generateMessageListWithState(undefined, resolve)
									}
								})
								.catch(result => {
									generateMessageListWithState(result.errors, resolve)
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
					touched,
					active,
					modified,
					dirtySinceLastSubmit,
					submitting,
					submitSucceeded,
				} = meta
				return (
					<>
						{component2 === 'text' && (
							<InputGroup
								id={name}
								className={classnames({
									'has-danger':
										!spinner &&
										!spinner2 &&
										!container.state[name + IS_VALID] &&
										((touched && !active) || (active && modified)),
									'has-success':
										!hideSuccess &&
										!spinner &&
										!spinner2 &&
										container.state[name + IS_VALID] &&
										((touched && !active) || (active && modified)),
									'input-group-focus': active,
									'mb-0': true,
								})}>
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
								<Input
									{...restProps}
									id={input.name}
									name={input.name}
									value={container.state[name] || input.value} // the input.value has no purpose other than suppress uncontrollable to controllable warning
									type={input.type}
									onChange={e => {
										// why mutate state directly?
										// because we don't want to re-render it until it is validated
										// the state is not read in any component
										// in react final form, re-render automatically happen after validation
										// and validation automatically happen on every onChange event
										// so the role of state here is just to pass value to Field's validate prop
										// basically it is how you would use a plain variable
										state.delay = 1000
										if (onChange === undefined || onChange(e) === undefined) {
											container.state[name] = e.target.value
											input.onChange(e)
										} else {
											const value = onChange(e)
											if (value !== false) {
												container.state[name] = value
												input.onChange(e)
											}
										}
									}}
									onFocus={e => {
										state.focused = true
										onFocus2(e)
										input.onFocus(e)
									}}
									onBlur={e => {
										state.focused = false
										onBlur2(e)
										input.onBlur(e)
									}}
								/>
							</InputGroup>
						)}
						{component2 === 'checkbox' && (
							<FormGroup check className='text-left '>
								<Label check>
									<Input
										{...restProps}
										id={input.name}
										name={input.name}
										value={input.value}
										type={input.type}
										onChange={e => {
											if (onChange === undefined || onChange(e) === undefined) {
												container.state[name] = e.target.value
												input.onChange(e)
											} else {
												const value = onChange(e)
												if (value !== false) {
													container.state[name] = value
													input.onChange(e)
												}
											}
											// ! bug, details https://github.com/final-form/react-final-form/issues/134
											state.focused = true
											input.onFocus(e)
											onFocus2(e)
											onBlur2(e)
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
						{component2 === 'select' && (
							<Select
								// TODO need custom styling, icon, has-danger, has-success
								{...restProps}
								id={input.name}
								name={input.name}
								value={container.state[name] || input.value}
								type={input.type}
								onChange={e => {
									state.delay = 1000
									if (onChange === undefined || onChange(e) === undefined) {
										container.state[name] = e
										input.onChange(e)
									} else {
										const value = onChange(e)
										if (value !== false) {
											container.state[name] = value
											input.onChange(e)
										}
									}
								}}
								onFocus={e => {
									state.focused = true
									onFocus2(e)
									input.onFocus(e)
								}}
								onBlur={e => {
									state.focused = false
									onBlur2(e)
									input.onBlur(e)
								}}
							/>
						)}
						{popoverMessages2.length > 0 && (
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
										{popoverMessages2.map((errorMessage, i) => {
											return (
												<li
													className={
														popoverItemFailed.items[errorMessage]
															? 'text-dark'
															: 'text-info'
													}
													key={i}>
													{popoverItemFailed.items[errorMessage] ? (
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
						<div
							ref={ref} // function component cannot have ref, class and html element can
						>
							{!spinner &&
								!spinner2 &&
								!submitting &&
								!submitSucceeded &&
								(touched || (active && modified)) &&
								((!dirtySinceLastSubmit &&
									container.state[name + SUBMIT_ERRORS]) ||
									messageList)}
							<ReactResizeDetector
								handleWidth
								handleHeight
								onResize={onResize}
							/>
						</div>
					</>
				)
			}}
		</Field>
	)
}

export default InputField
