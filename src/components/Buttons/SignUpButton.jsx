import React from 'react'
import { Link } from 'react-router-dom'

// reactstrap components
import { Button, NavItem, NavLink } from 'reactstrap'

//constants
import { ROUTE_SIGN_UP } from 'constantValues'

const SignUpButton = props => {
	const { className } = props
	return (
		<NavItem className={`active ${className}`}>
			<NavLink
				className='p-0'
				data-placement='bottom'
				to={ROUTE_SIGN_UP}
				tag={Link}>
				<Button color='primary' type='button'>
					Sign up
				</Button>
			</NavLink>
		</NavItem>
	)
}

export default SignUpButton
