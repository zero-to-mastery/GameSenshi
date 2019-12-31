import { fireFunct } from 'firebaseInit/core'
import {
	FUNCTION_SIGN_IN_TWITCH,
	FUNCTION_SIGN_IN_OTHERS,
} from 'constantValues'

const functSignInTwicth = fireFunct().httpsCallable(FUNCTION_SIGN_IN_TWITCH)
const functSignInOther = fireFunct().httpsCallable(FUNCTION_SIGN_IN_OTHERS)

export { functSignInTwicth, functSignInOther }
