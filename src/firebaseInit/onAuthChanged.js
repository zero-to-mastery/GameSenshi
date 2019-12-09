// states
import {
	RESET_STATE,
	storeUserOnSignIn,
	storeModalOnAuthStateChange,
	storeUserOnSignOut,
} from 'state'
import * as allStore from 'state'

let unsubscribe = () => {}

const onAuthChanged = (userAuth, onSnapshot) => {
	storeModalOnAuthStateChange()
	if (userAuth) {
		unsubscribe = onSnapshot(
			doc => {
				const userData = doc.data()
				storeUserOnSignIn(userAuth, userData)
			},
			() => {
				//handle error here
			}
		)
	}
	// reset all store if user sign out
	else {
		storeUserOnSignOut()
		unsubscribe()
		unsubscribe = () => {}
		for (let store in allStore) {
			try {
				allStore[store][RESET_STATE]()
			} catch (e) {
				//
			}
		}
	}
}

export { onAuthChanged }
