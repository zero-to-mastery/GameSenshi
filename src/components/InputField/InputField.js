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
import { EXTRA_HEIGHT, VALID } from 'utils/signUpConstants'
import { WILL_UNMOUNT, STATUS, MESSAGE } from 'utils/commonConstants'

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
		invalid: true,
		resolve: () => {},
	})

	const [spinner, showSpinner] = useState(false)
	const [spinner2, showSpinner2] = useState(false)

	const onResize = () => {
		// change parent component height
		// this code may be "extra" because some may not need it
		container.setState(state => ({
			...state,
			[name + EXTRA_HEIGHT]: ref.current.clientHeight,
		}))
	}
	const generateMessageList = (validationResult, resolve) => {
		// if validationResult is undefined, it passed validation
		// if validationResult is {status:true/false, message:string/array of string} and if the status is true, it passed validation
		// if validationResult is string or array of string, it failed validation
		const isObj = validationResult && validationResult[STATUS]
		const msg = isObj
			? Array.isArray(validationResult[MESSAGE])
				? validationResult[MESSAGE]
				: [validationResult[MESSAGE]]
			: Array.isArray(validationResult)
			? validationResult
			: [validationResult]
		const messageList =
			(validationResult &&
				msg.map(error => {
					return (
						<Alert
							className={'mb-1 pb-0 pt-0'}
							color='danger'
							key={error}
							style={{
								backgroundColor: 'transparent',
							}}
							// due to limitation of final form, we cannot use fade without sacrificing UX (flicking)
							// it is very difficult to fix the flicking(but possible, need more control)
							fade={false} //https://github.com/reactstrap/reactstrap/pull/1078
						>
							<Row>
								{type === 'checkbox' && (
									<Col
										className='col-1' // indent for checkbox
									/>
								)}
								<Col className='col-1'>
									<i className='tim-icons icon-alert-circle-exc text-success' />
								</Col>
								<Col className='col-auto'>
									<small className='text-muted'>{error}</small>
								</Col>
							</Row>
						</Alert>
					)
				})) ||
			[]
		showSpinner(false)
		!state.delay && (state.focused = false) // one time only, state.delay = 0 tell us that the component never been visited, this solve icon flickering
		container.state[name + VALID] = !validationResult // as submit functionality is recovered, will removed this
		!container.state[WILL_UNMOUNT] && setMessageList(messageList) // do not run setState if parent component going to unmount to prevent memory leak issue
		if (validationResult === undefined || validationResult[STATUS]) {
			// if validation passed
			state.invalid = false
			resolve()
		} else {
			// if validation failed
			state.invalid = true
			resolve(validationResult)
		}
	}

	return (
		<Field
			type={type}
			name={name}
			validate={value => {
				if (state.focused) {
					return new Promise(resolve => {
						// cancel and invalidate previous validation (did not cancel server validation)
						// do not reject when doing server validation
						!spinner2 && state.resolve(['validating'])
						state.resolve = resolve
						state.invalid = true
						showSpinner(true)
						container.state[name + VALID] = false // as submit functionality is recovered, will removed this
						// validate after user stop typing for certain miliseconds
						clearTimeout(state.timeOutID)
						const timeOutID = setTimeout(() => {
							validation(value)
								.then(() => {
									if (asyncValidation) {
										showSpinner2(true)
										// verify the existence of email
										asyncValidation().then(validationResult => {
											generateMessageList(validationResult, resolve)
											showSpinner2(false)
										})
									} else {
										generateMessageList(undefined, resolve)
									}
								})
								.catch(result => {
									generateMessageList(result.errors, resolve)
								})
						}, state.delay)
						state.timeOutID = timeOutID
					})
				}
				return state.invalid ? ['Invalid'] : undefined // this prevent from returning undefined which is valid when component is not focused
			}}>
			{({ input, meta }) => {
				const { touched, active, modified, invalid } = meta
				return (
					<>
						{type !== 'checkbox' && (
							<InputGroup
								className={classnames({
									'has-danger':
										!spinner &&
										invalid &&
										((touched && !active) || (active && modified)),
									'has-success':
										!spinner &&
										!invalid &&
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
										container.state[name] = e.target.value // as submit functionality is recovered, will removed this
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
											// ! React Final Form checkbox value is crazy, have to toggle it myself
											// ! but the value in validation is correct, weird!
											container.state[name] = !container.state[name] // as submit functionality is recovered, will removed this
											// ! another bug, workaround https://github.com/final-form/react-final-form/issues/134
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
							{!spinner && (touched || (active && modified)) && messageList}
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
