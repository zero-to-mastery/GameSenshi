import { auth, docUserSettingGeneralAvatarSet } from 'firebaseInit'
import {
	INTERNAL_ERROR_CODE_2,
	INTERNAL_ERROR_CODE_4,
	INTERNAL_ERROR_CODE_7,
	INTERNAL_ERROR_CODE_8,
	FUNCTION_CUSTOM_TOKEN,
} from '0_constantValues'
import { resObj } from 'utils'

// ! cannot return complex object (no nested object)

const getCustomToken = async (
	provider = '',
	id = '',
	email = '',
	displayName = '',
	profileImageUrl = ''
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
		tokenData = { [FUNCTION_CUSTOM_TOKEN]: customToken }
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
		docUserSettingGeneralAvatarSet(uid)(profileImageUrl).catch(err => {
			const errObj = resObj(false, INTERNAL_ERROR_CODE_7, '')
			console.log(errObj, err)
			return errObj
		})
		return tokenData
	}
}

export { getCustomToken }
