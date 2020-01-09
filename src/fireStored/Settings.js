import { createDocGetSet } from './utils'

import {
	firestorePathSettingsGeneral,
	fireStorePathSettingsNotification,
} from 'constantValues'
import { FIRESTORE_SETTINGS_GENERAL_USER_AVATAR } from 'constantValues'

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
		[FIRESTORE_SETTINGS_GENERAL_USER_AVATAR]: url,
	})

export {
	docSettingGeneralGet,
	docSettingGeneralSet,
	docSettingGeneralOnSnapshot,
	docSettingNotificationGet,
	docSettingNotificationSet,
	docSettingGeneralAvatarSet,
}
