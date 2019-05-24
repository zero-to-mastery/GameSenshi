import { functions } from 'utils/firebase'
import { EMAIL, ON_IS_USER_EXIST } from 'utils/signUpConstants'

const handleIsUserExist = state => {
	const { [EMAIL]: email } = state
	const verifyEmail = functions.httpsCallable(ON_IS_USER_EXIST)
	return verifyEmail({ email })
		.then(res => {
			console.log(res)
			if (!res.data.status) {
				return res.data.message
			}
		})
		.catch(() => 'Unexpected Error Code 1')
}

export default handleIsUserExist
