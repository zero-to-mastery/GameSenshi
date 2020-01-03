import { fireFunct } from 'firebaseInit/core'
import { FUNCTION_SIGN_IN_TWITCH } from 'constantValues'

const functSignInTwicth = fireFunct().httpsCallable(FUNCTION_SIGN_IN_TWITCH)

export { functSignInTwicth }
