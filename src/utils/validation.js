// in future this should turn into npm library so that backend can use the same code

import { string, boolean } from 'yup'

// filter
import badWords from './badWords'
import reservedUsername from './reservedUsername'

const forbiddenName = [...badWords, ...reservedUsername]

const emailPopoverMessages = []

const signUpEmailValidation = value =>
	string()
		.required('this field is required!')
		.email('bad format')
		.validate(value, {
			abortEarly: true,
		})

const passwordPopoverMessages = [
	'minimum 8 characters',
	'at least 1 number',
	'at least 1 lowercase',
	'at least 1 uppercase',
]

const signUpPasswordValidation = value =>
	string()
		.required('this field is required!')
		.min(8, passwordPopoverMessages[0])
		.matches(/^(?=.*[0-9]).*$/, passwordPopoverMessages[1])
		.matches(/^(?=.*[a-z]).*$/, passwordPopoverMessages[2])
		.matches(/^(?=.*[A-Z]).*$/, passwordPopoverMessages[3])
		.validate(value, {
			abortEarly: false,
		})

const usernamePopoverMessages = []
const signUpUsernameValidation = value =>
	string()
		.lowercase()
		.required('this field is required!')
		.notOneOf(forbiddenName, `${value} is not allowed`)
		.max(15, 'maximum 15 characters')
		.matches(/^[a-z0-9-_]+$/, 'no special characters (except underscore)')
		.validate(value, {
			abortEarly: true,
		})

const signInEmailValidation = value =>
	string()
		.required('this field is required!')
		.email('bad email format')
		.validate(value)

const signInPasswordValidation = value =>
	string()
		.required('this field is required!')
		.validate(value)

// currently not in used
const checkBoxValidation = value =>
	boolean()
		.oneOf([true], 'please check this box!')
		.validate(value)

export {
	signUpEmailValidation,
	signUpPasswordValidation,
	checkBoxValidation,
	signUpUsernameValidation,
	signInEmailValidation,
	signInPasswordValidation,
	emailPopoverMessages,
	usernamePopoverMessages,
	passwordPopoverMessages,
}
