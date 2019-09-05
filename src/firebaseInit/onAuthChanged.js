// states
import {
	RESET_STATE,
	storeUserOnAuthChanged,
	storeAuthModalOnAuthStateChange,
} from 'state'
import * as allStore from 'state'

const onAuthChanged = signedInUser => {
	storeAuthModalOnAuthStateChange()
	storeUserOnAuthChanged(signedInUser)
	// reset all store if user sign out
	if (!signedInUser) {
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
