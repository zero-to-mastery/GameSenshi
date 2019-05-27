import * as functions from 'firebase-functions'
import req from 'request-promise'

import { firebase } from 'utils/firebase'
import { signUpValidation } from 'utils/validation'
import { resObj } from 'utils/objects'
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
import { STATUS } from 'utils/commonConstants'

const {
	[ENV]: { [VERIFY_EMAIL_API_KEY]: verify_email_api_key },
} = functions.config()

const handleSignUpWithEmailAndPassword = async (data, context) => {
	const {
		[EMAIL_VALIDATION]: emailValidation,
		[PASSWORD_VALIDATION]: passwordValidation,
		[TERM_VALIDATION]: termValidation,
	} = signUpValidation

	const { [EMAIL]: email, [PASSWORD]: password, [TERM]: term } = data

	try {
		const emailInvalid = await emailValidation(email)
			.then(() => '')
			.catch(result => result.errors)
		const passwordInvalid = await passwordValidation(password)
			.then(() => '')
			.catch(result => result.errors)
		const termInvalid = await termValidation(term)
			.then(() => '')
			.catch(result => result.errors)

		if (emailInvalid || passwordInvalid || termInvalid) {
			return resObj(false, 'Internal Error Code 2', 2, {
				[EMAIL]: emailInvalid,
				[PASSWORD]: passwordInvalid,
				[TERM]: termInvalid,
			})
		}
		const isUserExist = await handleIsUserExist(data)

		if (!isUserExist[STATUS]) {
			return isUserExist
		}

		const isEmailExist = await req(`${verify_email_api_key}${email}`)
			.then(res => {
				const data = JSON.parse(res)
				if (data[STATUS] === 1) {
					return resObj(true)
				} else {
					return resObj(false, 'Invalid Email', 3, { [EMAIL]: 'Invalid Email' })
				}
			})
			.catch(err => {
				console.log('email verifying error', err)
				return resObj(false, 'Internal Error Code 4', 4, {
					[EMAIL]: 'Internal Error Code 4',
				})
			})

		if (!isEmailExist[STATUS]) {
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
						.catch(err => {
							console.log('email user failed', err)
						})
				}
				return resObj(true)
			})
			.catch(err => {
				console.log('submit error', err)
				return resObj(false, 'Internal Error Code 5', 5)
			})
	} catch (err) {
		console.log(err)
		return resObj(false, 'Internal Error Code 6', 6)
	}
}

export default handleSignUpWithEmailAndPassword
