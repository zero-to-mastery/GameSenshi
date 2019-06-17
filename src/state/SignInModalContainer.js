import { Container } from 'unstated'

import {
	SIGN_IN_MODAL_EMAIL,
	SIGN_IN_MODAL_OPEN,
	SIGN_IN_MODAL_CALLBACK,
} from 'constantValues'

const defaultValues = {
	[SIGN_IN_MODAL_EMAIL]: '',
	[SIGN_IN_MODAL_OPEN]: false,
	[SIGN_IN_MODAL_CALLBACK]: () => {},
}

class SignInModalContainer extends Container {
	state = defaultValues
	toggle = () => {
		return this.setState(state => {
			state[SIGN_IN_MODAL_OPEN] = !state[SIGN_IN_MODAL_OPEN]
			return state
		})
	}
	resetState = () => {
		return this.setState(defaultValues)
	}
}

export default SignInModalContainer
