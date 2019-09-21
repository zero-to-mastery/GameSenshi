// states
import {
	RESET_STATE,
	storeUserOnAuthChanged,
	storeAuthModalOnAuthStateChange,
} from 'state'
import * as allStore from 'state'

const onAuthChanged = (userAuth, onSnapshot) => {
	storeAuthModalOnAuthStateChange()
	storeUserOnAuthChanged(userAuth, onSnapshot)
	// reset all store if user sign out
	if (!userAuth) {
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
