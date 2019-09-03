import { auth } from 'firebaseInit'

const provider = new auth.GoogleAuthProvider()

const handleSignInWithGoogle = () => {
	auth().signInWithRedirect(provider)
}

export default handleSignInWithGoogle
