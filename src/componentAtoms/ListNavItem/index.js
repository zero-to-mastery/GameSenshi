import React, { memo } from 'react'
import { ListNavItem, LIST_NAV_ITEM_STATE_SHOW } from './ListNavItem'
import { StateContainer, storeUser, STORE_USER_STATE_SIGNED_IN } from 'state'
import {
	signedInNavItems,
	signedInNavItemsCollapsed,
	unsignedInNavItemsCollapsed,
} from './utils'

const mapStoreUserStateToProp = {
	[LIST_NAV_ITEM_STATE_SHOW]: STORE_USER_STATE_SIGNED_IN,
}

const ListNavItemStoreUser = StateContainer(
	ListNavItem,
	[storeUser],
	[mapStoreUserStateToProp],
	[]
)

const ListNavItemStoreUserPropedNavbarIndex = memo(props => {
	return (
		<ListNavItemStoreUser
			items={signedInNavItems()}
			className='active d-none d-lg-inline-flex'
			{...props}
		/>
	)
})

const ListNavItemStoreUserPropedCollapsed = memo(props => {
	return (
		<ListNavItemStoreUser
			items={signedInNavItemsCollapsed()}
			className='p-0'
			{...props}
		/>
	)
})

const mapStoreUserStateToPropUnsigned = {
	[LIST_NAV_ITEM_STATE_SHOW]: state => !state[STORE_USER_STATE_SIGNED_IN],
}

const ListNavItemStoreUserUnsigned = StateContainer(
	ListNavItem,
	[storeUser],
	[mapStoreUserStateToPropUnsigned],
	[]
)

const ListNavItemStoreUserPropedCollapsedUnsigned = memo(props => {
	return (
		<ListNavItemStoreUserUnsigned
			items={unsignedInNavItemsCollapsed()}
			className='p-0'
			{...props}
		/>
	)
})

export {
	ListNavItemStoreUserPropedNavbarIndex,
	ListNavItemStoreUserPropedCollapsed,
	ListNavItemStoreUserPropedCollapsedUnsigned,
}
