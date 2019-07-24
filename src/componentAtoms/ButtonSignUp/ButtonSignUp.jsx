import React from 'react'
import { Link } from 'react-router-dom'
// reactstrap components
import { Button, NavItem, NavLink } from 'reactstrap'

const BUTTON_SIGN_UP_PROPS_CLASS_NAME = 'className'
const BUTTON_SIGN_UP_PROPS_TO = 'to'

const ButtonSignUp = props => {
	const {
		[BUTTON_SIGN_UP_PROPS_CLASS_NAME]: className,
		[BUTTON_SIGN_UP_PROPS_TO]: to,
	} = props
	return (
		<NavItem className={`active ${className}`}>
			<NavLink className='p-0' data-placement='bottom' to={to} tag={Link}>
				<Button color='primary' type='button'>
					Sign up
				</Button>
			</NavLink>
		</NavItem>
	)
}

export { ButtonSignUp }
