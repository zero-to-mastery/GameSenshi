import { auth } from 'firebaseInit'

const provider = new auth.FacebookAuthProvider()

const handleSignInWithFacebook = () => {
	auth().signInWithRedirect(provider)
}

export default handleSignInWithFacebook
