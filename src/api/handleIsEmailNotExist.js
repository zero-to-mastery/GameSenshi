import { auth } from 'firebaseInit'
import {
	API_STATUS,
	API_MESSAGE,
	UNEXPECTED_ERROR_CODE_2,
} from 'constantValues'
import { simplerFirebaseErrorMessage } from 'utils/simplerErrorMessages'

const handleIsEmailNotExist = email => {
	return auth()
		.fetchSignInMethodsForEmail(email)
		.then(methods => {
			if (methods.length === 0) {
				return {
					[API_STATUS]: true,
					[API_MESSAGE]: 'This email is available for registration!',
				}
			} else {
				return 'this email is already registered!'
			}
		})
		.catch(err => {
			return simplerFirebaseErrorMessage(err, UNEXPECTED_ERROR_CODE_2)
		})
}

export default handleIsEmailNotExist
