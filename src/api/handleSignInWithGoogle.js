import { auth } from 'firebaseInit'

const provider = new auth.GoogleAuthProvider()

const handleSignInWithGoogle = onFailure => {
	auth()
		.signInWithRedirect(provider)
		.catch(onFailure)
}

export default handleSignInWithGoogle
