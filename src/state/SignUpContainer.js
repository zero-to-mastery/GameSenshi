import { Container } from 'unstated'
import {
	WILL_UNMOUNT,
	SUBMITTING,
	EMAIL,
	EMAIL_VALID,
	EMAIL_SUBMIT_ERRORS,
	PASSWORD,
	PASSWORD_VALID,
	PASSWORD_SUBMIT_ERRORS,
	TERM,
	TERM_VALID,
	TERM_SUBMIT_ERRORS,
	USERNAME,
	USERNAME_VALID,
	USERNAME_VALIDATION,
	USERNAME_SUBMIT_ERRORS,
	SUCCEED,
} from 'constantValues'

class SignUpContainer extends Container {
	state = {
		[SUCCEED]: false,
		[SUBMITTING]: false,
		[WILL_UNMOUNT]: false,
		[EMAIL]: '',
		[EMAIL_VALID]: false,
		[EMAIL_SUBMIT_ERRORS]: undefined,
		[PASSWORD]: '',
		[PASSWORD_VALID]: false,
		[PASSWORD_SUBMIT_ERRORS]: undefined,
		[TERM]: false,
		[TERM_VALID]: false,
		[TERM_SUBMIT_ERRORS]: undefined,
		[USERNAME]: '',
		[USERNAME_VALID]: false,
		[USERNAME_VALIDATION]: false,
		[USERNAME_SUBMIT_ERRORS]: undefined,
	}
}

export default SignUpContainer
