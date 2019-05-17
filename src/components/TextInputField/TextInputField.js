import React, { useState, useRef } from 'react'
import classnames from 'classnames'
import { Field } from 'react-final-form'
import ReactResizeDetector from 'react-resize-detector'
import { signUp } from 'state'

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
	const { name, asyncValidation, placeholder, icon } = props

	const ref = useRef(null)

	const [state, setState] = useState({
		errorList: [],
		timeOutID: 0,
	})

	const onResize = () => {
		signUp.setState(state => ({
			...state,
			[name + 'ExtraHeight']: ref.current.clientHeight,
		}))
	}

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
												// it is very difficult to fix the flicking(but possible, need more control)
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
								setState({ timeOutID, errorList })
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
						{console.log('test')}
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
		/>
	)
}

export default TextInputField
