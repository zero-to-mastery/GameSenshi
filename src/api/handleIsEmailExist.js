import { auth } from 'firebaseInit'
import { UNEXPECTED_ERROR_CODE_1 } from 'constantValues'
import { simplerFirebaseErrorMessage } from 'utils'

const handleIsEmailExist = email => {
	return auth()
		.fetchSignInMethodsForEmail(email)
		.then(methods => {
			if (!methods.includes('password')) {
				return 'this email does not have password account.'
			} else {
				return {
					status: 'true',
					message: 'this account password is reset-able',
				}
			}
		})
		.catch(err => {
			return simplerFirebaseErrorMessage(err, UNEXPECTED_ERROR_CODE_1)
		})
}

export default handleIsEmailExist
