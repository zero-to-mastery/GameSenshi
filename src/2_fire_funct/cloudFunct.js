import { fireFunct } from '1_fire_init'
import {
	FUNCTION_ON_TWITCH_SIGN_IN,
	FUNCTION_ON_DATA_SEED,
	FUNCTION_OAUTH_CODE,
	FUNCTION_REDIRECT_URI,
	FUNCTION_UID,
} from '0_constants'

//! why this cannot use
// const httpsCallable =fireFunct().httpsCallable

const functSignInTwicth = oAuthCode =>
	fireFunct().httpsCallable(FUNCTION_ON_TWITCH_SIGN_IN)({
		[FUNCTION_OAUTH_CODE]: oAuthCode,
		[FUNCTION_REDIRECT_URI]: window.location.origin,
	})
const functOnSeedData = uid =>
	fireFunct()
		.httpsCallable(FUNCTION_ON_DATA_SEED)({ [FUNCTION_UID]: uid })
		.catch(e => console.log(e))

export { functSignInTwicth, functOnSeedData }
