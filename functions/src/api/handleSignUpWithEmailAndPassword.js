import * as functions from 'firebase-functions'
import req from 'request-promise'

import { firebase } from 'utils/firebase'
import { signUpValidation } from 'utils/validation'
import { resObj } from 'utils/objects'
import { handleIsEmailExist } from 'api'

import {
	ENV,
	VERIFY_EMAIL_API_KEY,
	STATUS,
	EMAIL,
	EMAIL_VALIDATION,
	PASSWORD,
	PASSWORD_VALIDATION,
	TERM,
	TERM_VALIDATION,
	USERNAME,
	USERNAME_VALIDATION,
	FIREBASE_DISPLAYNAME,
} from 'constantValues'

const {
	[ENV]: { [VERIFY_EMAIL_API_KEY]: verify_email_api_key },
} = functions.config()

const handleSignUpWithEmailAndPassword = async (data, context) => {
	const {
		[EMAIL_VALIDATION]: emailValidation,
		[PASSWORD_VALIDATION]: passwordValidation,
		[TERM_VALIDATION]: termValidation,
		[USERNAME_VALIDATION]: usernameValidation,
	} = signUpValidation

	const {
		[EMAIL]: email,
		[PASSWORD]: password,
		[TERM]: term,
		[USERNAME]: username,
	} = data
	try {
		const usernameInvalid = await usernameValidation(username)
			.then(() => '')
			.catch(result => result.errors)
		const emailInvalid = await emailValidation(email)
			.then(() => '')
			.catch(result => result.errors)
		const passwordInvalid = await passwordValidation(password)
			.then(() => '')
			.catch(result => result.errors)
		const termInvalid = await termValidation(term)
			.then(() => '')
			.catch(result => result.errors)

		if (usernameInvalid || emailInvalid || passwordInvalid || termInvalid) {
			return resObj(false, 'Internal Error Code 2', 2, {
				[USERNAME]: usernameInvalid,
				[EMAIL]: emailInvalid,
				[PASSWORD]: passwordInvalid,
				[TERM]: termInvalid,
			})
		}
		const isEmailNew = await handleIsEmailExist(data)

		if (!isEmailNew[STATUS]) {
			return isEmailNew
		}

		const isEmailReal = await req(`${verify_email_api_key}${email}`)
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

		if (!isEmailReal[STATUS]) {
			return isEmailReal
		}

		return firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(credential => {
				if (credential.user && credential.user.emailVerified === false) {
					credential.user.sendEmailVerification().catch(err => {
						console.log('email user failed', err)
					})
					credential.user
						.updateProfile({ [FIREBASE_DISPLAYNAME]: username })
						.catch(err => {
							console.log('update username failed', err)
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
