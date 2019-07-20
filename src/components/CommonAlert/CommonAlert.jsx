import React from 'react'
// reactstrap components
import { Container, Alert } from 'reactstrap'

// presentation component name need to be simple so it is easier to use
const COMMON_ALERT_BODY = 'body'
const COMMON_ALERT_ICON = 'icon'
const COMMON_ALERT_OPEN = 'open'
const COMMON_ALERT_COLOR = 'color'
const COMMON_ALERT_TOGGLE = 'toggle'

const CommonAlert = props => {
	const {
		[COMMON_ALERT_BODY]: body,
		[COMMON_ALERT_ICON]: icon,
		[COMMON_ALERT_OPEN]: open,
		[COMMON_ALERT_COLOR]: color,
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
	COMMON_ALERT_BODY,
	COMMON_ALERT_ICON,
	COMMON_ALERT_OPEN,
	COMMON_ALERT_COLOR,
}
