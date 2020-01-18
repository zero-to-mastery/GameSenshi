import { createDocGetSet } from './utils'

import {
	firestorePathSettingsGeneral,
	fireStorePathUserSettingsNotification,
	fireStorePathUserSenshi,
	FIRESTORE_SENSHI_SETTINGS_PROFILE_AVATAR,
} from 'constantValues'

const [
	docUserSettingGeneralGet,
	docUserSettingGeneralSet,
	docUserSettingGeneralOnSnapshot,
] = createDocGetSet(firestorePathSettingsGeneral)

const [
	docUserSettingNotificationGet,
	docUserSettingNotificationSet,
] = createDocGetSet(fireStorePathUserSettingsNotification)

const docUserSettingGeneralAvatarSet = url =>
	docUserSettingGeneralSet()({
		[FIRESTORE_SENSHI_SETTINGS_PROFILE_AVATAR]: url,
	})

const [
	docUserSenshiGet,
	docUserSenshiSet,
	docUserSenshiOnSnapshot,
] = createDocGetSet(fireStorePathUserSenshi)

export {
	docUserSettingGeneralGet,
	docUserSettingGeneralSet,
	docUserSettingGeneralOnSnapshot,
	docUserSettingNotificationGet,
	docUserSettingNotificationSet,
	docUserSettingGeneralAvatarSet,
	docUserSenshiGet,
	docUserSenshiSet,
	docUserSenshiOnSnapshot,
}
