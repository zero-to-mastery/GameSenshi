import { getRedirectResult } from './getRedirectResult'
import { auth, fireStored, getServerTimestamp, database } from './core'
import {
	storageUserAvatarGet,
	storageUserAvatarSet,
	storageUserAvatarRemove,
} from './storage'
import { functSignInTwicth } from './cloudFunct'
import { handleDifferentCredential } from './handleDifferentCredential'

export {
	auth,
	fireStored,
	getServerTimestamp,
	database,
	storageUserAvatarGet,
	storageUserAvatarSet,
	storageUserAvatarRemove,
	getRedirectResult,
	functSignInTwicth,
	handleDifferentCredential,
}
