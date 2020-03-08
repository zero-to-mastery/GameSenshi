import { storageSetGenerator } from './utils'

import { storagePathUserAvatar } from '0_constants'

const {
	get: storageUserAvatarGet,
	set: storageUserAvatarSet,
	del: storageUserAvatarDelete,
	writeStream: storageUserAvatarWriteStream,
} = storageSetGenerator(storagePathUserAvatar)

export {
	storageUserAvatarGet,
	storageUserAvatarSet,
	storageUserAvatarDelete,
	storageUserAvatarWriteStream,
}
