import {
	AlertCommon,
	ALERT_COMMON_STATE_BODY,
	ALERT_COMMON_STATE_ICON,
	ALERT_COMMON_STATE_IS_OPEN,
	ALERT_COMMON_STATE_COLOR,
	ALERT_COMMON_TOGGLE,
} from 'componentAtoms/AlertCommon/AlertCommon'

import {
	StateContainer,
	storeAlert,
	STORE_ALERT_STATE_BODY,
	STORE_ALERT_STATE_ICON,
	STORE_ALERT_STATE_IS_OPEN,
	STORE_ALERT_STATE_COLOR,
	storeAlertToggle,
} from 'state'

const mapStoreAlertStateToProp = {
	[ALERT_COMMON_STATE_BODY]: STORE_ALERT_STATE_BODY,
	[ALERT_COMMON_STATE_ICON]: STORE_ALERT_STATE_ICON,
	[ALERT_COMMON_STATE_IS_OPEN]: STORE_ALERT_STATE_IS_OPEN,
	[ALERT_COMMON_STATE_COLOR]: STORE_ALERT_STATE_COLOR,
}

const mapStoreAlertMethodToProp = {
	[ALERT_COMMON_TOGGLE]: storeAlertToggle,
}

const AlertCommonStoreAlert = StateContainer(
	AlertCommon,
	[storeAlert],
	[mapStoreAlertStateToProp],
	[mapStoreAlertMethodToProp]
)

export { AlertCommon, AlertCommonStoreAlert }
