import React from 'react'
import { Wrapper } from './Wrapper'

const WrapperPropedIndex = props => {
	return <Wrapper bodyClassName='index-page' {...props} />
}

const WrapperPropedAccount = props => {
	return <Wrapper bodyClassName='account-settings' {...props} />
}

const WrapperPropedProfile = props => {
	return <Wrapper bodyClassName='profile-page' {...props} />
}
export { WrapperPropedIndex, WrapperPropedAccount, WrapperPropedProfile }
