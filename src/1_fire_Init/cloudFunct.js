import { fireFunct } from '1_fire_Init/core'
import { FUNCTION_SIGN_IN_TWITCH } from '0_constantValues'

const functSignInTwicth = fireFunct().httpsCallable(FUNCTION_SIGN_IN_TWITCH)

export { functSignInTwicth }
