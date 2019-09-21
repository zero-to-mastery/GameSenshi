import React from 'react'
import {
	LoaderText,
	LABEL_SMALL_STATE_IS_LOADING,
} from 'componentAtoms/LoaderText/LoaderText'
import { StateContainer, storeUser, STORE_USER_STATE_SIGNING_IN } from 'state'

const LoaderTextPropedIndexNavbar = props => {
	return <LoaderText body='...Signing In' {...props} />
}

const mapStoreUserStateToProp = {
	[LABEL_SMALL_STATE_IS_LOADING]: STORE_USER_STATE_SIGNING_IN,
}

const LoaderTextPropedIndexNavbarStoreUser = StateContainer(
	LoaderTextPropedIndexNavbar,
	[storeUser],
	[mapStoreUserStateToProp],
	[]
)

export { LoaderTextPropedIndexNavbarStoreUser }
