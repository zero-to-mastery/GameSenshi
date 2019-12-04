// in future this should turn into npm library so that backend can use the same code

import { string, boolean, object } from 'yup'

// filter
import { badWords } from 'utils/badWords'
import { reservedUsernames } from 'utils/reservedUsername'

const forbiddenName = [...badWords, ...reservedUsernames]

const emailPopoverMessages = []

const signUpEmailValidation = value =>
	string()
		.required('required!')
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
		.required('required!')
		.min(8, passwordPopoverMessages[0])
		.matches(/^(?=.*[0-9]).*$/, passwordPopoverMessages[1])
		.matches(/^(?=.*[a-z]).*$/, passwordPopoverMessages[2])
		.matches(/^(?=.*[A-Z]).*$/, passwordPopoverMessages[3])
		.validate(value, {
			abortEarly: false,
		})

const usernamePopoverMessages = []
const usernameLength = 25
const signUpUsernameValidation = value =>
	string()
		.lowercase()
		.required('required!')
		.matches(/^[a-z].*/, 'must start with alphabet')
		.notOneOf(forbiddenName, `${value} is not allowed`)
		.max(usernameLength, `maximum ${usernameLength} characters`)
		.matches(/^[a-z0-9\s]+$/, 'no special characters')
		.validate(value, {
			abortEarly: true,
		})

const signInEmailValidation = value =>
	string()
		.required('required!')
		.email('bad email format')
		.validate(value)

const signInPasswordValidation = value =>
	string()
		.required('required!')
		.validate(value)

// currently not in used
const checkBoxValidation = value =>
	boolean()
		.oneOf([true], 'please check this box!')
		.validate(value)

const cardNumberValidation = value =>
	string()
		.required('required!')
		.max(16, 'maximum 16 characters')
		.matches(/^(?=.*[0-9]).*$/, 'only number is allowed')
		.validate(value)

const cardNameValidation = value =>
	string()
		.required('required!')
		.max(50, 'maximum 50 characters')
		.validate(value)

const cardCvcValidation = value =>
	string()
		.required('required!')
		.max(4, 'maximum 4 characters')
		.matches(/^(?=.*[0-9]).*$/, 'only number is allowed')
		.validate(value)

const cardExpiryValidation = (value, selectObjArray) => {
	return object()
		.shape({
			value: string()
				.required('required!')
				.oneOf(
					selectObjArray.map(obj => obj.value),
					'invalid value!'
				),
		})
		.validate(value)
}

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
	cardNumberValidation,
	cardNameValidation,
	cardCvcValidation,
	cardExpiryValidation,
	usernameLength,
}
