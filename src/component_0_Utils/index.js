import { auth } from 'firebaseInit'
import { isLocationPrivate, isLocationPublic } from 'routes'
import {
	storeUserSetSigningIn,
	storeUserGetSignedIn,
	storeSignInShow,
} from 'state'
import {
	setNonLoginUserLastIntendedAction,
	databaseUserPresenceSetOffline,
} from 'onAuthStateChange'

const signOut = () => {
	databaseUserPresenceSetOffline()
	auth().signOut()
	const [action, pathname] = isLocationPrivate()
	action(pathname)
}

const onLogin = lastLocation => {
	const [action, pathname] = isLocationPublic(lastLocation)
	action(pathname)
	storeUserSetSigningIn(true)
}

const needLoginToClick = (triggerOnClick, onClick) => {
	if (storeUserGetSignedIn()) {
		onClick()
	} else {
		setNonLoginUserLastIntendedAction(triggerOnClick)
		storeSignInShow()
	}
}

export { signOut, onLogin, needLoginToClick }
