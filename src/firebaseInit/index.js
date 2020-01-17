import { onAuthChange, setNonLoginUserLastIntendedAction } from './onAuthChange'
import { getRedirectResult } from './getRedirectResult'
import { auth, fireStored, getServerTimestamp } from './core'
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
	storageUserAvatarGet,
	storageUserAvatarSet,
	storageUserAvatarRemove,
	getRedirectResult,
	onAuthChange,
	functSignInTwicth,
	handleDifferentCredential,
	setNonLoginUserLastIntendedAction,
}
