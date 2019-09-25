// states
import {
	RESET_STATE,
	storeUserOnSignIn,
	storeAuthModalOnAuthStateChange,
	storeUserOnSignOut,
} from 'state'
import * as allStore from 'state'

let unsubscribe = () => {}

const onAuthChanged = (userAuth, onSnapshot) => {
	storeAuthModalOnAuthStateChange()
	if (userAuth) {
		unsubscribe = onSnapshot(
			doc => {
				const userData = doc.data()
				console.log('data changed!', userData)
				storeUserOnSignIn(userAuth, userData)
			},
			err => console.log(err)
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
