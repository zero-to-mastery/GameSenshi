import {
	AvatarUser,
	AVATAR_USER_ON_ERROR,
	AVATAR_USER_STATE_SRC,
} from 'componentAtoms/AvatarUser/AvatarUser'

import {
	StateContainer,
	storeUser,
	storeUserResetAvatar,
	STORE_USER_STATE_AVATAR_URL,
} from 'state'

const mapStoreUserStateToProps = {
	[AVATAR_USER_STATE_SRC]: STORE_USER_STATE_AVATAR_URL,
}

const mapStoreUserMethodToProps = {
	[AVATAR_USER_ON_ERROR]: storeUserResetAvatar,
}

const AvatarUserStoreUser = StateContainer(
	AvatarUser,
	[storeUser],
	[mapStoreUserStateToProps],
	[mapStoreUserMethodToProps]
)

export { AvatarUserStoreUser }
