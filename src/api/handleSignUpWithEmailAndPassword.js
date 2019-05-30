import { functions } from 'utils/firebase'

import { EMAIL, PASSWORD, TERM, ON_SIGN_UP, DATA } from 'constantValues'

const handleSignUpWithEmailAndPassword = values => {
	const { [EMAIL]: email, [PASSWORD]: password, [TERM]: term } = values
	const defaultValues = {
		// undefined = success
		[EMAIL]: undefined,
		[PASSWORD]: undefined,
		[TERM]: undefined,
	}
	return functions
		.httpsCallable(ON_SIGN_UP)({ email, password, term })
		.then(res => {
			res[DATA][DATA] = { ...defaultValues, ...res[DATA][DATA] }
			return res[DATA]
		})
}

export default handleSignUpWithEmailAndPassword
