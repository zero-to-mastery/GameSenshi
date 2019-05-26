import { functions } from 'utils/firebase'

import { EMAIL, PASSWORD, TERM, ON_SIGN_UP } from 'utils/signUpConstants'
import { STATUS, DATA } from 'utils/commonConstants'

const handleSignUp = values => {
	const { [EMAIL]: email, [PASSWORD]: password, [TERM]: term } = values
	const defaultValues = { [EMAIL]: '', [PASSWORD]: '', [TERM]: '' }
	const signUpUser = functions.httpsCallable(ON_SIGN_UP)
	signUpUser({ email, password, term }).then(res => {
		console.log(res)
		// return undefined if success
		// return object with property same with initial values
		if (!res[DATA][STATUS]) {
			console.log({ ...defaultValues, ...res[DATA][DATA] })
			return { ...defaultValues, ...res[DATA][DATA] }
		} else {
			// if success, return to history page if available
			// if not, return to index page
		}
	})
}

export default handleSignUp
