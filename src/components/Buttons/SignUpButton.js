import React from 'react'
import { Link } from 'react-router-dom'

// reactstrap components
import { Button, NavItem } from 'reactstrap'

const SignUpButton = props => {
	const { className } = props
	return (
		<NavItem className={`active ${className}`}>
			<Button color='primary' type='button'>
				<Link to={'/signUp'} style={{ fontWeight: 400 }}>
					Sign up
				</Link>
			</Button>
		</NavItem>
	)
}

export default SignUpButton
