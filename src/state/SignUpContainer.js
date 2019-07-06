import { Container } from 'unstated'
import {
	SUBMIT_ERRORS,
	IS_VALID,
	SIGN_UP_EMAIL,
	SIGN_UP_EMAIL_EXTRA_HEIGHT,
	SIGN_UP_PASSWORD,
	SIGN_UP_PASSWORD_EXTRA_HEIGHT,
	SIGN_UP_USERNAME,
	SIGN_UP_USERNAME_EXTRA_HEIGHT,
} from 'constantValues'

const defaultValues = {
	[SIGN_UP_EMAIL]: '',
	[SIGN_UP_EMAIL_EXTRA_HEIGHT]: 0,
	[SIGN_UP_PASSWORD]: '',
	[SIGN_UP_PASSWORD_EXTRA_HEIGHT]: 0,
	[SIGN_UP_USERNAME]: '',
	[SIGN_UP_USERNAME_EXTRA_HEIGHT]: 0,
}

class SignUpContainer extends Container {
	state = defaultValues
	resetState = () => {
		this.setState(defaultValues)
		return this
	}

	processSignUpErrors = data => {
		for (let name in data) {
			this.setState({
				[name + SUBMIT_ERRORS]: data[name],
				[name + IS_VALID]: !data[name], //undefined = valid
			})
		}
		return this
	}
}

export default SignUpContainer
