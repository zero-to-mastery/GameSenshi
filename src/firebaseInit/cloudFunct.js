import { fireFunct } from 'firebaseInit/core'
import {
	FUNCTION_SIGN_IN_TWITCH,
	FUNCTION_SIGN_IN_FACEBOOK,
} from 'constantValues'

const functSignInTwicth = fireFunct().httpsCallable(FUNCTION_SIGN_IN_TWITCH)
const functSignInFacebook = fireFunct().httpsCallable(FUNCTION_SIGN_IN_FACEBOOK)

export { functSignInTwicth, functSignInFacebook }
