import React from 'react'
import { StatusCommon } from './StatusCommon'

const StatusCommonPropedOnline = props => {
	return (
		<StatusCommon
			bodyOn='Online!'
			bodyOff='Offline'
			className='justify-content-center mt-2'
			{...props}
		/>
	)
}

export { StatusCommonPropedOnline }
