import { auth } from 'firebaseInit'
import { history, isLocationPrivate } from 'routes'

const signOut = () => {
	auth().signOut()
	history.push(isLocationPrivate())
}

export { signOut }
