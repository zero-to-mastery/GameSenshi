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
	ALERT_STORE_STATE_BODY,
	ALERT_STORE_STATE_ICON,
	ALERT_STORE_STATE_IS_OPEN,
	ALERT_STORE_STATE_COLOR,
	storeAlertToggle,
} from 'state'

const storeAlertStateToPropsMap = {
	[ALERT_COMMON_STATE_BODY]: ALERT_STORE_STATE_BODY,
	[ALERT_COMMON_STATE_ICON]: ALERT_STORE_STATE_ICON,
	[ALERT_COMMON_STATE_IS_OPEN]: ALERT_STORE_STATE_IS_OPEN,
	[ALERT_COMMON_STATE_COLOR]: ALERT_STORE_STATE_COLOR,
}

const storeAlertMethodToPropsMap = {
	[ALERT_COMMON_TOGGLE]: storeAlertToggle,
}

const AlertCommonStoreAlert = StateContainer(
	AlertCommon,
	[storeAlert],
	[storeAlertStateToPropsMap],
	[storeAlertMethodToPropsMap]
)

export { AlertCommon, AlertCommonStoreAlert }
