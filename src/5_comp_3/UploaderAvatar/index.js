import React from 'react'
import {
	UploaderAvatar,
	UPLOADER_AVATAR_STATE_IMAGE,
	UPLOADER_AVATAR_ON_REMOVE,
} from './UploaderAvatar'
import { onRemove, onCrop } from './utils'
import {
	StateContainer,
	storeUser,
	storeUserResetAvatar,
	STORE_USER_STATE_AVATAR,
} from '2_state'

const UploaderAvatarPropedCrop = props => {
	return <UploaderAvatar onCrop={onCrop} {...props} />
}
const mapStoreUserStateToProps = {
	[UPLOADER_AVATAR_STATE_IMAGE]: STORE_USER_STATE_AVATAR,
}

const mapStoreUserMethodToProps = {
	[UPLOADER_AVATAR_ON_REMOVE]: () => {
		storeUserResetAvatar()
		onRemove()
	},
}

const UploaderAvatarPropedCropStoreUser = StateContainer(
	UploaderAvatarPropedCrop,
	[storeUser],
	[mapStoreUserStateToProps],
	[mapStoreUserMethodToProps]
)

export { UploaderAvatarPropedCropStoreUser }
