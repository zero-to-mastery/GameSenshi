import { docGetSetBatch } from './utils'
import {
	firestorePathSettingsGeneral,
	fireStorePathUserSettingsNotification,
	fireStorePathUser_Seller,
	FIRESTORE_USER_SETTINGS_GENERAL_USER_AVATAR,
	FIRESTORE_USER_SETTINGS_GENERAL_DISPLAY_NAME,
	FIRESTORE_USER_SETTINGS_GENERAL_LANGUAGES,
	FIRESTORE_USER_SELLER_FAVOURITE,
} from '0_constants'
import { auth } from '1_fire_init'

const {
	get: docUserSettingGeneralGet,
	set: docUserSettingGeneralSet,
	on: docUserSettingGeneralOnSnapshot,
} = docGetSetBatch(firestorePathSettingsGeneral)

const {
	get: docUserSettingNotificationGet,
	set: docUserSettingNotificationSet,
} = docGetSetBatch(fireStorePathUserSettingsNotification)

const docUserSettingGeneralAvatarSet = url =>
	docUserSettingGeneralSet()({
		[FIRESTORE_USER_SETTINGS_GENERAL_USER_AVATAR]: url,
	})

const docUserSettingGeneralSetOnSignUpWithEmail = displayName =>
	docUserSettingGeneralSet()({
		[FIRESTORE_USER_SETTINGS_GENERAL_DISPLAY_NAME]: displayName,
		[FIRESTORE_USER_SETTINGS_GENERAL_LANGUAGES]: [auth().languageCode],
	})

const {
	get: docUserSenshiGet,
	set: docUserSenshiSet,
	on: docUserSenshiOnSnapshot,
} = docGetSetBatch(fireStorePathUser_Seller)

const docUserSenshiSetFavourite = uid => checked =>
	docUserSenshiSet(
		undefined,
		uid
	)({ [FIRESTORE_USER_SELLER_FAVOURITE]: checked })

export {
	docUserSettingGeneralGet,
	docUserSettingGeneralSetOnSignUpWithEmail,
	docUserSettingGeneralOnSnapshot,
	docUserSettingNotificationGet,
	docUserSettingNotificationSet,
	docUserSettingGeneralAvatarSet,
	docUserSenshiGet,
	docUserSenshiSetFavourite,
	docUserSenshiOnSnapshot,
}
