import { functions } from 'utils/firebaseFrontEnd'
import { ON_IS_EMAIL_EXIST, STATUS, MESSAGE, DATA, EMAIL } from 'constantValues'

const handleIsEmailExist = email => {
	const verifyEmail = functions.httpsCallable(ON_IS_EMAIL_EXIST)
	return verifyEmail({ [EMAIL]: email })
		.then(res => {
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

export default handleIsEmailExist
