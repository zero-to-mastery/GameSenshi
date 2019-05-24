import * as functions from 'firebase-functions'
import got from 'got'
import { resObj } from 'utils/objects'
import { ENV, VERIFY_EMAIL_API_KEY } from 'utils/envKeyConstants'

const {
	[ENV]: { [VERIFY_EMAIL_API_KEY]: verify_email_api_key },
} = functions.config()

const handleVerifyEmail = email =>
	got(`${verify_email_api_key}${email}`)
		.then(res => {
			if (res.body.status === 1) {
				return resObj(true)
			} else {
				return resObj(false, ['Invalid Email'])
			}
		})
		.catch(err => resObj(false, [err.response.body]))

export default handleVerifyEmail
