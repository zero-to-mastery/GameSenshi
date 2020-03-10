import {
	StoreAlertSide,
	STORE_ALERT_SIDE_STATE_BODY,
	STORE_ALERT_SIDE_STATE_IS_OPEN,
	STORE_ALERT_SIDE_STATE_STATUS,
	SHOW,
	TOGGLE,
	SET_STATE,
	RESET_STATE,
	STATE,
	SIMPLE_ERROR,
} from './StoreAlertSide'

const storeAlertSide = new StoreAlertSide()
const storeAlertSideShow = storeAlertSide[SHOW]
const storeAlertSideToggle = storeAlertSide[TOGGLE]
const storeAlertSideSetState = storeAlertSide[SET_STATE]
const storeAlertSideResetState = storeAlertSide[RESET_STATE]
const storeAlertSideSimpleError = storeAlertSide[SIMPLE_ERROR]
const storeAlertSideGet = state => storeAlertSide[STATE][state]

export {
	storeAlertSide,
	storeAlertSideShow,
	storeAlertSideToggle,
	storeAlertSideSetState,
	storeAlertSideResetState,
	storeAlertSideSimpleError,
	STORE_ALERT_SIDE_STATE_BODY,
	STORE_ALERT_SIDE_STATE_IS_OPEN,
	STORE_ALERT_SIDE_STATE_STATUS,
	storeAlertSideGet,
}
