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
		return this.setState(state => {
			state[SIGN_IN_OPEN] = !state[SIGN_IN_OPEN]
			return state
		})
	}
	resetState = () => {
		return this.setState(defaultValues)
	}
}

export default SignInContainer
