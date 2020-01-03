import { auth } from 'firebaseInit'
import {
	AUTH_GOOGLE,
	AUTH_FACEBOOK,
	AUTH_TWITCH,
	ENV_VALUE_TWITCH_OAUTH_LINK,
} from 'constantValues'

const providerGoogle = new auth.GoogleAuthProvider().addScope('email')
const providerFacebook = new auth.FacebookAuthProvider().addScope('email')

const NAME = 'name'
const AUTH = 'auth'

const providerCreator = (name, auth) => ({
	[NAME]: name,
	[AUTH]: auth,
})

const providers = [
	providerCreator(AUTH_GOOGLE, providerGoogle),
	providerCreator(AUTH_FACEBOOK, providerFacebook),
]

const handleSignInWithSocials = providers.reduce((acc, provider) => {
	acc[provider[NAME]] = () => {
		return auth().signInWithRedirect(provider[AUTH])
	}
	return acc
}, {})

handleSignInWithSocials[AUTH_TWITCH] = async () => {
	return (window.location = ENV_VALUE_TWITCH_OAUTH_LINK)
}

export { handleSignInWithSocials }
