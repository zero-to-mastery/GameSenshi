import { storageSetGenerator } from './utils'

import { storagePathUserAvatar } from '0_constants'

const [
	storageUserAvatarGet,
	storageUserAvatarSet,
	storageUserAvatarRemove,
] = storageSetGenerator(storagePathUserAvatar)

export { storageUserAvatarGet, storageUserAvatarSet, storageUserAvatarRemove }
