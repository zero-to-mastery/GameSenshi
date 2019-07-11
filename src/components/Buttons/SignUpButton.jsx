import React from 'react'
import { Link } from 'react-router-dom'

// reactstrap components
import { Button, NavItem, NavLink } from 'reactstrap'

const SignUpButton = props => {
	const { className } = props
	return (
		<NavItem className={`active ${className}`}>
			<NavLink className='p-0' data-placement='bottom' to='/signUp' tag={Link}>
				<Button color='primary' type='button'>
					Sign up
				</Button>
			</NavLink>
		</NavItem>
	)
}

export default SignUpButton
