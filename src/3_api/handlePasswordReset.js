import { auth } from '1_firebaseInit'
import { UNEXPECTED_ERROR_CODE_3 } from '0_constantValues'
import { simplerResponseHandling } from '1_utils'

const handlePasswordReset = email => {
	return auth()
		.sendPasswordResetEmail(email)
		.then(() => {
			return simplerResponseHandling(true)
		})
		.catch(err => {
			return simplerResponseHandling(false, UNEXPECTED_ERROR_CODE_3, err)
		})
}

export { handlePasswordReset }
