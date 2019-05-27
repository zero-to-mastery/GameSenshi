import { auth } from 'utils/firebase'

const handleSignInWithEmailAndPassword = async (email, password) => {
	// even without explicitly set persistence, the persistence is still LOCAL
	// because sign in set local persistence by default
	// change LOCAL to SESSION or NONE if you want different persistence
	// https://firebase.google.com/docs/auth/web/auth-state-persistence?authuser=0
	const setPersistence = auth()
		.setPersistence(auth.Auth.Persistence.LOCAL)
		.catch(err => {
			// Handle Errors here.
			console.log('set persistence failed', err)
			return false
		})

	return (
		(await setPersistence) !== false &&
		auth()
			.signInWithEmailAndPassword(email, password)
			.catch(err => {
				// Handle Errors here.
				console.log('sign in failed', err)
				return false
				// ...
			})
	)
}

export default handleSignInWithEmailAndPassword
