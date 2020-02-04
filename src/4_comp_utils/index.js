import { auth } from '1_fire_init'
import { isLocationPrivate, isLocationPublic } from '2_routes'
import {
	storeUserSetSigningIn,
	storeUserGetSignedIn,
	storeSignInShow,
} from '2_state'
import {
	setNonLoginUserLastIntendedAction,
	databaseUserPresenceSetOffline,
} from '3_app_event'

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
