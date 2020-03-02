import React from 'react'
import { ImageUpload } from './ImageUpload'
import { AVATAR_DEFAULT } from '0_app_flavor'

const ImageUploadPropedDefaultAvatar = props => {
	return <ImageUpload defaultImage={AVATAR_DEFAULT} {...props} />
}

export { ImageUploadPropedDefaultAvatar }
