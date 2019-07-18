import React from 'react'
// state
import { alertStore, Subscribe } from 'state'
// reactstrap components
import { Container, Alert as AlertStrap } from 'reactstrap'
// constants
import { ALERT_OPEN, ALERT_BODY, ALERT_COLOR, ALERT_ICON } from 'constantValues'

const Alert = props => {
	const { navbarHeight } = props

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
					<AlertStrap
						style={{ zIndex: 1000, marginTop: navbarHeight }}
						isOpen={open}
						toggle={() => {
							setNavbarState({ color: 'navbar-transparent' })
							alertStore.setState(state => {
								state[ALERT_OPEN] = !state[ALERT_OPEN]
								return state
							})
						}}
						color={color}
						className='alert-with-icon d-flex align-items-center fixed-top'>
						<Container>
							<i className={`${icon} mr-3`} />
							<span>{body}</span>
						</Container>
					</AlertStrap>
				)
			}}
		</Subscribe>
	)
}

export default Alert
