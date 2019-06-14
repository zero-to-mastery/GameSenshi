import { Container } from 'unstated'

import { SIGN_IN_MODAL_EMAIL, SIGN_IN_MODAL_OPEN } from 'constantValues'

class SignInModalContainer extends Container {
	state = {
		[SIGN_IN_MODAL_EMAIL]: '',
		[SIGN_IN_MODAL_OPEN]: false,
	}
	toggle = () => {
		this.setState(
			state => ((state[SIGN_IN_MODAL_OPEN] = !state[SIGN_IN_MODAL_OPEN]), state)
		)
		return this
	}
}

export default SignInModalContainer
