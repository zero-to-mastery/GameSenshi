import React, { useState, useRef } from 'react'
import classnames from 'classnames'
import { Field } from 'react-final-form'
import { signUp } from 'state'
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

const InputField = props => {
	const { name, validation, placeholder, icon, type, asyncValidation } = props

	const ref = useRef(null)

	const [errorList, setErrorList] = useState([])

	const [state] = useState({
		errorList: [],
		validating: true,
		delay: 0,
		timeOutID: 0,
		focused: false,
	})

	const [spinner, showSpinner] = useState(false)

	const onResize = () => {
		// change parent component height
		signUp.setState(state => ({
			...state,
			[name + EXTRA_HEIGHT]: ref.current.clientHeight,
		}))
	}
	const generateErrorList = (errMessages, resolve) => {
		let errMsg = Array.isArray(errMessages) ? errMessages : [errMessages]
		const errorList =
			(errMessages &&
				errMsg.map(error => {
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
		if (!asyncValidation) {
			state.validating = false
		}
		signUp.state[name + VALID] = !errMessages
		setErrorList(errorList)
		resolve(errMessages)
	}

	return (
		<Field
			type={type}
			name={name}
			validate={value => {
				if (state.focused) {
					return new Promise(resolve => {
						state.validating = true
						signUp.state[name + VALID] = false
						// validate after user stop typing for 500ms
						clearTimeout(state.timeOutID)
						const timeOutID = setTimeout(() => {
							validation(value)
								.then(() => {
									if (asyncValidation) {
										showSpinner(true)
										// verify the existence of email
										asyncValidation().then(message => {
											console.log(message)
											generateErrorList(message, resolve)
											state.validating = false
											showSpinner(false)
										})
									} else {
										generateErrorList(undefined, resolve)
									}
								})
								.catch(result => {
									generateErrorList(result.errors, resolve)
								})
						}, state.delay)
						state.timeOutID = timeOutID
					})
				}
			}}>
			{({ input, meta }) => {
				const { touched, active, modified } = meta
				const { validating } = state
				return (
					<>
						{type !== 'checkbox' && (
							<InputGroup
								className={classnames({
									'has-danger':
										!validating &&
										errorList.length &&
										((touched && !active) || (active && modified)),
									'has-success':
										!validating &&
										!errorList.length &&
										((touched && !active) || (active && modified)),
									'input-group-focus': active,
									'mb-1': true,
								})}>
								<InputGroupAddon addonType='prepend'>
									<InputGroupText>
										{spinner && asyncValidation ? (
											<div
												style={{ height: 16 }}
												className='d-flex align-items-center'>
												<Loader
													type='Puff'
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
										signUp.state[name] = e.target.value
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
											signUp.state[name] = !signUp.state[name]
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
							{!validating && (touched || (active && modified)) && errorList}
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
