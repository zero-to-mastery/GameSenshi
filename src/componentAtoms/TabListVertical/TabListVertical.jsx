import React, { Fragment } from 'react'
// nodejs library that concatenates classes
import classnames from 'classnames'
// reactstrap components
import { NavItem, NavLink, Nav } from 'reactstrap'

import { ExportProton } from 'componentaProton'
import { stopUndefined } from 'utils'

const { Link } = stopUndefined(ExportProton)

const emptyFunction = () => {}
const emptyArray = []

const defaultProps = () => ({
	onClick: emptyFunction,
	pathname: '',
	navItems: emptyArray,
})

const TabListVertical = props => {
	const { onClick, pathname, navItems } = {
		...defaultProps(),
		...props,
	}

	return (
		<Nav className='flex-column nav-tabs-info' role='tablist'>
			{navItems.map((navItem, i) => {
				const { navLink, icon, to } = navItem
				return (
					<Fragment key={to}>
						<NavItem>
							<NavLink
								className={classnames({
									active: pathname.toLowerCase() === to.toLowerCase(),
								})}
								onClick={onClick}
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
