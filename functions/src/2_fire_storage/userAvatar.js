import { storageSetGenerator } from './utils'

import { storagePathUserAvatar } from '0_constants'

const {
	file: storageUserAvatarFile,
	get: storageUserAvatarGet,
	set: storageUserAvatarSet,
	del: storageUserAvatarDelete,
	writeStream: storageUserAvatarWriteStream,
} = storageSetGenerator(storagePathUserAvatar)

export {
	storageUserAvatarFile,
	storageUserAvatarGet,
	storageUserAvatarSet,
	storageUserAvatarDelete,
	storageUserAvatarWriteStream,
}
