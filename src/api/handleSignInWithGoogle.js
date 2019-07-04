import { auth } from 'firebase'

const provider = new auth.GoogleAuthProvider()

const handleSignInWithGoogle = () => {
	auth().signInWithRedirect(provider)
}

export default handleSignInWithGoogle
