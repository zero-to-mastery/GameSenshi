import {
	StoreAlertSide,
	STORE_ALERT_SIDE_STATE_BODY,
	STORE_ALERT_SIDE_STATE_IS_OPEN,
	STORE_ALERT_SIDE_STATE_STATUS,
	SHOW,
	TOGGLE,
	SET_STATE,
	RESET_STATE,
} from './StoreAlertSide'

const storeAlertSide = new StoreAlertSide()
const storeAlertSideShow = storeAlertSide[SHOW]
const storeAlertSideToggle = storeAlertSide[TOGGLE]
const storeAlertSideSetState = storeAlertSide[SET_STATE]
const storeAlertSideResetState = storeAlertSide[RESET_STATE]

export {
	storeAlertSide,
	storeAlertSideShow,
	storeAlertSideToggle,
	storeAlertSideSetState,
	storeAlertSideResetState,
	STORE_ALERT_SIDE_STATE_BODY,
	STORE_ALERT_SIDE_STATE_IS_OPEN,
	STORE_ALERT_SIDE_STATE_STATUS,
}
