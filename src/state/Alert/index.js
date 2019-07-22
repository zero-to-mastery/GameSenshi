import {
	AlertStore,
	ALERT_STORE_STATE_BODY,
	ALERT_STORE_STATE_OPEN,
	ALERT_STORE_STATE_COLOR,
	ALERT_STORE_STATE_ICON,
	ALERT_STORE_SHOW,
	ALERT_STORE_TOGGLE,
	SET_STATE,
	RESET_STATE,
} from 'state/Alert/AlertStore'

const alertStore = new AlertStore()
const alertStoreShow = alertStore[ALERT_STORE_SHOW]
const alertStoreToggle = alertStore[ALERT_STORE_TOGGLE]
const alertStoreSetState = alertStore[SET_STATE]
const alertStoreResetState = alertStore[RESET_STATE]

// why no export state? Because it lose reference easily

export {
	alertStore,
	alertStoreShow,
	alertStoreToggle,
	alertStoreSetState,
	alertStoreResetState,
	ALERT_STORE_STATE_BODY,
	ALERT_STORE_STATE_OPEN,
	ALERT_STORE_STATE_COLOR,
	ALERT_STORE_STATE_ICON,
	ALERT_STORE_SHOW,
	ALERT_STORE_TOGGLE,
}
