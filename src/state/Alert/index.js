import {
	StoreAlert,
	STORE_ALERT_STATE_BODY,
	STORE_ALERT_STATE_IS_OPEN,
	STORE_ALERT_STATE_COLOR,
	STORE_ALERT_STATE_ICON,
	STORE_ALERT_SHOW,
	STORE_ALERT_TOGGLE,
	SET_STATE,
	RESET_STATE,
} from 'state/Alert/StoreAlert'

const storeAlert = new StoreAlert()
const storeAlertShow = storeAlert[STORE_ALERT_SHOW]
const storeAlertToggle = storeAlert[STORE_ALERT_TOGGLE]
const storeAlertSetState = storeAlert[SET_STATE]
const storeAlertResetState = storeAlert[RESET_STATE]

// why no export state? Because it lose reference easily
// no need to output method constant as they are now variable name
export {
	storeAlert,
	storeAlertShow,
	storeAlertToggle,
	storeAlertSetState,
	storeAlertResetState,
	STORE_ALERT_STATE_BODY,
	STORE_ALERT_STATE_IS_OPEN,
	STORE_ALERT_STATE_COLOR,
	STORE_ALERT_STATE_ICON,
}
