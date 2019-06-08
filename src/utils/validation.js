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
		.min(8, 'Password must be 8 characters or longer')
		.matches(
			/^((?=.*[a-z])|(?=.*[A-Z]))(?=.*[0-9]).*$/,
			'must consist of number and alphabet'
		)
		.matches(
			/^(?=.*\W)|(?=.*[A-Z]).*$/,
			'must consist of one or more special character or uppercase'
		)
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

export {
	signUpEmailValidation,
	signUpPasswordValidation,
	signUpTermValidation,
	signUpUsernameValidation,
}
