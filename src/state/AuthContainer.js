import { Container } from 'unstated'
import {
	SUBMIT_ERRORS,
	IS_VALID,
	SUBMITTING,
	EMAIL,
	EMAIL_IS_VALID,
	EMAIL_EXTRA_HEIGHT,
	EMAIL_SUBMIT_ERRORS,
	PASSWORD,
	PASSWORD_IS_VALID,
	PASSWORD_EXTRA_HEIGHT,
	PASSWORD_SUBMIT_ERRORS,
	USERNAME,
	USERNAME_IS_VALID,
	USERNAME_EXTRA_HEIGHT,
	USERNAME_SUBMIT_ERRORS,
} from 'constantValues'

const defaultValues = {
	[SUBMITTING]: false,
	[EMAIL]: '',
	[EMAIL_IS_VALID]: false,
	[EMAIL_EXTRA_HEIGHT]: 0,
	[EMAIL_SUBMIT_ERRORS]: undefined,
	[PASSWORD]: '',
	[PASSWORD_IS_VALID]: false,
	[PASSWORD_EXTRA_HEIGHT]: 0,
	[PASSWORD_SUBMIT_ERRORS]: undefined,
	[USERNAME]: '',
	[USERNAME_IS_VALID]: false,
	[USERNAME_EXTRA_HEIGHT]: 0,
	[USERNAME_SUBMIT_ERRORS]: undefined,
}

class AuthContainer extends Container {
	state = defaultValues
	resetState = () => {
		this.setState(defaultValues)
		return this
	}

	processSignUpErrors = data => {
		for (let name in data) {
			this.setState({
				[name + SUBMIT_ERRORS]: data[name],
				[name + IS_VALID]: !data[name],
			})
		}
		return this
	}
}

export default AuthContainer
