// in future this should turn into npm library so that backend can use the same code

import { string, boolean } from 'yup'

import {
	EMAIL_VALIDATION,
	PASSWORD_VALIDATION,
	TERM_VALIDATION,
} from 'utils/signUpConstants'

const signUpValidation = {
	[EMAIL_VALIDATION]: value =>
		string()
			.required('Email is required')
			.email('Email not valid')
			.validate(value, {
				abortEarly: false,
			}),
	[PASSWORD_VALIDATION]: value =>
		string()
			.required('Password is required')
			.min(8, 'Password must be 8 characters or longer')
			.validate(value, {
				abortEarly: false,
			}),
	[TERM_VALIDATION]: value =>
		boolean()
			.oneOf([true], 'Must Accept Terms and Conditions')
			.validate(value, {
				abortEarly: false,
			}),
}

export { signUpValidation }
