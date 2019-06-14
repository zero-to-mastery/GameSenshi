import { auth } from 'utils/firebaseFrontEnd'

const provider = new auth.GoogleAuthProvider()

const handleSignInWithGoogle = () => {
	auth().signInWithRedirect(provider)
}

export default handleSignInWithGoogle
