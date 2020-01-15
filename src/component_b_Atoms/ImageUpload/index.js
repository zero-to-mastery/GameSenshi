import React from 'react'
import {
	ImageUpload,
	IMAGE_UPLOAD_STATE_IMAGE,
	IMAGE_UPLOAD_ON_REMOVE,
} from './ImageUpload'
import { onRemove } from './utils'
import defaultAvatar from 'assets/img/placeholder.jpg'
import {
	StateContainer,
	storeUser,
	storeUserResetAvatar,
	STORE_USER_STATE_AVATAR,
} from 'state'

const mapStoreUserStateToProps = {
	[IMAGE_UPLOAD_STATE_IMAGE]: STORE_USER_STATE_AVATAR,
}

const mapStoreUserMethodToProps = {
	[IMAGE_UPLOAD_ON_REMOVE]: () => {
		storeUserResetAvatar()
		onRemove()
	},
}

const ImageUploadStoreUser = StateContainer(
	ImageUpload,
	[storeUser],
	[mapStoreUserStateToProps],
	[mapStoreUserMethodToProps]
)

const ImageUploadStoreUserPropedSettings = props => {
	return <ImageUploadStoreUser defaultImage={defaultAvatar} {...props} />
}

export { ImageUploadStoreUserPropedSettings }
