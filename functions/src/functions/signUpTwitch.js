import { admin, TWITCH_ID, TWITCH_SECRET } from 'firebaseInit'
import axios from 'axios'
import {
	INTERNAL_ERROR_CODE_1,
	INTERNAL_ERROR_CODE_2,
	FUNCTION_OAUTH_CODE,
	FUNCTION_OAUTH_TOKEN,
	FUNCTION_REDIRECT_URI,
} from 'constantValues'
import { resObj } from 'utils'

// ! cannot return complex object (no nested object)

const signUpTwitch = data => {
	const {
		[FUNCTION_OAUTH_CODE]: code,
		[FUNCTION_REDIRECT_URI]: redirectUri,
	} = data
	const uri = `https://id.twitch.tv/oauth2/token?client_id=${TWITCH_ID}&client_secret=${TWITCH_SECRET}&code=${code}&grant_type=authorization_code&redirect_uri=${redirectUri}`
	return axios
		.post(uri)
		.then(response => {
			const { access_token } = response
			console.log('success', access_token)
			admin
				.auth()
				.createCustomToken(access_token)
				.then(customToken => {
					return { [FUNCTION_OAUTH_TOKEN]: customToken }
				})
				.catch(err => {
					const errObj = resObj(false, INTERNAL_ERROR_CODE_2, 2, '')
					console.log(errObj, err)
					return errObj
				})
		})
		.catch(err => {
			const errObj = resObj(false, INTERNAL_ERROR_CODE_1, 1, '')
			console.log(errObj, err)
			return errObj
		})
}

export { signUpTwitch }
