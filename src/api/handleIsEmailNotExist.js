import { auth } from 'firebaseInit'
import { STATUS, MESSAGE } from 'constantValues'
import { UNEXPECTED_ERROR_CODE_2 } from 'constantsValues'

const handleIsEmailNotExist = email => {
	return auth()
		.fetchSignInMethodsForEmail(email)
		.then(methods => {
			if (methods.length === 0) {
				return {
					[STATUS]: true,
					[MESSAGE]: 'This email is available for registration!',
				}
			} else {
				return 'this email is already registered!'
			}
		})
		.catch(err => {
			return UNEXPECTED_ERROR_CODE_2
		})
}

export default handleIsEmailNotExist
