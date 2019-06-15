import { Container } from 'unstated'

import {
	SIGN_IN_MODAL_EMAIL,
	SIGN_IN_MODAL_OPEN,
	SIGN_IN_MODAL_CALLBACK,
} from 'constantValues'

class SignInModalContainer extends Container {
	state = {
		[SIGN_IN_MODAL_EMAIL]: '',
		[SIGN_IN_MODAL_OPEN]: false,
		[SIGN_IN_MODAL_CALLBACK]: () => {},
	}
	toggle = () => {
		this.setState(state => {
			state[SIGN_IN_MODAL_OPEN] = !state[SIGN_IN_MODAL_OPEN]
			return state
		})
		return this
	}
}

export default SignInModalContainer
