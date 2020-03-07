import { fireFunct } from '1_fire_init'
import { FUNCTION_ON_TWITCH_SIGN_IN, FUNCTION_ON_SEED_DATA } from '0_constants'

const httpsCallable = fireFunct().httpsCallable

const functSignInTwicth = httpsCallable(FUNCTION_ON_TWITCH_SIGN_IN)
const functOnSeedData = httpsCallable(FUNCTION_ON_SEED_DATA)

export { functSignInTwicth, functOnSeedData }
