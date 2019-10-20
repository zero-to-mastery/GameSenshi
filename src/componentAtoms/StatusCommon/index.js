import React from 'react'
import { StatusCommon } from './StatusCommon'

const StatusCommonPropedOnline = props => {
	return <StatusCommon bodyOn='Online!' bodyOff='Offline' {...props} />
}

export { StatusCommonPropedOnline }
