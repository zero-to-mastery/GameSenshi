// in future this should turn into npm library so that backend can use the same code

import { string, boolean } from 'yup'

import {
	EMAIL_VALIDATION,
	PASSWORD_VALIDATION,
	TERM_VALIDATION,
	USERNAME_VALIDATION,
} from 'utils/signUpConstants'

// filter
import badWords from './badWords'
import reservedUsername from './reservedUsername'

const nameValidation = value =>
	string()
		.lowercase()
		.notOneOf(
			[...badWords, ...reservedUsername],
			'This username is not available'
		)
		.required('username is required')
		.max(15, 'maximum length is 15')
		.matches(/^[a-zA-Z0-9-_]+$/, 'can only be alphanumeric or underscore')
		.validate(value, {
			abortEarly: true,
		})

const signUpValidation = {
	[EMAIL_VALIDATION]: value =>
		string()
			.required('Email is required')
			.email('Bad email format')
			.validate(value, {
				abortEarly: true, //abort on first error
			}),
	[PASSWORD_VALIDATION]: value =>
		string()
			.required('Password is required')
			.min(8, 'Password must be 8 characters or longer')
			.validate(value, {
				abortEarly: true,
			}),
	[TERM_VALIDATION]: value =>
		boolean()
			.oneOf([true], 'Must Accept Terms and Conditions')
			.validate(value, {
				abortEarly: true,
			}),
	[USERNAME_VALIDATION]: nameValidation,
}

export { signUpValidation }
