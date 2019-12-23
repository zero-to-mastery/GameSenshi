import { admin, twitchID, twitchSecret } from 'firebaseInit'
import request from 'request-promise-native'
import { INTERNAL_ERROR_CODE_1, INTERNAL_ERROR_CODE_2 } from 'constantValues'
import { resObj } from 'utils'
const signUpTwitch = data => {
	const { code, redirectUri } = data
	try {
		const { access_token } = request({
			method: 'POST',
			uri: `https://id.twitch.tv/oauth2/token
				?client_id=${twitchID}
				&client_secret=${twitchSecret}
				&code=${code}
				&grant_type=authorization_code
				&redirect_uri=${redirectUri}`,
			json: true, // Automatically stringifies the body to JSON
		})
		return admin
			.auth()
			.createCustomToken(access_token)
			.then(customToken => customToken)
			.catch(err => {
				return resObj(false, 2, INTERNAL_ERROR_CODE_2, err)
			})
	} catch (err) {
		return resObj(false, 1, INTERNAL_ERROR_CODE_1, err)
	}
}

export { signUpTwitch }
