import { auth } from 'firebaseInit'

const handleIsEmailExist = email => {
	return auth()
		.fetchSignInMethodsForEmail(email)
		.then(methods => {
			if (!methods.includes('password')) {
				return 'this email is not registered!'
			} else {
				return
			}
		})
		.catch(err => {
			return 'Unexpected Error Code 4'
		})
}

export default handleIsEmailExist
