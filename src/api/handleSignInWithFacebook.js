import { auth } from 'utils/firebase'

const provider = new auth.FacebookAuthProvider()

const handleSignInWithFacebook = () => {
	auth().signInWithRedirect(provider)
}

export default handleSignInWithFacebook
