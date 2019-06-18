// in future this should turn into npm library so that backend can use the same code

import { string, boolean } from 'yup'

// filter
import badWords from './badWords'
import reservedUsername from './reservedUsername'

const forbiddenName = [...badWords, ...reservedUsername]

const emailErrorMsgs = ['Email is required', 'Bad email format']

const signUpEmailValidation = value =>
	string()
		.required(emailErrorMsgs[0])
		.email(emailErrorMsgs[1])
		.validate(value, {
			abortEarly: false,
		})

const passwordErrorMsgs = [
	'minimum 8 characters',
	'1 number and 1 lowercase',
	'1 special character or 1 uppercase',
]

const signUpPasswordValidation = value =>
	string()
		.min(8, passwordErrorMsgs[0])
		.matches(/^(?=.*[a-z])(?=.*[0-9]).*$/, passwordErrorMsgs[1])
		.matches(/^(?=.*\W)|(?=.*[A-Z]).*$/, passwordErrorMsgs[2])
		.validate(value, {
			abortEarly: false,
		})

const usernameErrorMsgs = [
	'This username is not allowed',
	'username is required',
	'maximum length is 15',
	'special characters other than underscore are not allowed',
]

const signUpUsernameValidation = value =>
	string()
		.lowercase()
		.notOneOf(forbiddenName, usernameErrorMsgs[0])
		.required(usernameErrorMsgs[1])
		.max(15, usernameErrorMsgs[2])
		.matches(/^[a-z0-9-_]+$/, usernameErrorMsgs[3])
		.validate(value, {
			abortEarly: false,
		})

const signInEmailValidation = value =>
	string()
		.required('Email is required')
		.email('Bad email format')
		.validate(value)

const signInPasswordValidation = value =>
	string()
		.required('Password is required')
		.validate(value)

// currently not in used
const checkBoxValidation = value =>
	boolean()
		.oneOf([true], 'Must Accept Terms and Conditions')
		.validate(value)

export {
	signUpEmailValidation,
	signUpPasswordValidation,
	checkBoxValidation,
	signUpUsernameValidation,
	signInEmailValidation,
	signInPasswordValidation,
	emailErrorMsgs,
	usernameErrorMsgs,
	passwordErrorMsgs,
}
