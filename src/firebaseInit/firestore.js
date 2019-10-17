import { firestore, auth } from 'firebaseInit/core'

import {
	fbfsSettingsGeneralPath,
	fbfsSettingsNotificationPath,
	UPDATED_AT,
} from 'constantValues'

const docGetSetGenerator = path => {
	const ref = () => firestore.doc(path(auth().currentUser.uid))
	const get = () => ref().get()
	const set = (data, options = { merge: true }) =>
		ref().set({ [UPDATED_AT]: new Date(), ...data }, options)
	const onSanpshot = (...args) => ref().onSnapshot(...args)
	return [get, set, onSanpshot]
}

const [
	docGeneralSettingGet,
	docGeneralSettingSet,
	docGeneralSettingOnSnapshot,
] = docGetSetGenerator(fbfsSettingsGeneralPath)
const [
	docNotificationSettingGet,
	docNotificationSettingSet,
] = docGetSetGenerator(fbfsSettingsNotificationPath)

export {
	docGeneralSettingGet,
	docGeneralSettingSet,
	docGeneralSettingOnSnapshot,
	docNotificationSettingGet,
	docNotificationSettingSet,
}
