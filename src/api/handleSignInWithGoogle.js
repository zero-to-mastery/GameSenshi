import { auth } from 'utils/firebase'

const provider = new auth.GoogleAuthProvider()

const handleSignInWithGoogle = () => {
	auth().signInWithRedirect(provider)
}

export default handleSignInWithGoogle
