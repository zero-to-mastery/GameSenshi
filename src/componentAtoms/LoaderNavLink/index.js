import React from 'react'
import { LoaderNavLink, LABEL_SMALL_STATE_IS_LOADING } from './LoaderNavLink'
import { StateContainer, storeUser, STORE_USER_STATE_SIGNING_IN } from 'state'

const LoaderNavLinkStoreUser = StateContainer(
	LoaderNavLink,
	[storeUser],
	[mapStoreUserStateToProp],
	[]
)

const LoaderNavLinkStoreUserPropedNavbar = props => {
	return <LoaderNavLinkStoreUser body='...Signing In' {...props} />
}

const mapStoreUserStateToProp = {
	[LABEL_SMALL_STATE_IS_LOADING]: STORE_USER_STATE_SIGNING_IN,
}
export { LoaderNavLinkStoreUserPropedNavbar }
