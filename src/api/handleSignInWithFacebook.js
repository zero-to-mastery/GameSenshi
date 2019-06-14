import { auth } from 'utils/firebaseFrontEnd'

const provider = new auth.FacebookAuthProvider()

const handleSignInWithFacebook = () => {
	auth().signInWithRedirect(provider)
}

export default handleSignInWithFacebook
