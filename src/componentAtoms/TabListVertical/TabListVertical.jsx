import React, { useState, Fragment } from 'react'
//routing
import { Link } from 'react-router-dom'
// nodejs library that concatenates classes
import classnames from 'classnames'
// reactstrap components
import { NavItem, NavLink, Nav } from 'reactstrap'

const TabListVertical = props => {
	const [activeTab, setActiveTab] = useState(0)

	const { onClick, navItems } = props
	const onClick_ = onClick || (() => {})
	return (
		<Nav className='flex-column nav-tabs-info' role='tablist'>
			{navItems.map((navItem, i) => {
				const { navLink, icon, to } = navItem
				return (
					<Fragment key={i}>
						<NavItem>
							<NavLink
								className={classnames({
									active: activeTab === i,
								})}
								onClick={e => {
									onClick_(e)
									setActiveTab(i)
								}}
								to={to}
								tag={Link}>
								<i className={`tim-icons ${icon}`} /> {navLink}
							</NavLink>
						</NavItem>
						{i + 1 !== navItems.length && <hr className='line-info' />}
					</Fragment>
				)
			})}
		</Nav>
	)
}

export { TabListVertical }
