import React from 'react'
import {
	ImageUpload,
	IMAGE_UPLOAD_STATE_IMAGE,
	IMAGE_UPLOAD_ON_ERROR,
	IMAGE_UPLOAD_ON_REMOVE,
} from 'componentAtoms/ImageUpload/ImageUpload'
import { onRemove } from 'componentAtoms/ImageUpload/utils'
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
	[IMAGE_UPLOAD_ON_ERROR]: storeUserResetAvatar,
	[IMAGE_UPLOAD_ON_REMOVE]: () => {
		storeUserResetAvatar()
		onRemove()
	},
}

const AvatarUserStoreUser = StateContainer(
	ImageUpload,
	[storeUser],
	[mapStoreUserStateToProps],
	[mapStoreUserMethodToProps]
)

const AvatarUserStoreUserPropedSettings = props => {
	return <AvatarUserStoreUser defaultImage={defaultAvatar} {...props} />
}

export { AvatarUserStoreUserPropedSettings }
