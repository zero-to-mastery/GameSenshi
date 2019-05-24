import { functions } from 'utils/firebase'
import { EMAIL, ON_VERIFY_EMAIL } from 'utils/signUpConstants'

const handleVerifyEmail = state => {
	const { [EMAIL]: email } = state
	const verifyEmail = functions.httpsCallable(ON_VERIFY_EMAIL)
	return verifyEmail({ email })
		.then(res => {
			console.log(res)
			if (!res.data.status) {
				return res.data.errors
			}
		})
		.catch(() => ['Unknown Error Code 1'])
}

export default handleVerifyEmail
