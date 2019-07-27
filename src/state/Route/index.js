import {
	StoreRoute,
	STORE_ROUTE_STATE_IS_SIGNED_IN,
	STORE_ROUTE_SET_SIGN_IN,
	SET_STATE,
	RESET_STATE,
} from 'state/Route/StoreRoute'

const storeRoute = new StoreRoute()
const storeRouteSetSignIn = storeRoute[STORE_ROUTE_SET_SIGN_IN]
const storeRouteSetState = storeRoute[SET_STATE]
const storeRouteResetState = storeRoute[RESET_STATE]

export {
	storeRoute,
	storeRouteSetSignIn,
	storeRouteSetState,
	storeRouteResetState,
	STORE_ROUTE_STATE_IS_SIGNED_IN,
}
