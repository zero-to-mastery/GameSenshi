import React, { memo } from 'react'
import Image from 'material-ui-image'

const AVATAR_USER_STATE_SRC = 'src'

// Image's loader is too big, need to find better component
const AvatarUser = memo(props => {
	const { [AVATAR_USER_STATE_SRC]: src, height, width } = props
	const size = { height: height || 36, width: width || 36 }
	return (
		<div className='avatar' style={size}>
			<Image
				color='transparent'
				alt='user avatar'
				className='img-raised'
				style={size}
				src={src}
				loading={null}
			/>
		</div>
	)
})

export { AvatarUser, AVATAR_USER_STATE_SRC }
