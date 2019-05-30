import { Container } from 'unstated'
import {
	WILL_UNMOUNT,
	SUBMITTING,
	EMAIL,
	EMAIL_IS_VALID,
	EMAIL_EXTRA_HEIGHT,
	EMAIL_SUBMIT_ERRORS,
	PASSWORD,
	PASSWORD_IS_VALID,
	PASSWORD_EXTRA_HEIGHT,
	PASSWORD_SUBMIT_ERRORS,
	TERM,
	TERM_IS_VALID,
	TERM_SUBMIT_ERRORS,
	USERNAME,
	USERNAME_IS_VALID,
	USERNAME_VALIDATION,
	USERNAME_EXTRA_HEIGHT,
	USERNAME_SUBMIT_ERRORS,
	SIGNED_IN,
} from 'constantValues'

class SignUpContainer extends Container {
	state = {
		[SIGNED_IN]: false,
		[SUBMITTING]: false,
		[WILL_UNMOUNT]: false,
		[EMAIL]: '',
		[EMAIL_IS_VALID]: false,
		[EMAIL_EXTRA_HEIGHT]: 0,
		[EMAIL_SUBMIT_ERRORS]: undefined,
		[PASSWORD]: '',
		[PASSWORD_IS_VALID]: false,
		[PASSWORD_EXTRA_HEIGHT]: '0',
		[PASSWORD_SUBMIT_ERRORS]: undefined,
		[TERM]: false,
		[TERM_IS_VALID]: false,
		[TERM_SUBMIT_ERRORS]: undefined,
		[USERNAME]: '',
		[USERNAME_IS_VALID]: false,
		[USERNAME_EXTRA_HEIGHT]: 0,
		[USERNAME_VALIDATION]: false,
		[USERNAME_SUBMIT_ERRORS]: undefined,
	}
}

export default SignUpContainer
