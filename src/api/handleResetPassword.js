import { auth } from 'firebaseInit'

const handleResetPassword = email => {
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
					return 'Unexpected Error Code 5'
			}
		})
}

export default handleResetPassword
