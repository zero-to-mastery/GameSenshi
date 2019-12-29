import {
	admin,
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
			const {
				data: { access_token },
			} = response
			return axios
				.get('https://api.twitch.tv/helix/users', {
					headers: {
						Authorization: `Bearer ${access_token}`,
					},
				})
				.then(response => {
					const { data } = response
					const { id, email, display_name, profile_image_url } = data.data[0]
					console.log('data', data.data)
					return admin
						.auth()
						.createCustomToken(id)
						.then(customToken => {
							const tokenData = { [FUNCTION_OAUTH_TOKEN]: customToken }
							return admin
								.auth()
								.getUser(id)
								.then(() => {
									return tokenData
								})
								.catch(() => {
									return admin.auth
										.createUser({
											uid: id,
											email,
											displayName: display_name,
										})
										.then(() => {
											return docGeneralSettingSetAvatar(
												id,
												profile_image_url
											).then(() => {
												return tokenData
											})
										})
										.catch(err => {
											const errObj = resObj(false, INTERNAL_ERROR_CODE_4, '')
											console.log(errObj, err)
											return errObj
										})
								})
						})
						.catch(err => {
							const errObj = resObj(false, INTERNAL_ERROR_CODE_2, '')
							console.log(errObj, err)
							return errObj
						})
				})
				.catch(err => {
					const errObj = resObj(false, INTERNAL_ERROR_CODE_3, '')
					console.log(errObj, err)
					return errObj
				})
		})
		.catch(err => {
			const errObj = resObj(false, INTERNAL_ERROR_CODE_1, '')
			console.log(errObj, err)
			return errObj
		})
}

export { signUpTwitch }
