import React from 'react'
// reactstrap components
import { Container, Alert as AlertRS } from 'reactstrap'

const ALERT_STATE_BODY = 'body'
const ALERT_STATE_IS_OPEN = 'isOpen'
const ALERT_STATE_STATUS = 'status'
const ALERT_TOGGLE = 'toggle'

const Alert = props => {
	const {
		[ALERT_STATE_BODY]: body,
		[ALERT_STATE_IS_OPEN]: isOpen,
		[ALERT_STATE_STATUS]: status,
		[ALERT_TOGGLE]: toggle,
	} = props
	return (
		<AlertRS
			isOpen={isOpen}
			toggle={toggle}
			color={status ? 'success' : 'danger'}
			className='alert-with-icon'
		>
			<Container className='d-flex align-items-center'>
				<i
					className={`${
						status
							? 'tim-icons icon-bell-55'
							: 'tim-icons icon-alert-circle-exc'
					} mr-3`}
				/>
				{body}
			</Container>
		</AlertRS>
	)
}

export {
	Alert,
	ALERT_STATE_BODY,
	ALERT_STATE_IS_OPEN,
	ALERT_STATE_STATUS,
	ALERT_TOGGLE,
}
