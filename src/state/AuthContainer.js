import { Container } from 'unstated'
import {
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
	USERNAME_EXTRA_HEIGHT,
	USERNAME_SUBMIT_ERRORS,
} from 'constantValues'

class AuthContainer extends Container {
	state = {
		[SUBMITTING]: false,
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
		[USERNAME_SUBMIT_ERRORS]: undefined,
		test: '',
	}
}

export default AuthContainer
