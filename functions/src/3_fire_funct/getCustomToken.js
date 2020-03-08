import { auth } from '1_fire_init'
import {
	INTERNAL_ERROR_CODE_2,
	INTERNAL_ERROR_CODE_4,
	INTERNAL_ERROR_CODE_8,
	FUNCTION_TOKEN_CUSTOM,
} from '0_constants'
import { resObj } from '1_utils'
import { downloadAndStoreUserAvatar } from './utils'

// ! cannot return complex object (no nested object)

const getCustomToken = async (
	provider = '',
	id = '',
	email = '',
	displayName = '',
	avatarUrl = ''
) => {
	let customToken = null
	let uid = null
	let isUserExist = false

	try {
		const { uid: uidExist } = await auth().getUserByEmail(email)
		uid = uidExist
		isUserExist = true
	} catch (err) {
		if (err.code.includes('auth/user-not-found')) {
			uid = provider + id //provider is not needed if the provider is something firebase aware of eg google, facebook, twitter
		} else {
			const errObj = resObj(false, INTERNAL_ERROR_CODE_8, '')
			console.log(errObj, err)
			return errObj
		}
	}
	let tokenData = null
	try {
		customToken = await auth().createCustomToken(uid)
		tokenData = { [FUNCTION_TOKEN_CUSTOM]: customToken }
		if (isUserExist) {
			return tokenData
		}
	} catch (err) {
		const errObj = resObj(false, INTERNAL_ERROR_CODE_2, '')
		console.log(errObj, err)
		return errObj
	}

	let newUser = null
	try {
		newUser = await auth().createUser({
			uid,
			email,
			displayName,
		})
	} catch (err) {
		// some unexpected error
		const errObj = resObj(false, INTERNAL_ERROR_CODE_4, '')
		console.log(errObj, err)
		return errObj
	}

	if (newUser) {
		console.log(avatarUrl)
		downloadAndStoreUserAvatar(uid, avatarUrl)
		return tokenData
	}
}

export { getCustomToken }
