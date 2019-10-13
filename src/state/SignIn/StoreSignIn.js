import { Container } from 'unstated'
import { STATE, SET_STATE, RESET_STATE } from 'state/constants'

const STORE_SIGN_IN_STATE_EMAIL = 'email'
const STORE_SIGN_IN_STATE_IS_OPEN = 'isOpen'
const STORE_SIGN_IN_STATE_SUBMITTED_CALLBACK = 'callback'

const ON_SUCCESSFUL_SUBMISSION = 'onSuccessfulSubmission'
const SHOW = 'show'
const CLOSE = 'close'
const TOGGLE = 'toggle'

const defaultValues = () => ({
	[STORE_SIGN_IN_STATE_EMAIL]: '',
	[STORE_SIGN_IN_STATE_IS_OPEN]: false,
	[STORE_SIGN_IN_STATE_SUBMITTED_CALLBACK]: () => {},
})

class StoreSignIn extends Container {
	constructor() {
		super()
		this[STATE] = defaultValues()
		this[SET_STATE] = this[SET_STATE].bind(this)
	}

	[RESET_STATE] = () => {
		this.setState(defaultValues())
		return this
	};

	[SHOW] = (email, afterSubmitCallback = () => {}) => {
		this.setState({
			[STORE_SIGN_IN_STATE_EMAIL]: email,
			[STORE_SIGN_IN_STATE_IS_OPEN]: true,
			[STORE_SIGN_IN_STATE_SUBMITTED_CALLBACK]: afterSubmitCallback,
		})
		return this
	};

	[CLOSE] = () => {
		this.setState({ [STORE_SIGN_IN_STATE_IS_OPEN]: false })
		return this
	};

	[TOGGLE] = () => {
		this.setState(state => {
			state[STORE_SIGN_IN_STATE_IS_OPEN] = !state[STORE_SIGN_IN_STATE_IS_OPEN]
			return state
		})
		return this
	};

	[ON_SUCCESSFUL_SUBMISSION] = () => {
		this[STATE][STORE_SIGN_IN_STATE_SUBMITTED_CALLBACK]()
		this[RESET_STATE]()
		return this
	}
}

export {
	StoreSignIn,
	STORE_SIGN_IN_STATE_EMAIL,
	STORE_SIGN_IN_STATE_IS_OPEN,
	STORE_SIGN_IN_STATE_SUBMITTED_CALLBACK,
	SHOW,
	CLOSE,
	TOGGLE,
	ON_SUCCESSFUL_SUBMISSION,
	SET_STATE,
	RESET_STATE,
}
