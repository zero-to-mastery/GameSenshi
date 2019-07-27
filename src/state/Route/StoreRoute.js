import { Container } from 'unstated'
import { STATE, SET_STATE, RESET_STATE } from 'state/constants'

const STORE_ROUTE_STATE_IS_SIGNED_IN = 'isSignedIn'
const STORE_ROUTE_SET_IS_SIGNED_IN = 'setIsSignedIn'

const defaultValues = {
	[STORE_ROUTE_STATE_IS_SIGNED_IN]: false,
}

class StoreRoute extends Container {
	constructor() {
		super()
		this[STATE] = defaultValues
		this[SET_STATE] = this[SET_STATE].bind(this)
	}

	[RESET_STATE] = () => {
		this.setState(defaultValues)
		return this
	};

	[STORE_ROUTE_SET_IS_SIGNED_IN] = (value = false) => {
		this.setState({ [STORE_ROUTE_STATE_IS_SIGNED_IN]: value })
		return this
	}
}

export {
	StoreRoute,
	STORE_ROUTE_STATE_IS_SIGNED_IN,
	STORE_ROUTE_SET_IS_SIGNED_IN,
	STATE,
	SET_STATE,
	RESET_STATE,
}
