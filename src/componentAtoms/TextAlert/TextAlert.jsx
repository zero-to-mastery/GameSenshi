import React from 'react'
import classnames from 'classnames'
import { Row, Col, Alert } from 'reactstrap'

const TextAlert = props => {
	const { messages, icon, isOpen, timeout } = props
	let messages_ = messages ? (Array.isArray(messages) ? messages : [messages]) : []

	return messages_.map(message => {
		return (
			<Alert
				className={'mb-0 pb-0 pt-0'}
				color='danger'
				key={message}
				style={{
					backgroundColor: 'transparent',
				}}
				fade={true}
				isOpen={isOpen}
				timeout={timeout}
			>
				<Row>
					<Col xs='1'>
						<i className={classnames('text-success', icon)} />
					</Col>
					<Col xs='auto'>
						<small className='text-muted'>{message}</small>
					</Col>
				</Row>
			</Alert>
		)
	})
}

export { TextAlert }
