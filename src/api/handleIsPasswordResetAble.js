import { auth } from 'firebaseInit'
import { UNEXPECTED_ERROR_CODE_1 } from 'constantValues'
import { simplerResponseHandling } from 'utils'

const handleIsPasswordResetAble = email => {
	return auth()
		.fetchSignInMethodsForEmail(email)
		.then(methods => {
			if (methods.includes('password')) {
				return simplerResponseHandling(
					true,
					'this account password is reset-able'
				)
			} else {
				return simplerResponseHandling(
					false,
					'this email does not have password account.'
				)
			}
		})
		.catch(err => {
			return simplerResponseHandling(false, UNEXPECTED_ERROR_CODE_1, err)
		})
}

export { handleIsPasswordResetAble }
