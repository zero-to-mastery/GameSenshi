import React from 'react'
import { ImageUpload } from './ImageUpload'
import { defaultAvatar } from '0_app_flavor'

const ImageUploadPropedDefaultAvatar = props => {
	return <ImageUpload defaultImage={defaultAvatar} {...props} />
}

export { ImageUploadPropedDefaultAvatar }
