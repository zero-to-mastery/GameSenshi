import {
	UploaderAvatar,
	UPLOADER_AVATAR_STATE_IMAGE,
	UPLOADER_AVATAR_ON_REMOVE,
} from './UploaderAvatar'
import { onRemove } from './utils'
import {
	StateContainer,
	storeUser,
	storeUserResetAvatar,
	STORE_USER_STATE_AVATAR,
} from '2_state'

const mapStoreUserStateToProps = {
	[UPLOADER_AVATAR_STATE_IMAGE]: STORE_USER_STATE_AVATAR,
}

const mapStoreUserMethodToProps = {
	[UPLOADER_AVATAR_ON_REMOVE]: () => {
		storeUserResetAvatar()
		onRemove()
	},
}

const UploaderAvatarStoreUser = StateContainer(
	UploaderAvatar,
	[storeUser],
	[mapStoreUserStateToProps],
	[mapStoreUserMethodToProps]
)

export { UploaderAvatarStoreUser }
