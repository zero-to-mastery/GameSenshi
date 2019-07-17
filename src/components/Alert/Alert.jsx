import React from 'react'
// state
import { alertStore, Subscribe } from 'state'
// reactstrap components
import { Container, Alert as Alert1 } from 'reactstrap'
// constants
import { ALERT_OPEN, ALERT_BODY, ALERT_COLOR } from 'constantValues'

const Alert = props => {
	const { navbarHeight } = props

	const setNavbarState = props.setNavbarState || (() => {})

	return (
		<Subscribe to={[alertStore]}>
			{alertStore => {
				const {
					[ALERT_BODY]: alertBody,
					[ALERT_OPEN]: alertOpen,
					[ALERT_COLOR]: alertColor,
				} = alertStore.state
				return (
					<Alert1
						style={{ zIndex: 1000, marginTop: navbarHeight }}
						isOpen={alertOpen}
						toggle={() => {
							setNavbarState({ color: 'navbar-transparent' })
							alertStore.setState(state => {
								state[ALERT_OPEN] = !state[ALERT_OPEN]
								return state
							})
						}}
						color={alertColor}
						className='alert-with-icon d-flex align-items-center fixed-top'>
						<Container>
							<i className='tim-icons icon-bell-55 mr-3' />
							<span>{alertBody}</span>
						</Container>
					</Alert1>
				)
			}}
		</Subscribe>
	)
}

export default Alert
