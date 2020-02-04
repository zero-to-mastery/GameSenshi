import { auth } from '1_fire_init'
import { UNEXPECTED_ERROR_CODE_4 } from '0_constants'
import { simplerResponseHandling } from '1_utils'

const handleSignInWithEmailAndPassword = async (email, password) => {
	// sign in set local persistence by default, allowing user to auto sign in
	// https://firebase.google.com/docs/auth/web/auth-state-persistence?authuser=0

	return auth()
		.signInWithEmailAndPassword(email, password)
		.then(() => simplerResponseHandling(true))
		.catch(err => {
			// Handle Errors here.
			switch (err.code) {
				case 'auth/invalid-email':
				case 'auth/user-disabled':
				case 'auth/user-not-found':
				case 'auth/wrong-password':
					return simplerResponseHandling(
						false,
						'Invalid Email or Password',
						err
					)
				default:
					return simplerResponseHandling(false, UNEXPECTED_ERROR_CODE_4, err)
			}
		})
}

export { handleSignInWithEmailAndPassword }
