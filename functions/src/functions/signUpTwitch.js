import {
	auth,
	TWITCH_ID,
	TWITCH_SECRET,
	docGeneralSettingSetAvatar,
} from 'firebaseInit'
import axios from 'axios'
import {
	INTERNAL_ERROR_CODE_1,
	INTERNAL_ERROR_CODE_2,
	INTERNAL_ERROR_CODE_3,
	INTERNAL_ERROR_CODE_4,
	INTERNAL_ERROR_CODE_7,
	INTERNAL_ERROR_CODE_8,
	FUNCTION_OAUTH_CODE,
	FUNCTION_OAUTH_TOKEN,
	FUNCTION_REDIRECT_URI,
} from 'constantValues'
import { resObj } from 'utils'

// ! cannot return complex object (no nested object)

const signUpTwitch = async data => {
	const {
		[FUNCTION_OAUTH_CODE]: code,
		[FUNCTION_REDIRECT_URI]: redirectUri,
	} = data
	const uri = `https://id.twitch.tv/oauth2/token?client_id=${TWITCH_ID}&client_secret=${TWITCH_SECRET}&code=${code}&grant_type=authorization_code&redirect_uri=${redirectUri}`

	let oAuthRespond = null

	try {
		oAuthRespond = await axios.post(uri)
	} catch (err) {
		const errObj = resObj(false, INTERNAL_ERROR_CODE_1, '')
		console.log(errObj, err)
		return errObj
	}

	let userData = null
	try {
		const {
			data: { access_token },
		} = oAuthRespond
		userData = await axios
			.get('https://api.twitch.tv/helix/users', {
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			})
			.then(respond => respond.data.data[0])
	} catch (err) {
		const errObj = resObj(false, INTERNAL_ERROR_CODE_3, '')
		console.log(errObj, err)
		return errObj
	}

	let customToken = null
	const { id, email, display_name, profile_image_url } = userData
	const uid = 'twitch:' + id
	try {
		customToken = await auth().createCustomToken(id)
	} catch (err) {
		const errObj = resObj(false, INTERNAL_ERROR_CODE_2, '')
		console.log(errObj, err)
		return errObj
	}

	const tokenData = { [FUNCTION_OAUTH_TOKEN]: customToken }
	try {
		return await auth()
			.getUser(id)
			.then(() => {
				return tokenData
			})
	} catch (err) {
		//
	}
	let newUser = null
	let newUserError = null
	try {
		newUser = await auth().createUser({
			uid,
			email,
			displayName: display_name,
		})
	} catch (err) {
		newUserError = err
	}

	try {
		if (newUser) {
			return await docGeneralSettingSetAvatar(uid, profile_image_url).then(
				() => {
					return tokenData
				}
			)
		}
	} catch (err) {
		const errObj = resObj(false, INTERNAL_ERROR_CODE_7, '')
		console.log(errObj, err)
		return errObj
	}

	try {
		if (newUserError) {
			if (
				newUserError.message.includes(
					'The email address is already in use by another account'
				)
			) {
				const { providerData } = await auth().getUserByEmail(email)
				const accounts = providerData
					.map(provider => {
						const removeCom = provider.providerId.replace('.com', '')
						return removeCom.charAt(0).toUpperCase() + removeCom.slice(1)
					})
					.join(', ')
				const message = `The email address already in use by ${accounts} account(s), please login with ${accounts}`
				const errObj = resObj(false, message)
				console.log(errObj, newUserError)
				return errObj
			} else {
				const errObj = resObj(false, INTERNAL_ERROR_CODE_8, '')
				console.log(errObj, newUserError)
				return errObj
			}
		}
	} catch (err) {
		const errObj = resObj(false, INTERNAL_ERROR_CODE_4, '')
		console.log(errObj, err)
		return errObj
	}
}

export { signUpTwitch }
