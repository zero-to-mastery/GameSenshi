import { simplerResponseHandling } from 'utils'
import { auth, userCollectionRef } from 'firebaseInit'

import {
	API_SIGN_UP_EMAIL,
	API_SIGN_UP_PASSWORD,
	API_SIGN_UP_USERNAME,
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
		[API_SIGN_UP_USERNAME]: username,
	} = values

	return auth()
		.createUserWithEmailAndPassword(email, password)
		.then(async credential => {
			const { user } = credential
			onSuccessfulSignUp()
			const userRef = userCollectionRef.doc(user.uid)
			try {
				await userRef.set({
					email,
					username,
					createdAt: user.metadata.creationTime,
				})
			} catch (err) {
				// * delete user if cannot create user data in database
				// ! this can be point of failure as user delete can also failed
				// TODO need extra handling in future, but not urgent since it is edge cases
				await user.delete().catch()
				return simplerResponseHandling(false, UNEXPECTED_ERROR_CODE_7, err)
			}

			await user.sendEmailVerification().catch()
			return simplerResponseHandling(true)
		})
		.catch(err => simplerResponseHandling(false, UNEXPECTED_ERROR_CODE_5, err))
}

export {
	handleSignUpWithEmailAndPassword,
	API_SIGN_UP_EMAIL,
	API_SIGN_UP_PASSWORD,
	API_SIGN_UP_USERNAME,
}
