import { auth } from 'firebaseInit'
import { API_GOOGLE, API_FACEBOOK, API_TWITCH } from 'constantValues'
const providerGoogle = new auth.GoogleAuthProvider()
const providerFacebook = new auth.FacebookAuthProvider()

const NAME = 'name'
const AUTH = 'auth'

const providerCreator = (name, auth) => ({
	[NAME]: name,
	[AUTH]: auth,
})

const providers = [
	providerCreator(API_GOOGLE, providerGoogle),
	providerCreator(API_FACEBOOK, providerFacebook),
]

const handleSignInWithSocials = providers.reduce((acc, provider) => {
	acc[provider[NAME]] = provider => onFailure =>
		auth()
			.signInWithRedirect(provider)
			.catch(onFailure)
	return acc
}, {})

export { handleSignInWithSocials }
