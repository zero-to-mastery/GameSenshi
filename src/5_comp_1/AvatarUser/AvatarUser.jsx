import React, { memo } from 'react'
import { Exports } from '5_comp_0'
import { stopUndefined } from '1_utils'
const { Image } = stopUndefined(Exports)

const AVATAR_USER_STATE_SRC = 'src'

const AvatarUser = memo(props => {
	const { [AVATAR_USER_STATE_SRC]: src, height, width } = props
	const size = { height: height || 36, width: width || 36 }
	return (
		<Image
			alt='user avatar'
			className='img-raised media avatar'
			style={size}
			src={src}
			loading={null} // Image's loader is too big, need to find better component
		/>
	)
})

export { AvatarUser, AVATAR_USER_STATE_SRC }
