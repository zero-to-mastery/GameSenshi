import req from 'request-promise'
import { env } from 'firebaseInit'

import { signUpResObj } from 'utils/objects'

import {
	ENV_VERIFY_EMAIL_API_KEY,
	STATUS,
	SIGN_UP_EMAIL,
	DATA,
} from 'constantValues'

const { [ENV_VERIFY_EMAIL_API_KEY]: verify_email_api_key } = env

const handleSignUpWithEmailAndPassword = async (_, args) => {
	const {
		[DATA]: { [SIGN_UP_EMAIL]: email },
	} = args
	try {
		return req(`${verify_email_api_key}${email}`)
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
	} catch (err) {
		console.log(err)
		return signUpResObj(false, 'Internal Error Code 6', 6)
	}
}

export default handleSignUpWithEmailAndPassword
