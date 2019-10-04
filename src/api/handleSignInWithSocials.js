import { auth } from 'firebaseInit'

const providerGoogle = new auth.GoogleAuthProvider()
const providerFacebook = new auth.FacebookAuthProvider()

const handleSignInWithSocials = [providerGoogle, providerFacebook].map(
	provider => onFailure => {
		auth()
			.signInWithRedirect(provider)
			.catch(onFailure)
	}
)

export { handleSignInWithSocials }
