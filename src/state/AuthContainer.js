import { Container } from 'unstated'
import {
	SUBMITTING,
	EMAIL_IS_VALID,
	EMAIL_EXTRA_HEIGHT,
	EMAIL_SUBMIT_ERRORS,
	PASSWORD_IS_VALID,
	PASSWORD_EXTRA_HEIGHT,
	PASSWORD_SUBMIT_ERRORS,
	USERNAME_IS_VALID,
	USERNAME_EXTRA_HEIGHT,
	USERNAME_SUBMIT_ERRORS,
} from 'constantValues'

const defaultValues = {
	[SUBMITTING]: false,
	[EMAIL_IS_VALID]: false,
	[EMAIL_EXTRA_HEIGHT]: 0,
	[EMAIL_SUBMIT_ERRORS]: undefined,
	[PASSWORD_IS_VALID]: false,
	[PASSWORD_EXTRA_HEIGHT]: '0',
	[PASSWORD_SUBMIT_ERRORS]: undefined,
	[USERNAME_IS_VALID]: false,
	[USERNAME_EXTRA_HEIGHT]: 0,
	[USERNAME_SUBMIT_ERRORS]: undefined,
}

class AuthContainer extends Container {
	state = defaultValues
	resetState = () => {
		return this.setState(defaultValues)
	}
}

export default AuthContainer
