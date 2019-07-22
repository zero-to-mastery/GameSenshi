import React from 'react'
import { Link } from 'react-router-dom'

// reactstrap components
import { Button, NavItem, NavLink } from 'reactstrap'

//constants
import { ROUTE_PAGE_SIGN_IN } from 'constantValues'

const SignInButton = props => {
	const { className } = props
	return (
		<NavItem className={`p-0 ${className}`}>
			<NavLink
				className='p-0'
				data-placement='bottom'
				to={ROUTE_PAGE_SIGN_IN}
				tag={Link}>
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

export default SignInButton
