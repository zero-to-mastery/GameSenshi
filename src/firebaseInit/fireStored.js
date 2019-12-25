import { fireStored, auth, getServerTimestamp } from 'firebaseInit/core'

import {
	firestorePathSettingsGeneral,
	fireStorePathSettingsNotification,
	UPDATED_AT,
} from 'constantValues'
import { FIRESTORE_SETTINGS_GENERAL_USER_AVATAR } from 'constantValues'

const createDocGetSet = path => {
	const ref = () => fireStored().doc(path(auth().currentUser.uid))
	const get = () => ref().get()
	const set = (data, options = { merge: true }) =>
		ref().set(
			{
				[UPDATED_AT]: getServerTimestamp(),
				...data,
			},
			options
		)
	const onSanpshot = (...args) => ref().onSnapshot(...args)
	return [get, set, onSanpshot]
}

const [
	docGeneralSettingGet,
	docGeneralSettingSet,
	docGeneralSettingOnSnapshot,
] = createDocGetSet(firestorePathSettingsGeneral)
const [docNotificationSettingGet, docNotificationSettingSet] = createDocGetSet(
	fireStorePathSettingsNotification
)
const docGeneralSettingSetAvatar = url =>
	docGeneralSettingSet({
		[FIRESTORE_SETTINGS_GENERAL_USER_AVATAR]: url,
	})
export {
	docGeneralSettingGet,
	docGeneralSettingSet,
	docGeneralSettingOnSnapshot,
	docNotificationSettingGet,
	docNotificationSettingSet,
	docGeneralSettingSetAvatar,
}
