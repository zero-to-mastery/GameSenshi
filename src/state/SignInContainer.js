import { Container } from 'unstated'

import { SIGN_IN_EMAIL, SIGN_IN_OPEN, SIGN_IN_CALLBACK } from 'constantValues'

const defaultValues = {
	[SIGN_IN_EMAIL]: '',
	[SIGN_IN_OPEN]: false,
	[SIGN_IN_CALLBACK]: () => {},
}

class SignInContainer extends Container {
	state = defaultValues
	toggle = () => {
		this.setState(state => {
			state[SIGN_IN_OPEN] = !state[SIGN_IN_OPEN]
			return state
		})
		return this
	}
	resetState = () => {
		this.setState(defaultValues)
		return this
	}
	close = () => {
		this.setState({ [SIGN_IN_OPEN]: false })
		return this
	}
	show = (email, afterSubmitCallback = () => {}) => {
		this.setState({
			[SIGN_IN_EMAIL]: email,
			[SIGN_IN_OPEN]: true,
			[SIGN_IN_CALLBACK]: afterSubmitCallback,
		})
		return this
	}
}

export default SignInContainer
