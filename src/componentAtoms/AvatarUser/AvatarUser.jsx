import React, { memo } from 'react'
import { Media } from 'reactstrap'

const AVATAR_USER_STATE_SRC = 'src'
const AVATAR_USER_ON_ERROR = 'onError'

const AvatarUser = memo(props => {
	const {
		[AVATAR_USER_ON_ERROR]: onError,
		[AVATAR_USER_STATE_SRC]: src,
		height,
		width,
	} = props
	const size = { height: height, width: width }
	return (
		<div className='avatar' style={size}>
			<Media
				onError={onError}
				alt='user avatar'
				className='img-raised'
				style={size}
				src={src}
			/>
		</div>
	)
})

export { AvatarUser, AVATAR_USER_ON_ERROR, AVATAR_USER_STATE_SRC }
