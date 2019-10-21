import { AvatarUser, AVATAR_USER_STATE_SRC } from './AvatarUser'

import { StateContainer, storeUser, STORE_USER_STATE_AVATAR } from 'state'

const mapStoreUserStateToProps = {
	[AVATAR_USER_STATE_SRC]: STORE_USER_STATE_AVATAR,
}

const AvatarUserStoreUser = StateContainer(
	AvatarUser,
	[storeUser],
	[mapStoreUserStateToProps],
	[]
)

export { AvatarUserStoreUser }
