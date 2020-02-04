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
	UNEXPECTED_ERROR_CODE_12,
	FUNCTION_OAUTH_CODE,
	FUNCTION_REDIRECT_URI,
	FUNCTION_CUSTOM_TOKEN,
} from '0_constantValues'
import { functSignInTwicth } from 'firebaseInit/cloudFunct'

// ! google unlink facebook: https://github.com/firebase/firebase-js-sdk/issues/569
const linkWithRedirect = (provider2, credential) => {
	if (provider2 === 'password') {
		return auth()
			.currentUser.linkWithCredential(auth.AuthCredential.fromJSON(credential))
			.then(() => {
				linkedThen()
			})
			.catch(err => {
				storeModalSimpleError(err, UNEXPECTED_ERROR_CODE_12)
			})
	} else {
		return auth()
			.currentUser.linkWithRedirect(new auth[provider2]())
			.catch(err => {
				storeModalSimpleError(err, UNEXPECTED_ERROR_CODE_8)
			})
	}
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
						[FUNCTION_REDIRECT_URI]: window.location.origin,
					})
				} catch (err) {
					storeModalSimpleError(err, UNEXPECTED_ERROR_CODE_9)
				}

				if (customTokenData) {
					try {
						await auth().signInWithCustomToken(
							customTokenData.data[FUNCTION_CUSTOM_TOKEN]
						)
					} catch (err) {
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
