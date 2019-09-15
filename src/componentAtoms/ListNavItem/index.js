import React, { memo } from 'react'
import {
	ListNavItem,
	LIST_NAV_ITEM_STATE_SHOW,
} from 'componentAtoms/ListNavItem/ListNavItem'
import { StateContainer, storeUser, STORE_USER_STATE_SIGNED_IN } from 'state'
import { signedInNavItems } from 'componentAtoms/ListNavItem/utils'

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
	return <ListNavItemStoreUser items={signedInNavItems} />
})

export { ListNavItemStoreUserPropedNavbarIndex }
