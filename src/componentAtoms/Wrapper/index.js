import React from 'react'
import { Wrapper, WRAPPER_STATE_OFFSET_TOP } from './Wrapper'
import {
	StateContainer,
	storeWrapper,
	STORE_WRAPPER_STATE_OFFSET_TOP,
} from 'state'

const mapStoreWrapperStateToProp = {
	[WRAPPER_STATE_OFFSET_TOP]: STORE_WRAPPER_STATE_OFFSET_TOP,
}

const WrapperStoreWrapper = StateContainer(
	Wrapper,
	[storeWrapper],
	[mapStoreWrapperStateToProp]
)

// index-page is default body class
const WrapperStoreWrapperPropedIndex = props => {
	return <WrapperStoreWrapper bodyClassName='index-page' {...props} />
}

const WrapperStoreWrapperPropedAccount = props => {
	return <WrapperStoreWrapper bodyClassName='account-settings' {...props} />
}

const WrapperStoreWrapperPropedProfile = props => {
	return <WrapperStoreWrapper bodyClassName='profile-page' {...props} />
}

const WrapperStoreWrapperPropedRegister = props => {
	return <WrapperStoreWrapper bodyClassName='register-page' {...props} />
}

const WrapperStoreWrapperPropedLogin = props => {
	return <WrapperStoreWrapper bodyClassName='login-page' {...props} />
}

const WrapperStoreWrapperPropedReset = props => {
	return <WrapperStoreWrapper bodyClassName='reset-page' {...props} />
}

const WrapperStoreWrapperPropedError = props => {
	return <WrapperStoreWrapper bodyClassName='error-page' {...props} />
}

const WrapperStoreWrapperPropedCheckout = props => {
	return <WrapperStoreWrapper bodyClassName='checkout-page' {...props} />
}

export {
	WrapperStoreWrapperPropedIndex,
	WrapperStoreWrapperPropedAccount,
	WrapperStoreWrapperPropedProfile,
	WrapperStoreWrapperPropedRegister,
	WrapperStoreWrapperPropedLogin,
	WrapperStoreWrapperPropedReset,
	WrapperStoreWrapperPropedError,
	WrapperStoreWrapperPropedCheckout,
}
