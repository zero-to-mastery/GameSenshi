import req from 'request-promise'
import { auth, verifyEmailURL } from 'firebaseInit'
import { signUpResObj } from 'utils/objects'

import {
	signUpEmailValidation,
	signUpPasswordValidation,
	signUpUsernameValidation,
} from 'utils/validation'

import { handleIsEmailNotExist } from 'api'

import {
	DATA,
	STATUS,
	SIGN_UP_EMAIL,
	SIGN_UP_PASSWORD,
	SIGN_UP_USERNAME,
	USER_DISPLAY_NAME,
	USER_PHOTO_URL,
	INTERNAL_ERROR_CODE_2,
	INTERNAL_ERROR_CODE_3,
	INTERNAL_ERROR_CODE_4,
	INTERNAL_ERROR_CODE_5,
	INTERNAL_ERROR_CODE_6,
} from 'constantValues'

// if user is smart, they can bypass this because they have the public api key
// however majority is normal user
// this issue need to be tackled in future, largely depend on firebase sdk limitation

const handleSignUpWithEmailAndPassword = async (_, args) => {
	const {
		[DATA]: {
			[SIGN_UP_EMAIL]: email,
			[SIGN_UP_PASSWORD]: password,
			[SIGN_UP_USERNAME]: username,
		},
		[DATA]: data,
	} = args
	try {
		const usernameInvalid = await signUpUsernameValidation(username)
			.then(() => null)
			.catch(result => result.errors)
		const emailInvalid = await signUpEmailValidation(email)
			.then(() => null)
			.catch(result => result.errors)
		const passwordInvalid = await signUpPasswordValidation(password)
			.then(() => null)
			.catch(result => result.errors)

		if (usernameInvalid || emailInvalid || passwordInvalid) {
			return signUpResObj(false, INTERNAL_ERROR_CODE_2, 2, {
				[SIGN_UP_USERNAME]: usernameInvalid,
				[SIGN_UP_EMAIL]: emailInvalid,
				[SIGN_UP_PASSWORD]: passwordInvalid,
			})
		}
		const isEmailNew = await handleIsEmailNotExist(data)

		if (!isEmailNew[STATUS]) {
			return isEmailNew
		}

		const isEmailReal = await req(`${verifyEmailURL}${email}`)
			.then(res => {
				const data = JSON.parse(res)
				if (data[STATUS] === 1) {
					return signUpResObj(true)
				} else {
					return signUpResObj(false, INTERNAL_ERROR_CODE_3, 3, {
						[SIGN_UP_EMAIL]: 'Invalid Email',
					})
				}
			})
			.catch(err => {
				console.log('email verifying error', err)
				return signUpResObj(false, INTERNAL_ERROR_CODE_4, 4, {
					[SIGN_UP_EMAIL]: 'Internal Error Code 4',
				})
			})

		if (!isEmailReal[STATUS]) {
			return isEmailReal
		}

		const isCreateSuccess = await auth()
			.createUserWithEmailAndPassword(email, password)
			.then(credential => ({ status: true, credential }))
			.catch(err => ({ status: false, err }))

		if (isCreateSuccess.status) {
			const {
				credential: { user },
			} = isCreateSuccess
			if (user && user.emailVerified === false) {
				user.sendEmailVerification().catch(err => {
					console.log('email user failed', err)
				})
				user
					.updateProfile({
						[USER_DISPLAY_NAME]: username,
						[USER_PHOTO_URL]: '',
					})
					.catch(err => {
						console.log('update username failed', err)
					})
			}
			return signUpResObj(true)
		} else {
			console.log('submit error', isCreateSuccess.err)
			return signUpResObj(false, INTERNAL_ERROR_CODE_5, 5)
		}
	} catch (err) {
		console.log(err)
		return signUpResObj(false, INTERNAL_ERROR_CODE_6, 6)
	}
}

export default handleSignUpWithEmailAndPassword
