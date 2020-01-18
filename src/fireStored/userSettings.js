import { createDocGetSet } from './utils'
import {
	firestorePathSettingsGeneral,
	fireStorePathUserSettingsNotification,
	fireStorePathUserSenshi,
	FIRESTORE_SENSHI_SETTINGS_PROFILE_AVATAR,
	FIRESTORE_USER_SETTINGS_GENERAL_DISPLAY_NAME,
	FIRESTORE_USER_SETTINGS_GENERAL_LANGUAGES,
	FIRESTORE_USER_SENSHI_FAVOURITE,
} from 'constantValues'
import { auth } from 'firebaseInit'

const [
	docUserSettingGeneralGet,
	docUserSettingGeneralSet,
	docUserSettingGeneralOnSnapshot,
] = createDocGetSet(firestorePathSettingsGeneral)

const [
	docUserSettingNotificationGet,
	docUserSettingNotificationSet,
] = createDocGetSet(fireStorePathUserSettingsNotification)

const docUserSettingNotificationSet_ = docUserSettingNotificationSet()

const docUserSettingGeneralAvatarSet = url =>
	docUserSettingGeneralSet()({
		[FIRESTORE_SENSHI_SETTINGS_PROFILE_AVATAR]: url,
	})

const docUserSettingGeneralSetOnSignUpWithEmail = displayName =>
	docUserSettingGeneralSet()({
		[FIRESTORE_USER_SETTINGS_GENERAL_DISPLAY_NAME]: displayName,
		[FIRESTORE_USER_SETTINGS_GENERAL_LANGUAGES]: [auth().languageCode],
	})

const [
	docUserSenshiGet,
	docUserSenshiSet,
	docUserSenshiOnSnapshot,
] = createDocGetSet(fireStorePathUserSenshi)

const docUserSenshiSetFavourite = (uid, checked) =>
	docUserSenshiSet(
		undefined,
		uid
	)({ [FIRESTORE_USER_SENSHI_FAVOURITE]: !checked })

export {
	docUserSettingGeneralGet,
	docUserSettingGeneralSetOnSignUpWithEmail,
	docUserSettingGeneralOnSnapshot,
	docUserSettingNotificationGet,
	docUserSettingNotificationSet_,
	docUserSettingGeneralAvatarSet,
	docUserSenshiGet,
	docUserSenshiSetFavourite,
	docUserSenshiOnSnapshot,
}
