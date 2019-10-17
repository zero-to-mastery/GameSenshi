import React from 'react'
// states
import {
	storeAlertShow,
	storeModalRemoveItem,
	storeModalProcessRedirectResult,
	storeModalShow,
	storeUserSetSigningIn,
} from 'state'

import { handleDifferentCredential } from 'firebaseInit/handleDifferentCredential'
import { simplerErrorMessage } from 'utils'
import { UNEXPECTED_ERROR_CODE_6 } from 'constantValues'
import { auth } from 'firebaseInit/core'

const getRedirectResult = () =>
	auth()
		.getRedirectResult()
		.then(result => {
			const { user } = result
			if (user) {
				storeUserSetSigningIn(true)
				// need this condition because this part run when webpage start
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
			}
		})
		.catch(err => {
			// remove this item whether it is success or not
			storeModalRemoveItem()
			const { code, credential, email } = err
			if (code === 'auth/account-exists-with-different-credential') {
				handleDifferentCredential(auth, email, credential)
			} else {
				const body = simplerErrorMessage(false, UNEXPECTED_ERROR_CODE_6, err)
				storeModalShow('Error', body, false)
			}
		})

export { getRedirectResult }
