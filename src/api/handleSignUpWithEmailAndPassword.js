import { simplerResponseHandling } from 'utils'
import { auth, firestore } from 'firebaseInit'
import { fbfsSettingsGeneral } from 'constantValues'

import {
	API_SIGN_UP_EMAIL,
	API_SIGN_UP_PASSWORD,
	FB_FS_SETTINGS_GENERAL_DISPLAY_NAME,
	FB_FS_SETTINGS_GENERAL_LANGUAGES,
	UNEXPECTED_ERROR_CODE_5,
	UNEXPECTED_ERROR_CODE_7,
} from 'constantValues'

const handleSignUpWithEmailAndPassword = async (
	values,
	onSuccessfulSignUp = () => {}
) => {
	const {
		[API_SIGN_UP_EMAIL]: email,
		[API_SIGN_UP_PASSWORD]: password,
		[FB_FS_SETTINGS_GENERAL_DISPLAY_NAME]: displayName,
	} = values

	return auth()
		.createUserWithEmailAndPassword(email, password)
		.then(async credential => {
			const { user } = credential
			onSuccessfulSignUp()
			user.sendEmailVerification().catch()
			const userRef = firestore.doc(fbfsSettingsGeneral(user))
			try {
				await userRef.set({
					[FB_FS_SETTINGS_GENERAL_DISPLAY_NAME]: displayName,
					[FB_FS_SETTINGS_GENERAL_LANGUAGES]: [auth().languageCode],
				})
			} catch (err) {
				return simplerResponseHandling(false, UNEXPECTED_ERROR_CODE_7, err)
			}

			return simplerResponseHandling(true)
		})
		.catch(err => simplerResponseHandling(false, UNEXPECTED_ERROR_CODE_5, err))
}

export {
	handleSignUpWithEmailAndPassword,
	API_SIGN_UP_EMAIL,
	API_SIGN_UP_PASSWORD,
	FB_FS_SETTINGS_GENERAL_DISPLAY_NAME,
}
