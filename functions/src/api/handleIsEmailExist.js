import * as admin from 'firebase-admin'
import { resObj } from 'utils/objects'
import { EMAIL } from 'constantValues'

const handleIsEmailExist = data => {
	return admin
		.auth()
		.getUserByEmail(data[EMAIL])
		.then(user => {
			// User already exists
			console.log(user)
			return resObj(false, 'User Already Exist')
		})
		.catch(err => {
			console.log(err)
			return (err.code === 'auth/user-not-found')
				?
				// User doesn't exist yet...
				resObj(true, 'User does not exist')
				:
				resObj(false, 'Internal Error Code 1', 1);
		})
}

export default handleIsEmailExist
