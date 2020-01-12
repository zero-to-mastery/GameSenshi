import { fireStored, getServerTimestamp } from 'firebaseInit/core'

import {
	firestorePathSettingsGeneral,
	fireStorePathUserSettingsNotification,
	UPDATED_AT,
} from 'constantValues'
import { FIRESTORE_USER_SETTINGS_GENERAL_USER_AVATAR } from 'constantValues'

const createDocGetSet = path => {
	const ref = uid => fireStored.doc(path(uid))
	const get = uid => ref(uid).get()
	const set = (uid, data, options = { merge: true }) =>
		ref(uid).set(
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
const docUserSettingGeneralAvatarSet = (uid, url) =>
	docUserSettingGeneralSet(uid, {
		[FIRESTORE_USER_SETTINGS_GENERAL_USER_AVATAR]: url,
	})
export {
	docUserSettingGeneralGet,
	docUserSettingGeneralSet,
	docUserSettingNotificationGet,
	docUserSettingNotificationSet,
	docUserSettingGeneralAvatarSet,
}
