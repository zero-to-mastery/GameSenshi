import { functions } from 'utils/firebase'

import {
	USERNAME,
	EMAIL,
	PASSWORD,
	TERM,
	ON_SIGN_UP,
	DATA,
} from 'constantValues'

const handleSignUpWithEmailAndPassword = values => {
	console.log(values)
	const defaultValues = {
		// undefined = success
		[USERNAME]: undefined,
		[EMAIL]: undefined,
		[PASSWORD]: undefined,
		[TERM]: undefined,
	}
	return functions
		.httpsCallable(ON_SIGN_UP)(values)
		.then(res => {
			res[DATA][DATA] = { ...defaultValues, ...res[DATA][DATA] }
			console.log(res)
			return res[DATA]
		})
}

export default handleSignUpWithEmailAndPassword
