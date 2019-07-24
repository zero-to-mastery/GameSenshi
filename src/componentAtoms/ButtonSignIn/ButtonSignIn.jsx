import React from 'react'
import { Link } from 'react-router-dom'
// reactstrap components
import { Button, NavItem, NavLink } from 'reactstrap'

const BUTTON_SIGN_IN_PROPS_CLASS_NAME = 'className'
const BUTTON_SIGN_IN_PROPS_TO = 'to'

const ButtonSignIn = props => {
	const {
		[BUTTON_SIGN_IN_PROPS_CLASS_NAME]: className,
		[BUTTON_SIGN_IN_PROPS_TO]: to,
	} = props
	return (
		<NavItem className={`p-0 ${className}`}>
			<NavLink className='p-0' data-placement='bottom' to={to} tag={Link}>
				<Button
					className='btn-simple font-weight-bold'
					color='primary'
					type='button'>
					Sign in
				</Button>
			</NavLink>
		</NavItem>
	)
}

export { ButtonSignIn }
