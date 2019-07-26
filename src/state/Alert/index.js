import {
	StoreAlert,
	ALERT_STORE_STATE_BODY,
	ALERT_STORE_STATE_IS_OPEN,
	ALERT_STORE_STATE_COLOR,
	ALERT_STORE_STATE_ICON,
	ALERT_STORE_SHOW,
	ALERT_STORE_TOGGLE,
	SET_STATE,
	RESET_STATE,
} from 'state/Alert/StoreAlert'

const storeAlert = new StoreAlert()
const storeAlertShow = storeAlert[ALERT_STORE_SHOW]
const storeAlertToggle = storeAlert[ALERT_STORE_TOGGLE]
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
	ALERT_STORE_STATE_BODY,
	ALERT_STORE_STATE_IS_OPEN,
	ALERT_STORE_STATE_COLOR,
	ALERT_STORE_STATE_ICON,
}
