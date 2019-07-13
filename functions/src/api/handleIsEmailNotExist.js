import * as admin from 'firebase-admin'
import { signUpResObj } from 'utils/objects'
import { SIGN_UP_EMAIL, INTERNAL_ERROR_CODE_1 } from 'constantValues'

const handleIsEmailNotExist = data => {
	return admin
		.auth()
		.getUserByEmail(data[SIGN_UP_EMAIL])
		.then(user => {
			// User already exists
			console.log(user)
			return signUpResObj(false, 'User Already Exist')
		})
		.catch(err => {
			console.log(err)
			return err.code === 'auth/user-not-found'
				? // User doesn't exist yet...
				  signUpResObj(true, 'User does not exist')
				: signUpResObj(false, INTERNAL_ERROR_CODE_1, 1)
		})
}

export default handleIsEmailNotExist
