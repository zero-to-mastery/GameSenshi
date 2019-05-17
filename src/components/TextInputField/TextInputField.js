import React, { useState, useEffect, useRef } from 'react'
import classnames from 'classnames'
import { Field } from 'react-final-form'

import {
	Row,
	Col,
	Alert,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
} from 'reactstrap'

const TextInputField = props => {
	const { name, asyncValidation, placeholder, icon, parentSetState } = props

	const ref = useRef(null)

	const heightName =
		'extraHeight' + name.charAt(0).toUpperCase() + name.slice(1) // match the naming to parent state property

	const [state, setState] = useState({
		errorList: [],
		timeOutID: 0,
	})

	// useEffect(() => {
	// 	console.log('state change', state.errorList.length)
	// 	parentSetState(state => {
	// 		state[heightName] = ref.current.clientHeight
	// 		//console.log('parent state', state)
	// 		return state
	// 	})
	// }, [(ref.current && ref.current.clientHeight) || 0])

	return (
		<Field
			name={name}
			validate={value =>
				new Promise(resolve => {
					clearTimeout(state.timeOutID)
					const timeOutID = setTimeout(() => {
						asyncValidation(value)
							.then(() => {}) // ! some weird final form behavior, need to run a `then` to render the change from error to non error
							.catch(err => err.errors)
							.then(errMessages => {
								const errorList =
									errMessages &&
									errMessages.map((error, index) => {
										return (
											<Alert
												className='mb-1 pb-0 pt-0'
												color='danger'
												key={error}
												style={{
													backgroundColor: 'transparent',
												}}
												// due to limitation of final form, we cannot use fade without sacrificing UX (flicking)
												// it is very difficult to fix the flicking
												fade={false} //https://github.com/reactstrap/reactstrap/pull/1078
											>
												<Row>
													<Col className='col-1'>
														<i className='tim-icons icon-alert-circle-exc text-success' />
													</Col>
													<Col className='col-auto'>
														<small className='text-muted'>{error}</small>
													</Col>
												</Row>
											</Alert>
										)
									})
								// console.log('errorList', errorList)
								setState({ timeOutID, errorList })
								console.log(ref.current.clientHeight)
								resolve(errMessages)
							})
					}, 500)
				})
			}
			render={({ input, meta }) => {
				const { touched, active } = meta
				const { errorList } = state
				return (
					<>
						<InputGroup
							className={classnames({
								'has-danger': touched && errorList && !active,
								'has-success': touched && !errorList && !active,
								'input-group-focus': active,
								'mb-1': true,
							})}>
							<InputGroupAddon addonType='prepend'>
								<InputGroupText>
									<i className={icon} />
								</InputGroupText>
							</InputGroupAddon>
							<Input
								{...input} // will conflict with other props like name, onBlur and onChange
								placeholder={placeholder}
								type='text'
							/>
						</InputGroup>
						<div
							ref={ref} // function component cannot have ref, class and html element can
						>
							{touched && errorList}
						</div>
						<div className='w-100 mb-3' />
					</>
				)
			}}
		/>
	)
}

export default TextInputField
