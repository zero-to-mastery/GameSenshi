import { auth } from 'firebase'

const provider = new auth.FacebookAuthProvider()

const handleSignInWithFacebook = () => {
	auth().signInWithRedirect(provider)
}

export default handleSignInWithFacebook
