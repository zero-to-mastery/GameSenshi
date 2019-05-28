import { auth } from 'utils/firebase'

const provider = new auth.TwitterAuthProvider()

const handleSignInWithTwitter = () => {
	auth().signInWithRedirect(provider)
}

export default handleSignInWithTwitter
