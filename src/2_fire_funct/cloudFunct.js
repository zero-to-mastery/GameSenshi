import { fireFunct } from '1_fire_init/core'
import { FUNCTION_SIGN_IN_TWITCH } from '0_constants'

const functSignInTwicth = fireFunct().httpsCallable(FUNCTION_SIGN_IN_TWITCH)

export { functSignInTwicth }
