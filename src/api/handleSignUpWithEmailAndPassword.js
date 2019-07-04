import {
	functions,
	// auth,
	// handleDifferentCredential,
} from 'firebase'

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

const handleSignUpWithEmailAndPassword = (
	values = defaultValues,
	routing = () => {}
) => {
	//const { [EMAIL]: email, [PASSWORD]: password } = values
	// return auth()
	// 	.fetchSignInMethodsForEmail(email)
	// 	.then(methods => {
	// 		if (methods.length !== 0 && !methods.includes('password')) {
	// 			routing()
	// 			handleDifferentCredential(
	// 				auth,
	// 				email,
	// 				auth.EmailAuthProvider.credential(email, password)
	// 			)
	// 			return { [STATUS]: false, ...defaultValues }
	// 		} else {
	return functions
		.httpsCallable(ON_SIGN_UP)(values)
		.then(res => {
			res[DATA][DATA] = { ...defaultValues, ...res[DATA][DATA] }
			return res[DATA]
		}) // TODO need FORM_ERROR here
	// 	}
	// })
	// .catch(err => {
	// 	return 'Unexpected Error Code 1'
	// })
}

export default handleSignUpWithEmailAndPassword
