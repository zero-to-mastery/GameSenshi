import React, { Fragment } from 'react'
// nodejs library that concatenates classes
import classnames from 'classnames'
// reactstrap components
import { NavItem, NavLink, Nav } from 'reactstrap'

import { Exports } from 'component_a_Protons'
import { stopUndefined } from 'utils'

const { Link } = stopUndefined(Exports)

const TAB_LIST_VERTICAL_NAME = 'name'
const TAB_LIST_VERTICAL_TO = 'to'
const TAB_LIST_VERTICAL_ICON = 'icon'

const TabListVertical = props => {
	const { onClick, pathname, tablist } = props

	return (
		<Nav className='flex-column nav-tabs-info' role='tablist'>
			{tablist.map((tab, i) => {
				const {
					[TAB_LIST_VERTICAL_NAME]: name,
					[TAB_LIST_VERTICAL_ICON]: icon,
					[TAB_LIST_VERTICAL_TO]: to,
				} = tab
				return (
					<Fragment key={to}>
						<NavItem>
							<NavLink
								className={classnames({
									active: pathname.toLowerCase() === to.toLowerCase(),
								})}
								onClick={onClick}
								to={to}
								tag={Link}
								key={name}
							>
								<i className={`tim-icons ${icon}`} /> {name}
							</NavLink>
						</NavItem>
						{i + 1 !== tablist.length && <hr className='line-info' />}
					</Fragment>
				)
			})}
		</Nav>
	)
}

export {
	TabListVertical,
	TAB_LIST_VERTICAL_NAME,
	TAB_LIST_VERTICAL_TO,
	TAB_LIST_VERTICAL_ICON,
}
