import {
	storeModalProcessLinking,
	storeModalShow,
	storeMNodalClear,
	storeModalSimpleError,
} from 'state'
import {
	handleDifferentCredential,
	linkedThen,
} from 'firebaseInit/handleDifferentCredential'
import { auth } from 'firebaseInit/core'
import { simplerErrorMessage } from 'utils'
import {
	UNEXPECTED_ERROR_CODE_6,
	UNEXPECTED_ERROR_CODE_8,
	UNEXPECTED_ERROR_CODE_9,
	UNEXPECTED_ERROR_CODE_10,
	FUNCTION_OAUTH_CODE,
	FUNCTION_REDIRECT_URI,
	ENV_TWITCH_REDIRECT,
	FUNCTION_OAUTH_TOKEN,
} from 'constantValues'
import { functTwicth } from 'firebaseInit/cloudFunct'

const REDIRECT_URL = 'redirect_url'

const storeRedirectUrl = () =>
	sessionStorage.setItem(REDIRECT_URL, window.location.href)

const getRedirectResult = () =>
	auth()
		.getRedirectResult() // redirect run when website start
		.then(async result => {
			const { user } = result
			// need this condition because this part run when webpage start
			if (user) {
				// ! google unlink facebook: https://github.com/firebase/firebase-js-sdk/issues/569
				const linkWithRedirect = provider2 => {
					user.linkWithRedirect(new auth[provider2]()).catch(err => {
						storeModalSimpleError(err, UNEXPECTED_ERROR_CODE_8[1])
					})
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
						let customTokenData = null
						try {
							customTokenData = await functTwicth({
								[FUNCTION_OAUTH_CODE]: oauthCode,
								[FUNCTION_REDIRECT_URI]: ENV_TWITCH_REDIRECT,
							})
						} catch (err) {
							console.log(err)
							storeModalSimpleError(err, UNEXPECTED_ERROR_CODE_9[1])
						}
						try {
							if (customTokenData) {
								auth()
									.signInWithCustomToken(
										customTokenData.data[FUNCTION_OAUTH_TOKEN]
									)
									.then(() => {
										storeMNodalClear()
									})
							}
						} catch (err) {
							console.log(err)
							storeModalSimpleError(err, UNEXPECTED_ERROR_CODE_10[1])
						}
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
			if (code.includes('auth/account-exists-with-different-credential')) {
				handleDifferentCredential(auth, email, credential)
			} else {
				const body = simplerErrorMessage(err, UNEXPECTED_ERROR_CODE_6[1])
				storeModalShow('Error', body, false)
			}
		})

export { getRedirectResult, storeRedirectUrl }
