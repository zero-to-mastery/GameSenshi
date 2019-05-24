import { firebase } from 'utils/firebase'
import { signUpValidation } from 'utils/validation'
import { resObj, valObj } from 'utils/objects'

import {
	EMAIL,
	PASSWORD,
	TERM,
	EMAIL_VALIDATION,
	PASSWORD_VALIDATION,
	TERM_VALIDATION,
} from 'utils/signUpConstants'

const handleSignUp = async (data, context) => {
	const {
		[EMAIL_VALIDATION]: emailValidation,
		[PASSWORD_VALIDATION]: passwordValidation,
		[TERM_VALIDATION]: termValidation,
	} = signUpValidation

	const { [EMAIL]: email, [PASSWORD]: password, [TERM]: term } = data

	const emailInvalid = await emailValidation(email)
		.then(() => '')
		.catch(result => valObj(EMAIL, result.errors))
	const passwordInvalid = await passwordValidation(password)
		.then(() => '')
		.catch(result => valObj(PASSWORD, result.errors))
	const termInvalid = await termValidation(term)
		.then(() => '')
		.catch(result => valObj(TERM, result.errors))
	if (emailInvalid || passwordInvalid || termInvalid) {
		return resObj(false, [emailInvalid, passwordInvalid, termInvalid])
	} else {
		return firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(credential => {
				if (credential.user && credential.user.emailVerified === false) {
					credential.user
						.sendEmailVerification()
						.then(() => {
							console.log('email verification sent to user')
						})
						.catch(error => {
							console.log('email user failed', error)
						})
				}
				return resObj(true)
			})
			.catch(errors => {
				console.log('submit failed', errors)
				return resObj(false, [errors])
			})
	}
}

export default handleSignUp
