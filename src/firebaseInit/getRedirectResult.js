import React from 'react'
// states
import {
	storeAlertShow,
	storeModalRemoveItem,
	storeModalProcessRedirectResult,
	storeModalShow,
	storeUserSetSigningIn,
	storeModalClose,
} from 'state'

import { handleDifferentCredential } from 'firebaseInit/handleDifferentCredential'
import { simplerErrorMessage } from 'utils'
import { UNEXPECTED_ERROR_CODE_6 } from 'constantValues'
import { auth } from 'firebaseInit/core'

const REDIRECT_URL = 'redirect_url'

const storeRedirectUrl = () =>
	sessionStorage.setItem(REDIRECT_URL, window.location.href)

const clearAuth = () => {
	storeModalRemoveItem()
	storeModalClose()
}

const getRedirectResult = () =>
	auth()
		.getRedirectResult()
		.then(result => {
			const { user } = result
			// need this condition because this part run when webpage start
			if (user) {
				storeUserSetSigningIn(true)
				// ! google unlink facebook: https://github.com/firebase/firebase-js-sdk/issues/569
				const showAlert = name2 => {
					storeAlertShow(
						<span>
							Successfully linked your <strong>{name2}</strong> account!
						</span>,
						'success',
						'tim-icons icon-bell-55'
					)
				}
				const linkWithRedirect = provider2 => {
					user.linkWithRedirect(new auth[provider2]())
				}
				storeModalProcessRedirectResult(showAlert, linkWithRedirect)
			} else {
				const redirectedUrl = sessionStorage.getItem(REDIRECT_URL)
				if (redirectedUrl) {
					sessionStorage.removeItem(REDIRECT_URL)
					const searchParams = new URLSearchParams(redirectedUrl)
					let token = null
					for (let p of searchParams) {
						if (p[0].includes('access_token')) {
							token = p[1]
						}
					}
					if (!token) {
						clearAuth()
					}
				} else {
					clearAuth()
				}
			}
		})
		.catch(err => {
			storeModalRemoveItem()
			const { code, credential, email } = err
			if (code === 'auth/account-exists-with-different-credential') {
				handleDifferentCredential(auth, email, credential)
			} else {
				const body = simplerErrorMessage(false, UNEXPECTED_ERROR_CODE_6, err)
				storeModalShow('Error', body, false)
			}
		})

export { getRedirectResult, storeRedirectUrl }
