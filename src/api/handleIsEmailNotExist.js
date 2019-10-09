import { auth } from 'firebaseInit'
import { simplerResponseHandling } from 'utils'
import { UNEXPECTED_ERROR_CODE_2 } from 'constantValues'

const handleIsEmailNotExist = email => {
	return auth()
		.fetchSignInMethodsForEmail(email)
		.then(methods => {
			if (methods.length === 0) {
				return simplerResponseHandling(
					true,
					'This email is available for registration!'
				)
			} else {
				return simplerResponseHandling(
					false,
					'this email is already registered!'
				)
			}
		})
		.catch(err => {
			return simplerResponseHandling(false, UNEXPECTED_ERROR_CODE_2, err)
		})
}

export { handleIsEmailNotExist }
