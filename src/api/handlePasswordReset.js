import { auth } from 'firebaseInit'
import { UNEXPECTED_ERROR_CODE_3 } from 'constantValues'

const handlePasswordReset = email => {
	return auth()
		.sendPasswordResetEmail(email)
		.then(() => {
			// Email sent success, return undefined
		})
		.catch(err => {
			switch (err.code) {
				case 'auth/network-request-failed':
					return 'Network Failed'
				default:
					return UNEXPECTED_ERROR_CODE_3
			}
		})
}

export default handlePasswordReset
