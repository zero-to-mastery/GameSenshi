import React, { memo, useCallback } from 'react'
import { NavItem, NavLink } from 'reactstrap'

import { Exports } from 'component_a_Protons'
import { stopUndefined } from 'utils'

const { Link } = stopUndefined(Exports)

const LIST_NAV_ITEM_PROPS_TO = 'to'
const LIST_NAV_ITEM_PROPS_BODY = 'body'
const LIST_NAV_ITEM_STATE_SHOW = 'show'
const LIST_NAV_ITEM_PROPS_LINK_CLASS_NAME = 'linkClassName'
const LIST_NAV_ITEM_ON_CLICK = 'onClick'

const ListNavItem = memo(props => {
	const { items, show, className, onItemClick } = props

	const show_ = show !== undefined ? show : true

	return (
		show_ &&
		items.map(item => {
			const {
				[LIST_NAV_ITEM_PROPS_TO]: to,
				[LIST_NAV_ITEM_PROPS_BODY]: body,
				[LIST_NAV_ITEM_PROPS_LINK_CLASS_NAME]: linkClassName,
				[LIST_NAV_ITEM_ON_CLICK]: onClick,
			} = item
			const onClick_ = useCallback(
				e => {
					onItemClick && onItemClick(e)
					onClick && onClick(e)
				},
				[onItemClick, onClick]
			)
			return (
				<NavItem className={className} key={to}>
					<NavLink
						tag={Link}
						to={to}
						className={linkClassName}
						onClick={onClick_}
					>
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
