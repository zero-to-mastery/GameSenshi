import {
	firestorePathSettingsGeneral,
	fireStorePathUserSettingsNotification,
} from '0_constants'
import {
	FIRESTORE_USER_SETTINGS_GENERAL_USER_AVATAR,
	FIRESTORE_USER_SETTINGS_GENERAL_SHORT_ID,
	FIRESTORE_USER_SETTINGS_GENERAL_DISPLAY_NAME,
} from '0_constants'
import { createDocGetSet } from './utils'

const {
	get: docUserSettingGeneralGet,
	set: docUserSettingGeneralSet,
} = createDocGetSet(firestorePathSettingsGeneral)
const {
	get: docUserSettingNotificationGet,
	set: docUserSettingNotificationSet,
} = createDocGetSet(fireStorePathUserSettingsNotification)

const docUserSettingGeneralSetOnUserCreate = uid => (
	shortId,
	displayName,
	isPasswordExist
) => {
	return docUserSettingGeneralSet(uid)({
		[FIRESTORE_USER_SETTINGS_GENERAL_SHORT_ID]: shortId,
		...(!isPasswordExist && {
			[FIRESTORE_USER_SETTINGS_GENERAL_DISPLAY_NAME]: displayName || shortId,
		}),
	})
}

const docUserSettingGeneralAvatarSet = uid => url =>
	docUserSettingGeneralSet(uid)({
		[FIRESTORE_USER_SETTINGS_GENERAL_USER_AVATAR]: url,
	})

export {
	docUserSettingGeneralGet,
	docUserSettingGeneralSetOnUserCreate,
	docUserSettingNotificationGet,
	docUserSettingNotificationSet,
	docUserSettingGeneralAvatarSet,
}
