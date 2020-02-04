import React from 'react'
import { Status } from './Status'
import { useOnline } from './utils'

const StatusPropedOnline = props => {
	const { uid, ...otherPops } = props
	const [loading, online] = useOnline(uid)
	return (
		<Status
			bodyOn='Online!'
			bodyOff='Offline'
			className='justify-content-center mt-2'
			on={online}
			loading={loading}
			{...otherPops}
		/>
	)
}

export { StatusPropedOnline }
