import {
	resObj,
	simplerResponseHandling,
	simplerErrorMessage,
	FUNCTION_STATUS,
	FUNCTION_CODE,
	FUNCTION_MESSAGE,
	FUNCTION_DATA,
} from './objects'

import {
	stopUndefined,
	checkDuplicatedObject,
	createGetOptions,
	convertToArrayIfNotArray,
} from './codeToolings'

import {
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
} from './validation'

export {
	resObj,
	simplerResponseHandling,
	simplerErrorMessage,
	FUNCTION_STATUS,
	FUNCTION_CODE,
	FUNCTION_MESSAGE,
	FUNCTION_DATA,
	stopUndefined,
	checkDuplicatedObject,
	createGetOptions,
	convertToArrayIfNotArray,
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