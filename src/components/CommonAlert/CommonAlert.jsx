import React from 'react'
// reactstrap components
import { Container, Alert } from 'reactstrap'

const COMMON_ALERT_STATE_BODY = 'body'
const COMMON_ALERT_STATE_ICON = 'icon'
const COMMON_ALERT_STATE_OPEN = 'open'
const COMMON_ALERT_STATE_COLOR = 'color'
const COMMON_ALERT_TOGGLE = 'toggle'

const CommonAlert = props => {
	const {
		[COMMON_ALERT_STATE_BODY]: body,
		[COMMON_ALERT_STATE_ICON]: icon,
		[COMMON_ALERT_STATE_OPEN]: open,
		[COMMON_ALERT_STATE_COLOR]: color,
		[COMMON_ALERT_TOGGLE]: toggle,
	} = props
	return (
		<Alert
			isOpen={open}
			toggle={toggle}
			color={color}
			className='alert-with-icon d-flex align-items-center '>
			<Container>
				<i className={`${icon} mr-3`} />
				<span>{body}</span>
			</Container>
		</Alert>
	)
}

export {
	CommonAlert,
	COMMON_ALERT_STATE_BODY,
	COMMON_ALERT_STATE_ICON,
	COMMON_ALERT_STATE_OPEN,
	COMMON_ALERT_STATE_COLOR,
	COMMON_ALERT_TOGGLE,
}
