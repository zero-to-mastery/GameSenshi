import { fireStored, getServerTimestamp } from '1_fire_Init/core'

import {
	firestorePathSettingsGeneral,
	fireStorePathUserSettingsNotification,
	UPDATED_AT,
} from '0_constantValues'
import {
	FIRESTORE_USER_SETTINGS_GENERAL_USER_AVATAR,
	FIRESTORE_USER_SETTINGS_GENERAL_SHORT_ID,
	FIRESTORE_USER_SETTINGS_GENERAL_DISPLAY_NAME,
} from '0_constantValues'

const createDocGetSet = path => {
	const ref = (...args) => fireStored.doc(path(...args))
	const get = (...args) => ref(...args).get()
	const set = (...args) => (data, options = { merge: true }) =>
		ref(...args).set(
			{
				[UPDATED_AT]: getServerTimestamp(),
				...data,
			},
			options
		)
	return [get, set]
}

const [docUserSettingGeneralGet, docUserSettingGeneralSet] = createDocGetSet(
	firestorePathSettingsGeneral
)
const [
	docUserSettingNotificationGet,
	docUserSettingNotificationSet,
] = createDocGetSet(fireStorePathUserSettingsNotification)

const docUserSettingGeneralSetOnUserCreate = uid => (
	shortId,
	displayName,
	isPasswordExist
) => {
	const serverTimestamp = getServerTimestamp()

	return docUserSettingGeneralSet(uid)({
		[UPDATED_AT]: serverTimestamp,
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
