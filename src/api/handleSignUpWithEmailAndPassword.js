import { simplerResponseHandling } from 'utils'
import { auth, userCollectionRef } from 'firebaseInit'

import {
	API_SIGN_UP_EMAIL,
	API_SIGN_UP_PASSWORD,
	API_SIGN_UP_DISPLAY_NAME,
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
		[API_SIGN_UP_DISPLAY_NAME]: displayName,
	} = values

	return auth()
		.createUserWithEmailAndPassword(email, password)
		.then(async credential => {
			const { user } = credential
			onSuccessfulSignUp()
			user.sendEmailVerification().catch()
			const userRef = userCollectionRef.doc(user.uid)
			try {
				await userRef.set({
					[API_SIGN_UP_EMAIL]: email,
					[API_SIGN_UP_DISPLAY_NAME]: displayName,
					createdAt: user.metadata.creationTime,
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
	API_SIGN_UP_DISPLAY_NAME,
}
