import { auth } from '1_fire_init'
import { UNEXPECTED_ERROR_CODE_1 } from '0_constants'
import { simplerResponseHandling } from '1_utils'

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
