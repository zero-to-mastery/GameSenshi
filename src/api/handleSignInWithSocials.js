import { auth } from 'firebaseInit'
import {
	AUTH_GOOGLE,
	AUTH_FACEBOOK,
	AUTH_TWITCH,
	ENV_TWITCH_CLIENT,
	ENV_TWITCH_REDIRECT,
} from 'constantValues'

const providerGoogle = new auth.GoogleAuthProvider()
const providerFacebook = new auth.FacebookAuthProvider()

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

handleSignInWithSocials[AUTH_TWITCH] = () => {
	window.location = `https://id.twitch.tv/oauth2/authorize?client_id=${ENV_TWITCH_CLIENT}&redirect_uri=${ENV_TWITCH_REDIRECT}&response_type=code&scope=openid+user_read&`
}

export { handleSignInWithSocials }
