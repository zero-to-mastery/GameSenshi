import { auth, fireStored, getServerTimestamp, database } from './core'
import {
	storageUserAvatarGet,
	storageUserAvatarSet,
	storageUserAvatarRemove,
} from './storage'

import {
	handleDifferentCredential,
	linkedThen,
} from './handleDifferentCredential'

export {
	auth,
	fireStored,
	getServerTimestamp,
	database,
	storageUserAvatarGet,
	storageUserAvatarSet,
	storageUserAvatarRemove,
	handleDifferentCredential,
	linkedThen,
}
