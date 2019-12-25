import { onAuthChanged } from './onAuthChanged'
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
	docGeneralSettingOnSnapshot,
	docNotificationSettingGet,
	docNotificationSettingSet,
	docGeneralSettingSetAvatar,
} from './fireStored'

// user auth listener
const onAuthChange = auth().onAuthStateChanged(userAuth => {
	onAuthChanged(userAuth, (next, error) =>
		docGeneralSettingOnSnapshot(
			{ includeMetadataChanges: true },
			{ next, error }
		)
	)
})

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
}
