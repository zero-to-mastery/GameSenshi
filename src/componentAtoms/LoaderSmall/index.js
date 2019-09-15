import React from 'react'
import {
	LoaderSmall,
	LABEL_SMALL_STATE_IS_LOADING,
} from 'componentAtoms/LoaderSmall/LoaderSmall'
import { StateContainer, storeUser, STORE_USER_STATE_SIGNING_IN } from 'state'

const LoaderSmallPropedNavbar = props => {
	return <LoaderSmall body='...Signing In' {...props} />
}

const mapStoreUserStateToProp = {
	[LABEL_SMALL_STATE_IS_LOADING]: STORE_USER_STATE_SIGNING_IN,
}

const LoaderSmallPropedNavbarStoreUser = StateContainer(
	LoaderSmallPropedNavbar,
	[storeUser],
	[mapStoreUserStateToProp],
	[]
)

export { LoaderSmallPropedNavbarStoreUser }
