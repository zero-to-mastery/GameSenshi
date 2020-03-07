import { fireFunct } from '1_fire_init'
import {
	FUNCTION_ON_TWITCH_SIGN_IN,
	FUNCTION_ON_SEED_DATA,
	FUNCTION_OAUTH_CODE,
	FUNCTION_REDIRECT_URI,
} from '0_constants'

const functSignInTwicth = oAuthCode =>
	fireFunct().httpsCallable(FUNCTION_ON_TWITCH_SIGN_IN)({
		[FUNCTION_OAUTH_CODE]: oAuthCode,
		[FUNCTION_REDIRECT_URI]: window.location.origin,
	})
const functOnSeedData = () =>
	fireFunct()
		.httpsCallable(FUNCTION_ON_SEED_DATA)()
		.catch(e => console.log(e))

export { functSignInTwicth, functOnSeedData }
