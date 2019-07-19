import { auth } from 'firebaseInit'
import { UNEXPECTED_ERROR_CODE_3 } from 'constantValues'
import { SimplerFirebaseErrorMessage } from 'utils/SimplerErrorMessages'

const handlePasswordReset = email => {
	return auth()
		.sendPasswordResetEmail(email)
		.then(() => {
			// Email sent success, return undefined
		})
		.catch(err => {
			return SimplerFirebaseErrorMessage(err, UNEXPECTED_ERROR_CODE_3)
		})
}

export default handlePasswordReset
