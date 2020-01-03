import {
	storeModalProcessLinking,
	storeModalClear,
	storeModalSimpleError,
	storeModalRemoveItem,
	storeModalGetRedirectUrl,
} from 'state'
import {
	handleDifferentCredential,
	linkedThen,
} from 'firebaseInit/handleDifferentCredential'
import { auth } from 'firebaseInit/core'
import {
	UNEXPECTED_ERROR_CODE_6,
	UNEXPECTED_ERROR_CODE_8,
	UNEXPECTED_ERROR_CODE_9,
	UNEXPECTED_ERROR_CODE_10,
	FUNCTION_OAUTH_CODE,
	FUNCTION_REDIRECT_URI,
	ENV_VALUE_TWITCH_REDIRECT,
	FUNCTION_CUSTOM_TOKEN,
} from 'constantValues'
import { functSignInTwicth } from 'firebaseInit/cloudFunct'

// ! google unlink facebook: https://github.com/firebase/firebase-js-sdk/issues/569
const linkWithRedirect = async provider2 => {
	auth()
		.currentUser.linkWithRedirect(new auth[provider2]())
		.catch(err => {
			storeModalSimpleError(err, UNEXPECTED_ERROR_CODE_8)
		})
}

const getRedirectResult = async () => {
	let result = null
	try {
		result = await auth().getRedirectResult() // redirect run when website start
	} catch (err) {
		const { code, credential, email } = err
		if (
			code &&
			code.includes('auth/account-exists-with-different-credential')
		) {
			handleDifferentCredential(email, credential)
		} else {
			console.log(err)
			storeModalRemoveItem()
			storeModalSimpleError(err, UNEXPECTED_ERROR_CODE_6)
		}
		return
	}

	const { user } = result

	if (user) {
		storeModalProcessLinking(linkWithRedirect, linkedThen)
	} else {
		const redirectUrl = storeModalGetRedirectUrl()
		if (redirectUrl) {
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
					customTokenData = await functSignInTwicth({
						[FUNCTION_OAUTH_CODE]: oauthCode,
						[FUNCTION_REDIRECT_URI]: ENV_VALUE_TWITCH_REDIRECT,
					})
				} catch (err) {
					console.log(err)
					storeModalSimpleError(err, UNEXPECTED_ERROR_CODE_9)
				}

				if (customTokenData) {
					try {
						await auth().signInWithCustomToken(
							customTokenData.data[FUNCTION_CUSTOM_TOKEN]
						)
					} catch (err) {
						console.log(err)
						return storeModalSimpleError(err, UNEXPECTED_ERROR_CODE_10)
					}
					storeModalProcessLinking(linkWithRedirect, linkedThen)
				}
			} else {
				storeModalClear()
			}
		} else {
			storeModalClear()
		}
	}
}

export { getRedirectResult }
