import { auth } from 'firebaseInit'

const providerGoogle = new auth.FacebookAuthProvider()
const providerFacebook = new auth.GoogleAuthProvider()

const handleSignInWithSocials = [providerGoogle, providerFacebook].map(
	provider => onFailure => {
		auth()
			.signInWithRedirect(provider)
			.catch(onFailure)
	}
)

export { handleSignInWithSocials }
