import React, { useState, useRef } from 'react'
import classnames from 'classnames'
import { Field } from 'react-final-form'
import Loader from 'react-loader-spinner'

import {
	Row,
	Col,
	Alert,
	Input,
	FormGroup,
	Label,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
} from 'reactstrap'

import ReactResizeDetector from 'react-resize-detector'
import MessageList from 'components/InputField/MessageList'
import { EXTRA_HEIGHT, VALID, SUBMIT_ERRORS } from 'utils/signUpConstants'
import { WILL_UNMOUNT, STATUS } from 'utils/commonConstants'

const InputField = props => {
	const {
		name,
		validation,
		placeholder,
		icon,
		type,
		asyncValidation,
		container,
	} = props

	const ref = useRef(null)

	const [messageList, setMessageList] = useState([])

	const [state] = useState({
		delay: 0,
		timeOutID: 0,
		focused: true,
		value: '',
		promise: Promise.resolve(['Invalid']),
		resolve: () => {},
	})

	const [spinner, showSpinner] = useState(false)
	const [spinner2, showSpinner2] = useState(false)

	const onResize = () => {
		// change parent component height
		// this code may be "extra" because some may not need it
		container &&
			container.setState(state => ({
				...state,
				[name + EXTRA_HEIGHT]: ref.current.clientHeight,
			}))
	}

	const generateMessageListWithState = (validationResult, resolve) => {
		const messageList = MessageList({ validationResult, type })
		showSpinner(false)
		!state.delay && (state.focused = false) // one time only, state.delay = 0 tell us that the component never been visited, this solve icon flickering
		!container.state[WILL_UNMOUNT] && setMessageList(messageList) // do not run setState if parent component going to unmount to prevent memory leak issue
		if (validationResult === undefined || validationResult[STATUS]) {
			// if validation passed
			container.state[name + VALID] = true
			resolve()
		} else {
			// if validation failed
			container.state[name + VALID] = false
			resolve(validationResult)
		}
		return messageList
	}

	return (
		<Field
			type={type}
			name={name}
			validate={value => {
				if (state.focused) {
					return (state.promise = new Promise(resolve => {
						// cancel and invalidate previous validation (did not cancel server validation)
						// do not reject when doing server validation
						!spinner2 && state.resolve(['validating'])
						state.resolve = resolve
						container.state[name + VALID] = false
						showSpinner(true)
						// validate after user stop typing for certain miliseconds
						clearTimeout(state.timeOutID)
						const timeOutID = setTimeout(() => {
							validation(value)
								.then(() => {
									if (asyncValidation) {
										showSpinner2(true)
										// server side validation on typing
										asyncValidation(value).then(validationResult => {
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
				console.log(meta)

				return (
					<>
						{type !== 'checkbox' && (
							<InputGroup
								className={classnames({
									'has-danger':
										!spinner &&
										!spinner2 &&
										!container.state[name + VALID] &&
										((touched && !active) || (active && modified)),
									'has-success':
										!spinner &&
										!spinner2 &&
										container.state[name + VALID] &&
										((touched && !active) || (active && modified)),
									'input-group-focus': active,
									'mb-1': true,
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
									{...input} //name, type, onBlur, onChange, onFocus, value, overwrite it by creating prop after this prop
									onChange={e => {
										// why mutate state directly?
										// because we don't want to re-render it until it is validated
										// the state is not read in any component
										// in react final form, re-render automatically happen after validation
										// and validation automatically happen on every onChange event
										// so the role of state here is just to pass value to Field's validate prop
										// basically it is how you would use a plain variable
										state.delay = 1000
										state.input = e.target.value
										input.onChange(e)
									}}
									onFocus={e => {
										state.focused = true
										input.onFocus(e)
									}}
									onBlur={e => {
										state.focused = false
										input.onBlur(e)
									}}
									placeholder={placeholder}
								/>
							</InputGroup>
						)}
						{type === 'checkbox' && (
							<FormGroup check className='text-left '>
								<Label check>
									<Input
										{...input}
										onChange={e => {
											state.input = e.target.value
											// ! bug, details https://github.com/final-form/react-final-form/issues/134
											state.focused = true
											input.onFocus(e)
											input.onChange(e)
											state.focused = false
											input.onBlur(e)
										}}
										// this event cannot be triggered
										/*onFocus={e => {
											console.log('focused')
											state.focused = true
											input.onFocus(e)
										}}
										onBlur={e => {
											console.log('blured')
											state.focused = false
											input.onBlur(e)
										}}*/
									/>
									<span className='form-check-sign' />
									{`I agree
																		to the `}
									<a href='#pablo' onClick={e => e.preventDefault()}>
										terms and conditions
									</a>
								</Label>
							</FormGroup>
						)}
						<div
							ref={ref} // function component cannot have ref, class and html element can
						>
							{!spinner &&
								!submitSucceeded &&
								(touched || (active && modified)) &&
								((!dirtySinceLastSubmit &&
									!submitting &&
									container.state[name + SUBMIT_ERRORS]) ||
									messageList)}
							<ReactResizeDetector
								handleWidth
								handleHeight
								onResize={onResize}
							/>
						</div>
						<div className='w-100 mb-3' />
					</>
				)
			}}
		</Field>
	)
}

export default InputField
