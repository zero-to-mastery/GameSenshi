import {
	StoreRoute,
	STORE_ROUTE_STATE_IS_SIGNED_IN,
	STORE_ROUTE_ON_AUTH_STATE_CHANGED,
	SET_STATE,
	RESET_STATE,
} from 'state/Route/StoreRoute'

const storeRoute = new StoreRoute()
const storeRouteOnAuthStateChanged =
	storeRoute[STORE_ROUTE_ON_AUTH_STATE_CHANGED]
const storeRouteSetState = storeRoute[SET_STATE]
const storeRouteResetState = storeRoute[RESET_STATE]

export {
	storeRoute,
	storeRouteOnAuthStateChanged,
	storeRouteSetState,
	storeRouteResetState,
	STORE_ROUTE_STATE_IS_SIGNED_IN,
}