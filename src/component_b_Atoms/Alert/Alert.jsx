import React from 'react'
// reactstrap components
import { Container, Alert as AlertRS } from 'reactstrap'

const ALERT_STATE_BODY = 'body'
const ALERT_STATE_ICON = 'icon'
const ALERT_STATE_IS_OPEN = 'isOpen'
const ALERT_STATE_COLOR = 'color'
const ALERT_TOGGLE = 'toggle'

const Alert = props => {
	const {
		[ALERT_STATE_BODY]: body,
		[ALERT_STATE_ICON]: icon,
		[ALERT_STATE_IS_OPEN]: isOpen,
		[ALERT_STATE_COLOR]: color,
		[ALERT_TOGGLE]: toggle,
	} = props
	return (
		<AlertRS
			isOpen={isOpen}
			toggle={toggle}
			color={color}
			className='alert-with-icon'
		>
			<Container className='d-flex align-items-center'>
				<i className={`${icon} mr-3`} />
				{body}
			</Container>
		</AlertRS>
	)
}

export {
	Alert,
	ALERT_STATE_BODY,
	ALERT_STATE_ICON,
	ALERT_STATE_IS_OPEN,
	ALERT_STATE_COLOR,
	ALERT_TOGGLE,
}
