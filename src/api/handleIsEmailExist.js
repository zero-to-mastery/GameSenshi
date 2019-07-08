import { auth } from 'firebaseInit'

const handleIsEmailExist = email => {
	return auth()
		.fetchSignInMethodsForEmail(email)
		.then(methods => {
			if (!methods.includes('password')) {
				return 'this email does not have password account.'
			} else {
				return
			}
		})
		.catch(err => {
			return 'Unexpected Error Code 4'
		})
}

export default handleIsEmailExist
