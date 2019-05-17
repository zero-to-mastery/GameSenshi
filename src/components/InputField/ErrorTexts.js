import React, { useRef } from 'react'
import ReactResizeDetector from 'react-resize-detector'
import { signUp } from 'state'

import { Row, Col, Alert } from 'reactstrap'

const ErrorTexts = props => {
	const { errorList, name, show } = props

	const ref = useRef(null)

	const onResize = () => {
		signUp.setState(state => ({
			...state,
			[name + 'ExtraHeight']: ref.current.clientHeight,
		}))
	}

	return (
		<div
			ref={ref} // function component cannot have ref, class and html element can
		>
			{show &&
				errorList &&
				errorList.map((error, index) => {
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
				})}
			<ReactResizeDetector handleHeight onResize={onResize} />
		</div>
	)
}

export default ErrorTexts
