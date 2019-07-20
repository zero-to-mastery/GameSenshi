import React from 'react'
// state
import { alertStore, Subscribe } from 'state'
// reactstrap components
import { Container, Alert } from 'reactstrap'
// constants
import { ALERT_OPEN, ALERT_BODY, ALERT_COLOR, ALERT_ICON } from 'constantValues'

const CommonAlert = props => {
	const setNavbarState = props.setNavbarState || (() => {})

	return (
		<Subscribe to={[alertStore]}>
			{alertStore => {
				const {
					[ALERT_BODY]: body,
					[ALERT_OPEN]: open,
					[ALERT_COLOR]: color,
					[ALERT_ICON]: icon,
				} = alertStore.state
				return (
					<Alert
						isOpen={open}
						toggle={() => {
							setNavbarState({ color: 'navbar-transparent' })
							alertStore.setState(state => {
								state[ALERT_OPEN] = !state[ALERT_OPEN]
								return state
							})
						}}
						color={color}
						className='alert-with-icon d-flex align-items-center '>
						<Container>
							<i className={`${icon} mr-3`} />
							<span>{body}</span>
						</Container>
					</Alert>
				)
			}}
		</Subscribe>
	)
}

export default CommonAlert
