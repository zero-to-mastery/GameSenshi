import React from 'react'

import { Row, Col, Alert } from 'reactstrap'
import { STATUS, MESSAGE } from 'utils/commonConstants'

const MessageList = props => {
	const { validationResult, type } = props

	// if validationResult is undefined, it passed validation
	// if validationResult is {status:true/false, message:string/array of string} and if the status is true, it passed validation
	// if validationResult is string or array of string, it failed validation
	const isObj = validationResult && validationResult[STATUS]
	const messages = isObj
		? Array.isArray(validationResult[MESSAGE])
			? validationResult[MESSAGE]
			: [validationResult[MESSAGE]]
		: Array.isArray(validationResult)
		? validationResult
		: [validationResult]
	return (
		validationResult &&
		messages.map(message => {
			return (
				<Alert
					className={'mb-1 pb-0 pt-0'}
					color='danger'
					key={message}
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
							<small className='text-muted'>{message}</small>
						</Col>
					</Row>
				</Alert>
			)
		})
	)
}

export default MessageList
