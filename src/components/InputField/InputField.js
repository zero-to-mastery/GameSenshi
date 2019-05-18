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
		timeOutID: 0,
		validating: true,
		delay: 0,
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
			validate={value =>
				new Promise(resolve => {
					// validate after user stop typing for 500ms
					setState(state => ({ ...state, validating: true }))
					//signUp.state.validating = true
					clearTimeout(state.timeOutID)
					console.log(signUp.state.delay)
					const timeOutID = setTimeout(() => {
						asyncValidation(value)
							.then(() => {}) // ! some weird final form behavior, need to run a `then` to render the change from error to non error
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

								setState(state => ({ ...state, errorList, validating: false }))
								resolve(errMessages)
							})
					}, signUp.state.delay)
					setState(state => ({ ...state, timeOutID }))
				})
			}>
			{({ input, meta }) => {
				const { touched, active, modified } = meta
				const { errorList, validating } = state
				return (
					<>
						{type !== 'checkbox' && (
							<InputGroup
								className={classnames({
									'has-danger':
										errorList.length &&
										((touched && !active) ||
											(!validating && active && modified)),
									'has-success':
										!validating &&
										!errorList.length &&
										((touched && !active) || (active && modified)),
									'input-group-focus': active,
									'mb-1': true,
								})}>
								{console.log(meta, input)}
								<InputGroupAddon addonType='prepend'>
									<InputGroupText>
										<i className={icon} />
									</InputGroupText>
								</InputGroupAddon>
								<Input
									{...input} //name, type, onBlur, onChange, onFocus, overwrite it by creating prop after this prop
									onChange={e => {
										signUp.state.delay = 5000
										input.onChange(e)
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
							{touched && errorList}
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
