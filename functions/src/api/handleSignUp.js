import * as functions from 'firebase-functions'
import req from 'request-promise'

import { firebase } from 'utils/firebase'
import { signUpValidation } from 'utils/validation'
import { resObj, valObj } from 'utils/objects'
import { handleIsUserExist } from 'api'

import { ENV, VERIFY_EMAIL_API_KEY } from 'utils/envKeyConstants'
import {
	EMAIL,
	PASSWORD,
	TERM,
	EMAIL_VALIDATION,
	PASSWORD_VALIDATION,
	TERM_VALIDATION,
} from 'utils/signUpConstants'

const {
	[ENV]: { [VERIFY_EMAIL_API_KEY]: verify_email_api_key },
} = functions.config()

const handleSignUp = async (data, context) => {
	const {
		[EMAIL_VALIDATION]: emailValidation,
		[PASSWORD_VALIDATION]: passwordValidation,
		[TERM_VALIDATION]: termValidation,
	} = signUpValidation

	const { [EMAIL]: email, [PASSWORD]: password, [TERM]: term } = data

	try {
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
			return resObj(
				false,
				emailInvalid.message || passwordInvalid.message || termInvalid.message
			)
		}
		const isUserExist = await handleIsUserExist(data)

		if (!isUserExist.status) {
			return isUserExist
		}

		const isEmailExist = await req(`${verify_email_api_key}${email}`)
			.then(res => {
				const data = JSON.parse(res)
				if (data.status === 1) {
					return resObj(true)
				} else {
					return resObj(false, 'Invalid Email')
				}
			})
			.catch(errors => {
				console.log('email verifying error', errors)
				return resObj(false, 'Internal Error Code 2', 2)
			})

		if (!isEmailExist.status) {
			return isEmailExist
		}

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
				console.log('submit error', errors)
				return resObj(false, 'Internal Error Code 3', 3)
			})
	} catch (e) {
		console.log(e)
		return resObj(false, 'Internal Error Code 4', 4)
	}
}

export default handleSignUp
