import React from 'react'
import { Link } from 'react-router-dom'

// reactstrap components
import { Button, NavItem } from 'reactstrap'

const SignInButton = props => {
	const { className } = props
	return (
		<NavItem className={`p-0 ${className}`}>
			<Button
				className='btn-simple font-weight-bold'
				color='primary'
				type='button'>
				<Link to='/signIn' style={{ color: '#e14eca', fontWeight: 600 }}>
					Sign in
				</Link>
			</Button>
		</NavItem>
	)
}

export default SignInButton
