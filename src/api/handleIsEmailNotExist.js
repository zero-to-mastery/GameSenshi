import { auth } from 'firebaseInit'
import { STATUS, MESSAGE, UNEXPECTED_ERROR_CODE_2 } from 'constantValues'
import { SimplerFirebaseErrorMessage } from 'utils/SimplerErrorMessages'

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
			return SimplerFirebaseErrorMessage(err, UNEXPECTED_ERROR_CODE_2)
		})
}

export default handleIsEmailNotExist
