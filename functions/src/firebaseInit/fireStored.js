import { fireStored, getServerTimestamp } from './core'

import {
	firestorePathSettingsGeneral,
	fireStorePathSettingsNotification,
	UPDATED_AT,
} from 'constantValues'
import { FIRESTORE_SETTINGS_GENERAL_USER_AVATAR } from 'constantValues'

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

const [docGeneralSettingGet, docGeneralSettingSet] = createDocGetSet(
	firestorePathSettingsGeneral
)
const [docNotificationSettingGet, docNotificationSettingSet] = createDocGetSet(
	fireStorePathSettingsNotification
)
const docGeneralSettingSetAvatar = (uid, url) =>
	docGeneralSettingSet(uid, {
		[FIRESTORE_SETTINGS_GENERAL_USER_AVATAR]: url,
	})
export {
	docGeneralSettingGet,
	docGeneralSettingSet,
	docNotificationSettingGet,
	docNotificationSettingSet,
	docGeneralSettingSetAvatar,
}
