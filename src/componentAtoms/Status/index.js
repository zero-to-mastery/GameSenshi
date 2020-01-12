import React from 'react'
import { Status } from './Status'

const StatusPropedOnline = props => {
	return (
		<Status
			bodyOn='Online!'
			bodyOff='Offline'
			className='justify-content-center mt-2'
			{...props}
		/>
	)
}

export { StatusPropedOnline }
