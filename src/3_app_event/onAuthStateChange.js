// states
import {
	RESET_STATE,
	storeAlert,
	storeProgress,
	storeUser,
	storeWrapper,
	storeUserOnSignIn,
} from '2_state'
import { auth } from '1_fire_init'
import {
	databaseConnectionRefOn,
	databaseConnectionRefOff,
} from './userPresence'
import { docUserSettingGeneralOnSnapshot } from '2_fire_store'
import { storageUserAvatarGet } from '2_fire_storage'
import { FIRESTORE_USER_SETTINGS_GENERAL_USER_AVATAR } from '0_constants'

const ACTION = 'action'

let unsubscribe = () => {} // ! dont move this into onAuthStateChenged
let nonLoginUserLastIntendedAction = { [ACTION]: () => {} }

const setNonLoginUserLastIntendedAction = callback => {
	nonLoginUserLastIntendedAction[ACTION] = callback
}

const onAuthChanged = (userAuth, onSnapshot) => {
	if (userAuth) {
		databaseConnectionRefOn()
		unsubscribe = onSnapshot(
			doc => {
				storageUserAvatarGet(userAuth.uid).then(url => {
					const userData = {
						...doc.data(),
						[FIRESTORE_USER_SETTINGS_GENERAL_USER_AVATAR]: url,
						// * avatar now read from Storage
						// * the reason we still need to set avatar path in firestore is to trigger this onSnapshot
						// * because Storage not able to listen to change like firestore
					}
					storeUserOnSignIn(userAuth, userData, () => {
						nonLoginUserLastIntendedAction[ACTION]()
						nonLoginUserLastIntendedAction[ACTION] = () => {}
					})
				})
			},
			() => {
				//handle error here
			}
		)
	}
	// reset all store if user sign out
	else {
		databaseConnectionRefOff()
		unsubscribe()
		unsubscribe = () => {}
		const stores = [storeAlert, storeProgress, storeUser, storeWrapper]
		stores.forEach(store => {
			store[RESET_STATE]()
		})
	}
}

const onAuthStateChange = (callback = () => {}) => {
	auth().onAuthStateChanged(userAuth => {
		callback(userAuth)
		onAuthChanged(userAuth, (next, error) =>
			docUserSettingGeneralOnSnapshot()(
				{ includeMetadataChanges: true },
				{ next, error }
			)
		)
	})
}

export { onAuthStateChange, setNonLoginUserLastIntendedAction }
