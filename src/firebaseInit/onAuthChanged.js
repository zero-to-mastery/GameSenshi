// states
import { RESET_STATE, userStore, storeAuthModalOnAuthStateChange } from 'state'
import * as allStore from 'state'

const onAuthChanged = signedInUser => {
	storeAuthModalOnAuthStateChange()
	userStore.onAuthStateChanged(signedInUser)
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
