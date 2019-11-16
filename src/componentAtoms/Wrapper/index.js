import React from 'react'
import { Wrapper } from './Wrapper'

// some pages use the same body class

const WrapperPropedIndex = props => {
	return <Wrapper bodyClassName='index-page' {...props} />
}

const WrapperPropedAccount = props => {
	return <Wrapper bodyClassName='account-settings' {...props} />
}

const WrapperPropedProfile = props => {
	return <Wrapper bodyClassName='profile-page' {...props} />
}

const WrapperPropedRegister = props => {
	return <Wrapper bodyClassName='register-page' {...props} />
}

export {
	WrapperPropedIndex,
	WrapperPropedAccount,
	WrapperPropedProfile,
	WrapperPropedRegister,
}
