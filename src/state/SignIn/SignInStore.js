import { Container } from 'unstated'
import { STATE, SET_STATE, RESET_STATE } from 'state/constants'

const SIGN_IN_STORE_STATE_EMAIL = 'email'
const SIGN_IN_STORE_STATE_IS_OPEN = 'isOpen'
const SIGN_IN_STORE_STATE_SIGNED_IN_CALLBACK = 'callback'
const SIGN_IN_STORE_ON_SUCCESSFUL_SUBMISSION = 'onSuccessfulSubmission'

const SIGN_IN_STORE_SHOW = 'show'
const SIGN_IN_STORE_CLOSE = 'close'
const SIGN_IN_STORE_TOGGLE = 'toggle'

const defaultValues = {
	[SIGN_IN_STORE_STATE_EMAIL]: '',
	[SIGN_IN_STORE_STATE_IS_OPEN]: false,
	[SIGN_IN_STORE_STATE_SIGNED_IN_CALLBACK]: () => {},
}

class SignInStore extends Container {
	constructor() {
		super()
		this[STATE] = defaultValues
		this[SET_STATE] = this[SET_STATE].bind(this)
	}

	[RESET_STATE] = () => {
		this.setState(defaultValues)
		return this
	};

	[SIGN_IN_STORE_SHOW] = (email, afterSubmitCallback = () => {}) => {
		this.setState({
			[SIGN_IN_STORE_STATE_EMAIL]: email,
			[SIGN_IN_STORE_STATE_IS_OPEN]: true,
			[SIGN_IN_STORE_STATE_SIGNED_IN_CALLBACK]: afterSubmitCallback,
		})
		return this
	};

	[SIGN_IN_STORE_CLOSE] = () => {
		this.setState({ [SIGN_IN_STORE_STATE_IS_OPEN]: false })
		return this
	};

	[SIGN_IN_STORE_TOGGLE] = () => {
		this.setState(state => {
			state[SIGN_IN_STORE_STATE_IS_OPEN] = !state[SIGN_IN_STORE_STATE_IS_OPEN]
			return state
		})
		return this
	};

	[SIGN_IN_STORE_ON_SUCCESSFUL_SUBMISSION] = () => {
		this[STATE][SIGN_IN_STORE_STATE_SIGNED_IN_CALLBACK]()
		this[SET_STATE]({ SIGN_IN_STORE_STATE_SIGNED_IN_CALLBACK: () => {} })
		return this
	}
}

export {
	SignInStore,
	SIGN_IN_STORE_STATE_EMAIL,
	SIGN_IN_STORE_STATE_IS_OPEN,
	SIGN_IN_STORE_STATE_SIGNED_IN_CALLBACK,
	SIGN_IN_STORE_SHOW,
	SIGN_IN_STORE_CLOSE,
	SIGN_IN_STORE_TOGGLE,
	SIGN_IN_STORE_ON_SUCCESSFUL_SUBMISSION,
	SET_STATE,
	RESET_STATE,
}
