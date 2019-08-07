import { Container } from 'unstated'
import { STATE, SET_STATE, RESET_STATE } from 'state/constants'

const ROUTE = 'route'
const STORE_ROUTE_STATE_IS_SIGNED_IN = 'isSignedIn'
const STORE_ROUTE_ON_AUTH_STATE_CHANGED = 'onAuthStateChanged'
const STORE_ROUTE_INITIALIZE = 'initialize'

const defaultValues = {
	[STORE_ROUTE_STATE_IS_SIGNED_IN]: false,
}

class StoreRoute extends Container {
	constructor() {
		super()
		this[STATE] = defaultValues
		this[SET_STATE] = this[SET_STATE].bind(this)
	}
	[STORE_ROUTE_INITIALIZE] = (onAutoSignedInFailed = () => {}) => {
		const route = JSON.parse(localStorage.getItem(ROUTE))
		// purposely set state in sync so that it show correct navBar on first rendering
		// firebase need like 2 seconds to finish sign in, too long
		this[STATE][STORE_ROUTE_STATE_IS_SIGNED_IN] = !!route

		return this
	};

	[RESET_STATE] = () => {
		this[SET_STATE](defaultValues)
		return this
	};

	[STORE_ROUTE_ON_AUTH_STATE_CHANGED] = (value = false) => {
		this[SET_STATE]({ [STORE_ROUTE_STATE_IS_SIGNED_IN]: value })
		if (value) {
			localStorage.setItem(ROUTE, 'true')
		} else {
			localStorage.removeItem(ROUTE)
		}
		return this
	}
}

export {
	StoreRoute,
	STORE_ROUTE_STATE_IS_SIGNED_IN,
	STORE_ROUTE_ON_AUTH_STATE_CHANGED,
	STORE_ROUTE_INITIALIZE,
	STATE,
	SET_STATE,
	RESET_STATE,
}
