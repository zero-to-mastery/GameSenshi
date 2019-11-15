import React from 'react'
import { Wrapper } from './Wrapper'

const WrapperPropedIndex = props => {
	return <Wrapper bodyClassName='index-page' {...props} />
}

const WrapperPropedAccount = props => {
	return <Wrapper bodyClassName='account-settings' {...props} />
}
export { WrapperPropedIndex, WrapperPropedAccount }
