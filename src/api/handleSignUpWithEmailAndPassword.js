import { simplerResponseHandling } from 'utils'
import { auth, docGeneralSettingSet } from 'firebaseInit'
import {
	FUNCTION_EMAIL,
	FUNCTION_PASSWORD,
	FIRESTORE_SETTINGS_GENERAL_DISPLAY_NAME,
	FIRESTORE_SETTINGS_GENERAL_LANGUAGES,
	UNEXPECTED_ERROR_CODE_5,
	UNEXPECTED_ERROR_CODE_7,
} from 'constantValues'

const handleSignUpWithEmailAndPassword = async (
	values,
	onSuccessfulSignUp = () => {}
) => {
	const {
		[FUNCTION_EMAIL]: email,
		[FUNCTION_PASSWORD]: password,
		[FIRESTORE_SETTINGS_GENERAL_DISPLAY_NAME]: displayName,
	} = values

	return auth()
		.createUserWithEmailAndPassword(email, password)
		.then(async credential => {
			const { user } = credential
			onSuccessfulSignUp()
			user.sendEmailVerification().catch()

			try {
				await docGeneralSettingSet({
					[FIRESTORE_SETTINGS_GENERAL_DISPLAY_NAME]: displayName,
					[FIRESTORE_SETTINGS_GENERAL_LANGUAGES]: [auth().languageCode],
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
	FUNCTION_EMAIL,
	FUNCTION_PASSWORD,
	FIRESTORE_SETTINGS_GENERAL_DISPLAY_NAME,
}
