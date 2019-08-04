import { auth } from 'firebaseInit'
import { UNEXPECTED_ERROR_CODE_3 } from 'constantValues'
import { simplerFirebaseErrorMessage } from 'utils'

const handlePasswordReset = email => {
	return auth()
		.sendPasswordResetEmail(email)
		.then(() => {
			// Email sent success, return undefined
		})
		.catch(err => {
			return simplerFirebaseErrorMessage(err, UNEXPECTED_ERROR_CODE_3)
		})
}

export default handlePasswordReset
