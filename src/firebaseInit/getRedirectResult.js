import {
	storeModalProcessLinking,
	storeModalShow,
	storeUserSetSigningIn,
	storeMNodalClear,
} from 'state'
import {
	handleDifferentCredential,
	linkedThen,
	linkedCatch,
} from './handleDifferentCredential'
import { auth } from './core'
import { simplerErrorMessage } from 'utils'
import {
	UNEXPECTED_ERROR_CODE_6,
	FUNCTION_OAUTH_CODE,
	FUNCTION_REDIRECT_URI,
	ENV_TWITCH_REDIRECT,
} from 'constantValues'
import { functTwicth } from './cloudFunct'

const REDIRECT_URL = 'redirect_url'

const storeRedirectUrl = () =>
	sessionStorage.setItem(REDIRECT_URL, window.location.href)

const getRedirectResult = () =>
	auth()
		.getRedirectResult()
		.then(result => {
			const { user } = result
			// need this condition because this part run when webpage start
			if (user) {
				storeUserSetSigningIn(true)
				// ! google unlink facebook: https://github.com/firebase/firebase-js-sdk/issues/569
				const linkWithRedirect = provider2 => {
					user.linkWithRedirect(new auth[provider2]()).catch(linkedCatch)
				}
				storeModalProcessLinking(linkWithRedirect, linkedThen)
			} else {
				const redirectUrl = sessionStorage.getItem(REDIRECT_URL)
				if (redirectUrl) {
					sessionStorage.removeItem(REDIRECT_URL)
					const searchParams = new URLSearchParams(redirectUrl)
					let oauthCode = null
					for (let p of searchParams) {
						if (p[0].includes('code')) {
							oauthCode = p[1]
						}
					}
					if (oauthCode) {
						functTwicth({
							[FUNCTION_OAUTH_CODE]: oauthCode,
							[FUNCTION_REDIRECT_URI]: ENV_TWITCH_REDIRECT,
						}).then(console.log)
					} else {
						storeMNodalClear()
					}
				} else {
					storeMNodalClear()
				}
			}
		})
		.catch(err => {
			storeMNodalClear()
			console.log(err)
			const { code, credential, email } = err
			if (code === 'auth/account-exists-with-different-credential') {
				handleDifferentCredential(auth, email, credential)
			} else {
				const body = simplerErrorMessage(err, UNEXPECTED_ERROR_CODE_6[1])
				storeModalShow('Error', body, false)
			}
		})

export { getRedirectResult, storeRedirectUrl }
