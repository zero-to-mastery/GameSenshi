import React from 'react'

import { Row, Col, Alert } from 'reactstrap'

const TextList = props => {
	const { messages, isValid } = props
	let messages_ = messages
		? Array.isArray(messages)
			? messages
			: [messages]
		: []

	return messages_.map(message => {
		return (
			<Alert
				className={'mb-0 pb-0 pt-0'}
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
					<Col xs='1'>
						<i
							className={`text-success tim-icons ${
								isValid ? 'icon-check-2' : 'icon-alert-circle-exc'
							}`}
						/>
					</Col>
					<Col xs='auto'>
						<small className='text-muted'>{message}</small>
					</Col>
				</Row>
			</Alert>
		)
	})
}

export { TextList }
