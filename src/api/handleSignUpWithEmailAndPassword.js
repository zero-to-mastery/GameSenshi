import { simplerResponseHandling } from 'utils'
import { auth, docGeneralSettingSet } from 'firebaseInit'
import {
	CREATED_AT,
	UPDATED_AT,
	FIRESTORE_SETTINGS_GENERAL_SHORT_ID,
} from 'constantValues'
import {
	FUNCTION_SIGN_UP_EMAIL,
	FUNCTION_SIGN_UP_PASSWORD,
	FIRESTORE_SETTINGS_GENERAL_DISPLAY_NAME,
	FIRESTORE_SETTINGS_GENERAL_LANGUAGES,
	UNEXPECTED_ERROR_CODE_5,
	UNEXPECTED_ERROR_CODE_7,
} from 'constantValues'
import nanoid from 'nanoid'

const handleSignUpWithEmailAndPassword = async (
	values,
	onSuccessfulSignUp = () => {}
) => {
	const {
		[FUNCTION_SIGN_UP_EMAIL]: email,
		[FUNCTION_SIGN_UP_PASSWORD]: password,
		[FIRESTORE_SETTINGS_GENERAL_DISPLAY_NAME]: displayName,
	} = values

	return auth()
		.createUserWithEmailAndPassword(email, password)
		.then(async credential => {
			const { user } = credential
			onSuccessfulSignUp()
			user.sendEmailVerification().catch()

			const date = new Date()

			try {
				await docGeneralSettingSet({
					[CREATED_AT]: date,
					[UPDATED_AT]: date,
					[FIRESTORE_SETTINGS_GENERAL_SHORT_ID]: nanoid(10),
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
	FUNCTION_SIGN_UP_EMAIL,
	FUNCTION_SIGN_UP_PASSWORD,
	FIRESTORE_SETTINGS_GENERAL_DISPLAY_NAME,
}
