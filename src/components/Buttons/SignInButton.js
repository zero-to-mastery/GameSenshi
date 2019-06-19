import React from 'react'
import { withRouter } from 'react-router-dom'

// reactstrap components
import { Button, NavItem, NavLink } from 'reactstrap'

const SignInButton = props => {
	const { className, history } = props
	return (
		<NavItem className={`p-0 ${className}`}>
			<NavLink
				className='p-0'
				data-placement='bottom'
				href='/signIn'
				onClick={e => {
					e.preventDefault()
					history.push('/signIn')
				}}>
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

export default withRouter(SignInButton)
