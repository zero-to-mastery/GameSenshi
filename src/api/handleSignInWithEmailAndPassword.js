import { auth } from 'utils/firebase'

const handleSignInWithEmailAndPassword = async (email, password) => {
	// sign in set local persistence by default, allowing user to auto sign in
	// https://firebase.google.com/docs/auth/web/auth-state-persistence?authuser=0

	return auth()
		.signInWithEmailAndPassword(email, password)
		.catch(err => {
			// Handle Errors here.
			console.log('sign in failed', err)
			return false
			// ...
		})
}

export default handleSignInWithEmailAndPassword
