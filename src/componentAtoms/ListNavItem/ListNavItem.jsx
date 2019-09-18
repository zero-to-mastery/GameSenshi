import React, { memo } from 'react'
import { NavItem, NavLink } from 'reactstrap'

import { ExportProton } from 'componentaProton'
import { stopUndefined } from 'utils'

const { Link } = stopUndefined(ExportProton)

const LIST_NAV_ITEM_PROPS_TO = 'to'
const LIST_NAV_ITEM_PROPS_BODY = 'body'
const LIST_NAV_ITEM_STATE_SHOW = 'show'
const LIST_NAV_ITEM_PROPS_LINK_CLASS_NAME = 'linkClassName'
const LIST_NAV_ITEM_ON_CLICK = 'onClick'

const defaultProps = () => ({ [LIST_NAV_ITEM_STATE_SHOW]: true })

const ListNavItem = memo(props => {
	const { items, show, className } = { ...defaultProps(), ...props }
	return (
		show &&
		items.map(item => {
			const {
				[LIST_NAV_ITEM_PROPS_TO]: to,
				[LIST_NAV_ITEM_PROPS_BODY]: body,
				[LIST_NAV_ITEM_PROPS_LINK_CLASS_NAME]: linkClassName,
				[LIST_NAV_ITEM_ON_CLICK]: onClick,
			} = item
			return (
				<NavItem className={className} key={to}>
					<NavLink
						tag={Link}
						to={to}
						className={linkClassName}
						onClick={onClick}>
						{body}
					</NavLink>
				</NavItem>
			)
		})
	)
})

export {
	ListNavItem,
	LIST_NAV_ITEM_PROPS_TO,
	LIST_NAV_ITEM_PROPS_BODY,
	LIST_NAV_ITEM_STATE_SHOW,
	LIST_NAV_ITEM_PROPS_LINK_CLASS_NAME,
	LIST_NAV_ITEM_ON_CLICK,
}
