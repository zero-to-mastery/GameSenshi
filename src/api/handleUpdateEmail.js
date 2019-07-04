import { auth } from 'firebase'

const handleUpdateEmail = email => {
	return auth()
		.currentUser.updateEmail(email)
		.then(() => {}) // return undefined if success
		.catch(() => {})
}

export default handleUpdateEmail
