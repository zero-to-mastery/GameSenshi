import {
	AlertStore,
	ALERT_STATE_BODY,
	ALERT_STATE_OPEN,
	ALERT_STATE_COLOR,
	ALERT_STATE_ICON,
	ALERT_SHOW,
	ALERT_TOGGLE,
	SET_STATE,
	RESET_STATE,
} from 'state/Alert/AlertStore'

const alertStore = new AlertStore()
const alertStoreShow = alertStore[ALERT_SHOW]
const alertStoreToggle = alertStore[ALERT_TOGGLE]
const alertStoreSetState = alertStore[SET_STATE]
const alertStoreResetState = alertStore[RESET_STATE]

// why no export state, because it lose reference very easily

export {
	alertStore,
	alertStoreShow,
	alertStoreToggle,
	alertStoreSetState,
	alertStoreResetState,
	ALERT_STATE_BODY,
	ALERT_STATE_OPEN,
	ALERT_STATE_COLOR,
	ALERT_STATE_ICON,
	ALERT_SHOW,
	ALERT_TOGGLE,
}
