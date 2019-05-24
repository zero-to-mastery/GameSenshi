import { functions } from 'utils/firebase'

import {
	EMAIL,
	PASSWORD,
	TERM,
	EMAIL_VALID,
	PASSWORD_VALID,
	TERM_VALID,
	ON_SIGN_UP,
} from 'utils/signUpConstants'

const handleSignUp = state => {
	const {
		[EMAIL]: email,
		[PASSWORD]: password,
		[TERM]: term,
		[EMAIL_VALID]: emailValid,
		[PASSWORD_VALID]: passwordValid,
		[TERM_VALID]: termValid,
	} = state

	if (emailValid && passwordValid && termValid) {
		const addUser = functions.httpsCallable(ON_SIGN_UP)
		addUser({ email, password, term }).then(res => {
			console.log(res)
		})
	}
}

export default handleSignUp
