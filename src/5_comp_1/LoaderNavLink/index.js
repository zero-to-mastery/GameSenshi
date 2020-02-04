import React from 'react'
import {
	LoaderNavLink,
	LOADER_NAV_LINK_STATE_IS_LOADING,
} from './LoaderNavLink'
import { StateContainer, storeUser, STORE_USER_STATE_SIGNING_IN } from '2_state'

const mapStoreUserStateToProp = {
	[LOADER_NAV_LINK_STATE_IS_LOADING]: STORE_USER_STATE_SIGNING_IN,
}

const LoaderNavLinkStoreUser = StateContainer(
	LoaderNavLink,
	[storeUser],
	[mapStoreUserStateToProp],
	[]
)

const LoaderNavLinkStoreUserPropedNavbar = props => {
	return <LoaderNavLinkStoreUser body='...Signing In' {...props} />
}

export { LoaderNavLinkStoreUserPropedNavbar }
