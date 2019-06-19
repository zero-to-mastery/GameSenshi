import React from 'react'
import { withRouter } from 'react-router-dom'

// reactstrap components
import { Button, NavItem, NavLink } from 'reactstrap'

const SignUpButton = props => {
	const { className, history } = props
	return (
		<NavItem className={`active ${className}`}>
			<NavLink
				className='p-0'
				data-placement='bottom'
				href='/signUp'
				onClick={e => {
					e.preventDefault()
					history.push('/signUp')
				}}>
				<Button color='primary' type='button'>
					Sign up
				</Button>
			</NavLink>
		</NavItem>
	)
}

export default withRouter(SignUpButton)
