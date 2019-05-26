import { functions } from 'utils/firebase'
import { EMAIL, ON_IS_USER_EXIST } from 'utils/signUpConstants'
import { STATUS, MESSAGE, DATA } from 'utils/commonConstants'

const handleIsUserExist = state => {
	const { [EMAIL]: email } = state
	const verifyEmail = functions.httpsCallable(ON_IS_USER_EXIST)
	return verifyEmail({ email })
		.then(res => {
			console.log(res)
			if (!res[DATA][STATUS]) {
				return res[DATA][MESSAGE]
			} else {
				return {
					[STATUS]: true,
					[MESSAGE]: 'This email is available for registration!',
				}
			}
		})
		.catch(() => 'Unexpected Error Code 1')
}

export default handleIsUserExist
