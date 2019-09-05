import React from 'react'
// reactstrap components
import { Container, Alert } from 'reactstrap'

const ALERT_COMMON_STATE_BODY = 'body'
const ALERT_COMMON_STATE_ICON = 'icon'
const ALERT_COMMON_STATE_OPEN = 'isOpen'
const ALERT_COMMON_STATE_COLOR = 'color'
const ALERT_COMMON_TOGGLE = 'toggle'

const AlertCommon = props => {
	const {
		[ALERT_COMMON_STATE_BODY]: body,
		[ALERT_COMMON_STATE_ICON]: icon,
		[ALERT_COMMON_STATE_OPEN]: isOpen,
		[ALERT_COMMON_STATE_COLOR]: color,
		[ALERT_COMMON_TOGGLE]: toggle,
	} = props
	return (
		<Alert
			isOpen={isOpen}
			toggle={toggle}
			color={color}
			className='alert-with-icon'>
			<Container className='d-flex align-items-center'>
				<i className={`${icon} mr-3`} />
				{body}
			</Container>
		</Alert>
	)
}

export {
	AlertCommon,
	ALERT_COMMON_STATE_BODY,
	ALERT_COMMON_STATE_ICON,
	ALERT_COMMON_STATE_OPEN,
	ALERT_COMMON_STATE_COLOR,
	ALERT_COMMON_TOGGLE,
}
