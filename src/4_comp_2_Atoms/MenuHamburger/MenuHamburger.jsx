import React from 'react'
import { NavItem } from 'reactstrap'

const MenuHamburger = props => {
	const { isOpen, toggle } = props
	return (
		<NavItem className='active'>
			<button // button to activate collapsed
				aria-expanded={isOpen}
				className='navbar-toggler'
				onClick={toggle}>
				<span className='navbar-toggler-bar bar1 mt-1' />
				<span className='navbar-toggler-bar bar2' />
				<span className='navbar-toggler-bar bar3' />
			</button>
		</NavItem>
	)
}

export { MenuHamburger }
