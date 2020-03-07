import { fireFunct } from '1_fire_init'
import { FUNCTION_ON_TWITCH_SIGN_IN } from '0_constants'

const functSignInTwicth = fireFunct().httpsCallable(FUNCTION_ON_TWITCH_SIGN_IN)

export { functSignInTwicth }
