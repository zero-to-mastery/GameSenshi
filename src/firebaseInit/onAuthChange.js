// states
import {
	RESET_STATE,
	storeAlert,
	storeProgress,
	storeUser,
	storeWrapper,
	storeUserOnSignIn,
} from 'state'
import { auth } from 'firebaseInit/core'
import {
	databaseConnectionRefOn,
	databaseConnectionRefOff,
} from 'firebaseInit/userPresence'

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
				const userData = doc.data()
				storeUserOnSignIn(userAuth, userData, () => {
					nonLoginUserLastIntendedAction[ACTION]()
					nonLoginUserLastIntendedAction[ACTION] = () => {}
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

const onAuthChange = docUserSettingGeneralOnSnapshot => {
	auth().onAuthStateChanged(userAuth => {
		onAuthChanged(userAuth, (next, error) =>
			docUserSettingGeneralOnSnapshot()(
				{ includeMetadataChanges: true },
				{ next, error }
			)
		)
	})
}

export { onAuthChange, setNonLoginUserLastIntendedAction }
