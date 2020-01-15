import { auth } from 'firebaseInit'
import { history, isLocationPrivate, isLocationPublic } from 'routes'
import {
	storeUserSetSigningIn,
	storeUserGetSignedIn,
	storeSignInShow,
} from 'state'

const signOut = () => {
	auth().signOut()
	history.push(isLocationPrivate())
}

const onLogin = lastLocation => {
	history.replace(isLocationPublic(lastLocation))
	storeUserSetSigningIn(true)
}

const needLoginToClick = () => {
	if (!storeUserGetSignedIn()) {
		storeSignInShow()
	}
}

export { signOut, onLogin, needLoginToClick }
