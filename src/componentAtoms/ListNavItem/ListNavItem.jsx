import React, { memo } from 'react'
import { NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'

const LIST_NAV_ITEM_PROPS_TO = 'to'
const LIST_NAV_ITEM_PROPS_CHILDREN = 'children'
const LIST_NAV_ITEM_STATE_SHOW = 'show'

const defaultProps = () => ({ [LIST_NAV_ITEM_STATE_SHOW]: true })

const ListNavItem = memo(props => {
	const { items, show } = { ...defaultProps(), ...props }
	return (
		show &&
		items.map(item => {
			const {
				[LIST_NAV_ITEM_PROPS_TO]: to,
				[LIST_NAV_ITEM_PROPS_CHILDREN]: children,
			} = item
			return (
				<NavItem className='active d-none d-lg-inline-flex' key={children}>
					<NavLink tag={Link} to={to}>
						{children}
					</NavLink>
				</NavItem>
			)
		})
	)
})

export {
	ListNavItem,
	LIST_NAV_ITEM_PROPS_TO,
	LIST_NAV_ITEM_PROPS_CHILDREN,
	LIST_NAV_ITEM_STATE_SHOW,
}
