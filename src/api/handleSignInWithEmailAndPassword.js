import { auth } from 'utils/firebase'

const handleSignInWithEmailAndPassword = async (email, password) => {
	// sign in set local persistence by default, allowing user to auto sign in
	// https://firebase.google.com/docs/auth/web/auth-state-persistence?authuser=0

	return auth()
		.signInWithEmailAndPassword(email, password)
		.catch(err => {
			// Handle Errors here.
			console.log('sign in failed', err)
			const errArr = [
				'auth/invalid-email',
				'auth/user-disabled',
				'auth/user-not-found',
				'auth/wrong-password',
			]
			const errCode = err.code
			const userError = errArr.includes(errCode)

			return userError
				? 'Invalid Username or Email'
				: errCode === 'auth/network-request-failed'
				? 'Network Failure'
				: 'Unknown Error 1'
			// ...
		})
}

export default handleSignInWithEmailAndPassword
