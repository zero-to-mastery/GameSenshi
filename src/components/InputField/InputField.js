import React, { useState, useRef } from 'react'
import classnames from 'classnames'
import { Field } from 'react-final-form'
import { signUp } from 'state'

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

const InputField = props => {
	const { name, asyncValidation, placeholder, icon, type } = props

	const ref = useRef(null)

	const [state, setState] = useState({
		errorList: [],
		validating: true,
		delay: 0,
		timeOutID: 0,
		focused: true,
	})

	const onResize = () => {
		signUp.setState(state => ({
			...state,
			[name + 'ExtraHeight']: ref.current.clientHeight,
		}))
	}

	return (
		<Field
			type={type}
			name={name}
			validate={value => {
				if (state.focused) {
					return new Promise(resolve => {
						// validate after user stop typing for 500ms
						state.validating = true
						clearTimeout(state.timeOutID)
						// console.log(name, state.delay, state.timeOutID)
						const timeOutID = setTimeout(() => {
							asyncValidation(value)
								.then(() => {}) // pass undefined to the next .then if the value is valid
								.catch(err => err.errors)
								.then(errMessages => {
									const errorList =
										(errMessages &&
											errMessages.map((error, index) => {
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
															{type === 'checkbox' && <Col className='col-1' />}
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
									state.validating = false
									setState(state => ({ ...state, errorList }))
									resolve(errMessages)
								})
						}, state.delay)
						state.timeOutID = timeOutID
					})
				}
			}}>
			{({ input, meta }) => {
				const { touched, active, modified } = meta
				const { errorList } = state
				const { validating } = state
				return (
					<>
						{/*console.log(name, meta)*/}
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
										<i className={icon} />
									</InputGroupText>
								</InputGroupAddon>
								<Input
									{...input} //name, type, onBlur, onChange, onFocus, overwrite it by creating prop after this prop
									onChange={e => {
										// why mutate state directly?
										// because we don't want to re-render it until it is validated
										// in react final form, re-render automatically happen after validation
										// and validation automatically happen on every onChange event
										state.delay = 1000
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
											// ! bug, workaround https://github.com/final-form/react-final-form/issues/134
											input.onBlur(e)
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
							{(touched || (!validating && active && modified)) && errorList}
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
