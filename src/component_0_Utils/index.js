import { auth } from 'firebaseInit'
import { history, isLocationPrivate, isLocationPublic } from 'routes'
import { storeUserSetSigningIn } from 'state'

const signOut = () => {
	auth().signOut()
	history.push(isLocationPrivate())
}

const onLogin = lastLocation => {
	history.replace(isLocationPublic(lastLocation))
	storeUserSetSigningIn(true)
}

export { signOut, onLogin }
