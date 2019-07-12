import req from 'request-promise'
import { auth, functions } from 'firebaseInit'

import {
	signUpEmailValidation,
	signUpPasswordValidation,
	signUpUsernameValidation,
} from 'utils/validation'
import { signUpResObj } from 'utils/objects'
import { handleIsEmailNotExist } from 'api'

import {
	ENV,
	ENV_VERIFY_EMAIL_API_KEY,
	STATUS,
	SIGN_UP_EMAIL,
	SIGN_UP_PASSWORD,
	SIGN_UP_USERNAME,
	USER_DISPLAY_NAME,
	USER_PHOTO_URL,
	DATA,
} from 'constantValues'

const {
	[ENV]: { [ENV_VERIFY_EMAIL_API_KEY]: verify_email_api_key },
} = functions.config()

const handleSignUpWithEmailAndPassword = async (
	parent,
	args,
	context,
	info
) => {
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
			return signUpResObj(false, 'Internal Error Code 2', 2, {
				[SIGN_UP_USERNAME]: usernameInvalid,
				[SIGN_UP_EMAIL]: emailInvalid,
				[SIGN_UP_PASSWORD]: passwordInvalid,
			})
		}
		const isEmailNew = await handleIsEmailNotExist(data)

		if (!isEmailNew[STATUS]) {
			return isEmailNew
		}

		const isEmailReal = await req(`${verify_email_api_key}${email}`)
			.then(res => {
				const data = JSON.parse(res)
				if (data[STATUS] === 1) {
					return signUpResObj(true)
				} else {
					return signUpResObj(false, 'Invalid Email', 3, {
						[SIGN_UP_EMAIL]: 'Invalid Email',
					})
				}
			})
			.catch(err => {
				console.log('email verifying error', err)
				return signUpResObj(false, 'Internal Error Code 4', 4, {
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
			return signUpResObj(false, 'Internal Error Code 5', 5)
		}
	} catch (err) {
		console.log(err)
		return signUpResObj(false, 'Internal Error Code 6', 6)
	}
}

export default handleSignUpWithEmailAndPassword
