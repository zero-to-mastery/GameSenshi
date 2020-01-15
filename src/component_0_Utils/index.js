import { auth } from 'firebaseInit'
import { history, isLocationPrivate, isLocationPublic } from 'routes'
import {
	storeUserSetSigningIn,
	storeUserGetSignedIn,
	storeSignInShow,
} from 'state'
import { setNonLoginUserLastIntendedAction } from 'firebaseInit'

const signOut = () => {
	auth().signOut()
	const [action, pathname] = isLocationPrivate()
	action(pathname)
}

const onLogin = lastLocation => {
	history.replace(isLocationPublic(lastLocation))
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
