import { onAuthChange } from './onAuthChange'
import { getRedirectResult, storeRedirectUrl } from './getRedirectResult'
import { auth } from './core'
import {
	storageUserAvatarGet,
	storageUserAvatarSet,
	storageUserAvatarRemove,
} from './storage'
import {
	docGeneralSettingGet,
	docGeneralSettingSet,
	docNotificationSettingGet,
	docNotificationSettingSet,
	docGeneralSettingSetAvatar,
} from './fireStored'
import { functSignInTwicth, functSignInOther } from './cloudFunct'

export {
	auth,
	docGeneralSettingGet,
	docGeneralSettingSet,
	docNotificationSettingGet,
	docNotificationSettingSet,
	docGeneralSettingSetAvatar,
	storageUserAvatarGet,
	storageUserAvatarSet,
	storageUserAvatarRemove,
	storeRedirectUrl,
	getRedirectResult,
	onAuthChange,
	functSignInTwicth,
	functSignInOther,
}
