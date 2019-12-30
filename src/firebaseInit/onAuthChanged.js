// states
import {
	RESET_STATE,
	storeUserOnSignIn,
	storeModalOnAuthStateChange,
	storeUserOnSignOut,
} from 'state'
import {
	storeAlert,
	storeSignIn,
	storeProgress,
	storeUser,
	storeWrapper,
} from 'state'

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
		const stores = [
			storeAlert,
			storeSignIn,
			storeProgress,
			storeUser,
			storeWrapper,
		]
		stores.forEach(store => {
			store[RESET_STATE]()
		})
	}
}

export { onAuthChanged }
