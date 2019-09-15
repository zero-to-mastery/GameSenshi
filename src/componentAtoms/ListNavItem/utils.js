import {
	LIST_NAV_ITEM_PROPS_TO,
	LIST_NAV_ITEM_PROPS_CHILDREN,
} from 'componentAtoms/ListNavItem/ListNavItem'
import { ROUTE_PAGE_JOIN } from 'routes'

const signedInNavItems = [
	{
		[LIST_NAV_ITEM_PROPS_TO]: ROUTE_PAGE_JOIN,
		[LIST_NAV_ITEM_PROPS_CHILDREN]: 'Senshi Portal',
	},
]

export { signedInNavItems }
