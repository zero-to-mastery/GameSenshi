import { auth } from 'firebaseInit'
import { STATUS, MESSAGE } from 'constantValues'

const handleIsEmailExist = email => {
	return auth()
		.fetchSignInMethodsForEmail(email)
		.then(methods => {
			//if (!methods.includes('password')) {
			if (methods.length === 0) {
				return {
					[STATUS]: true,
					[MESSAGE]: 'This email is available for registration!',
				}
			} else {
				return 'this email is already registered!'
			}
		})
		.catch(err => {
			return 'Unexpected Error Code 1'
		})
}

export default handleIsEmailExist
