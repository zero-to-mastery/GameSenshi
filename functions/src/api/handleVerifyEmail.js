import * as functions from 'firebase-functions'
import req from 'request-promise'
import { resObj } from 'utils/objects'
import { ENV, VERIFY_EMAIL_API_KEY } from 'utils/envKeyConstants'
import { EMAIL } from 'utils/signUpConstants'

const {
	[ENV]: { [VERIFY_EMAIL_API_KEY]: verify_email_api_key },
} = functions.config()

// this function should merge with on sign up
// it is waste to check this when user finish typing then check again when user submit
// a better way is to replace this with check existing email in database
const handleVerifyEmail = data => {
	return req(`${verify_email_api_key}${data[EMAIL]}`)
		.then(res => {
			const data = JSON.parse(res)
			if (data.status === 1) {
				return resObj(true)
			} else {
				return resObj(false, ['Invalid Email'])
			}
		})
		.catch(err => {
			return resObj(false, ['Internal Error Code 1'], 1)
		})
}

export default handleVerifyEmail
