// in future this should turn into npm library so that backend can use the same code

import { string, boolean } from 'yup'

// filter
import badWords from './badWords'
import reservedUsername from './reservedUsername'

const forbiddenName = [...badWords, ...reservedUsername]

const signUpEmailValidation = value =>
	string()
		.required('Email is required')
		.email('Bad email format')
		.validate(value)

const signUpPasswordValidation = value =>
	string()
		.min(8, 'minimum 8 characters')
		.matches(/^(?=.*[a-z])(?=.*[0-9]).*$/, '1 number and 1 lowercase')
		.matches(/^(?=.*\W)|(?=.*[A-Z]).*$/, '1 special character or 1 uppercase')
		.validate(value, {
			abortEarly: false,
		})

const signUpTermValidation = value =>
	boolean()
		.oneOf([true], 'Must Accept Terms and Conditions')
		.validate(value)

const signUpUsernameValidation = value =>
	string()
		.lowercase()
		.notOneOf(forbiddenName, 'This username is not available')
		.required('username is required')
		.max(15, 'maximum length is 15')
		.matches(
			/^[a-z0-9-_]+$/,
			'special characters other than underscore are not allowed'
		)
		.validate(value)

const signInEmailValidation = value =>
	string()
		.required('Email is required')
		.email('Bad email format')
		.validate(value)

const signInPasswordValidation = value =>
	string()
		.required('Password is required')
		.validate(value)

export {
	signUpEmailValidation,
	signUpPasswordValidation,
	signUpTermValidation,
	signUpUsernameValidation,
	signInEmailValidation,
	signInPasswordValidation,
}
