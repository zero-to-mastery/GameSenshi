import { TWITCH_ID, TWITCH_SECRET, onCall } from '1_fire_init'

import axios from 'axios'
import {
	INTERNAL_ERROR_CODE_1,
	INTERNAL_ERROR_CODE_3,
	FUNCTION_OAUTH_CODE,
	FUNCTION_REDIRECT_URI,
} from '0_constants'
import { resObj } from '1_utils'
import { getCustomToken } from './getCustomToken'

// ! cannot return complex object (no nested object)

const onTwitchSignIn = onCall(async data => {
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
		const errObj = resObj(false, INTERNAL_ERROR_CODE_3, err)
		console.log(errObj, err)
		return errObj
	}

	const { id, email, display_name, profile_image_url } = userData
	return getCustomToken('twitch_', id, email, display_name, profile_image_url)
})

export { onTwitchSignIn }
