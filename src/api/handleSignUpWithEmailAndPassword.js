import {
	functions,
	// auth,
	// handleDifferentCredential,
} from 'firebaseInit'

import {
	USERNAME,
	EMAIL,
	PASSWORD,
	ON_SIGN_UP,
	DATA,
	// STATUS,
} from 'constantValues'

const defaultValues = {
	// undefined = success
	[USERNAME]: undefined,
	[EMAIL]: undefined,
	[PASSWORD]: undefined,
}

const handleSignUpWithEmailAndPassword = (values = defaultValues) => {
	return functions
		.httpsCallable(ON_SIGN_UP)(values)
		.then(res => {
			res[DATA][DATA] = { ...defaultValues, ...res[DATA][DATA] }
			return res[DATA]
		}) // TODO need FORM_ERROR here
}

export default handleSignUpWithEmailAndPassword
