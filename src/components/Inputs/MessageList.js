import React from 'react'

import { Row, Col, Alert } from 'reactstrap'
import { STATUS, MESSAGE } from 'constantValues'

const MessageList = (
	validationResult,
	duplicatedErrorMessages = [],
	popoverItemFailed = { items: {} }
) => {
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

	popoverItemFailed.items = {} // reset

	const filteredMessages = messages.filter(message => {
		popoverItemFailed.items[message] = true
		return !duplicatedErrorMessages.includes(message)
	})

	return (
		validationResult &&
		filteredMessages.map(filteredMessage => {
			return (
				<Alert
					className={'mb-0 pb-0 pt-0'}
					color='danger'
					key={filteredMessage}
					style={{
						backgroundColor: 'transparent',
					}}
					// due to limitation of final form, we cannot use fade without sacrificing UX (flicking)
					// it is very difficult to fix the flicking(but possible, need more control)
					fade={false} //https://github.com/reactstrap/reactstrap/pull/1078
				>
					<Row>
						<Col xs='1'>
							<i
								className={`text-success tim-icons ${
									validationResult[STATUS]
										? 'icon-check-2'
										: 'icon-alert-circle-exc'
								}`}
							/>
						</Col>
						<Col xs='auto'>
							<small className='text-muted'>{filteredMessage}</small>

							{
								// ! for some reason, this 'small' component cause error, the same thing happen if you change to p tag or remove filteredMessage
								// ! step to reproduce: fill the form (eg, signup) with valid info, dont submit and move to other page (eg.signin)
								// ! then move back to (eg, signup) and submit
								// * ok issue solve, this is because the initial value of final form reset and is different from what in the authStore value
								// * solution would be initiate the value with authStore value
								// TODO research this issue further, possibly open issue in react-final-form
							}
						</Col>
					</Row>
				</Alert>
			)
		})
	)
}

export default MessageList
