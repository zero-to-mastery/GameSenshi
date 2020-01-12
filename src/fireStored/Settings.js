import { createDocGetSet } from './utils'

import {
	firestorePathSettingsGeneral,
	fireStorePathSettingsNotification,
	FIRESTORE_SENSHI_PROFILE_AVATAR,
} from 'constantValues'

const [
	docSettingGeneralGet,
	docSettingGeneralSet,
	docSettingGeneralOnSnapshot,
] = createDocGetSet(firestorePathSettingsGeneral)

const [docSettingNotificationGet, docSettingNotificationSet] = createDocGetSet(
	fireStorePathSettingsNotification
)
const docSettingGeneralAvatarSet = url =>
	docSettingGeneralSet({
		[FIRESTORE_SENSHI_PROFILE_AVATAR]: url,
	})

export {
	docSettingGeneralGet,
	docSettingGeneralSet,
	docSettingGeneralOnSnapshot,
	docSettingNotificationGet,
	docSettingNotificationSet,
	docSettingGeneralAvatarSet,
}
