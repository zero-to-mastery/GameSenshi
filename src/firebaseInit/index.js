import { onAuthChange, setNonLoginUserLastIntendedAction } from './onAuthChange'
import { getRedirectResult } from './getRedirectResult'
import { auth } from './core'
import {
	storageUserAvatarGet,
	storageUserAvatarSet,
	storageUserAvatarRemove,
} from './storage'
import { functSignInTwicth } from './cloudFunct'
import { handleDifferentCredential } from './handleDifferentCredential'

export {
	auth,
	storageUserAvatarGet,
	storageUserAvatarSet,
	storageUserAvatarRemove,
	getRedirectResult,
	onAuthChange,
	functSignInTwicth,
	handleDifferentCredential,
	setNonLoginUserLastIntendedAction,
}
