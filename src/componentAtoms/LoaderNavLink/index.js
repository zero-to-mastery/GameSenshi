import React from 'react'
import { LoaderNavLink, LABEL_SMALL_STATE_IS_LOADING } from './LoaderNavLink'
import { StateContainer, storeUser, STORE_USER_STATE_SIGNING_IN } from 'state'

const LoaderNavLinkPropedIndexNavbar = props => {
	return <LoaderNavLink body='...Signing In' {...props} />
}

const mapStoreUserStateToProp = {
	[LABEL_SMALL_STATE_IS_LOADING]: STORE_USER_STATE_SIGNING_IN,
}

const LoaderNavLinkPropedIndexNavbarStoreUser = StateContainer(
	LoaderNavLinkPropedIndexNavbar,
	[storeUser],
	[mapStoreUserStateToProp],
	[]
)

export { LoaderNavLinkPropedIndexNavbarStoreUser }
