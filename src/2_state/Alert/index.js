import {
	StoreAlert,
	STORE_ALERT_STATE_BODY,
	STORE_ALERT_STATE_IS_OPEN,
	STORE_ALERT_STATE_STATUS,
	SHOW,
	TOGGLE,
	SET_STATE,
	RESET_STATE,
	STATE,
	SIMPLE_ERROR,
} from './StoreAlert'

const storeAlert = new StoreAlert()
const storeAlertShow = storeAlert[SHOW]
const storeAlertToggle = storeAlert[TOGGLE]
const storeAlertSetState = storeAlert[SET_STATE]
const storeAlertResetState = storeAlert[RESET_STATE]
const storeAlertSimpleError = storeAlert[SIMPLE_ERROR]
const storeAlertGet = state => storeAlert[STATE][state]

// why no export state? Because it lose reference
// no need to output method constant as they are now variable name
export {
	storeAlert,
	storeAlertShow,
	storeAlertToggle,
	storeAlertSetState,
	storeAlertResetState,
	storeAlertSimpleError,
	STORE_ALERT_STATE_BODY,
	STORE_ALERT_STATE_IS_OPEN,
	STORE_ALERT_STATE_STATUS,
	storeAlertGet,
}
