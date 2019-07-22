import {
	AlertCommon,
	ALERT_COMMON_STATE_BODY,
	ALERT_COMMON_STATE_ICON,
	ALERT_COMMON_STATE_OPEN,
	ALERT_COMMON_STATE_COLOR,
	ALERT_COMMON_TOGGLE,
} from 'componentsAtom/AlertCommon/AlertCommon'

import {
	StateContainer,
	alertStore,
	ALERT_STORE_STATE_BODY,
	ALERT_STORE_STATE_ICON,
	ALERT_STORE_STATE_OPEN,
	ALERT_STORE_STATE_COLOR,
	ALERT_STORE_TOGGLE,
} from 'state'

const alertStoreStateToPropsMap = {
	[ALERT_COMMON_STATE_BODY]: ALERT_STORE_STATE_BODY,
	[ALERT_COMMON_STATE_ICON]: ALERT_STORE_STATE_ICON,
	[ALERT_COMMON_STATE_OPEN]: ALERT_STORE_STATE_OPEN,
	[ALERT_COMMON_STATE_COLOR]: ALERT_STORE_STATE_COLOR,
}

const alertStoreMethodToPropsMap = {
	[ALERT_COMMON_TOGGLE]: ALERT_STORE_TOGGLE,
}

const AlertCommonStoreAlert = StateContainer(
	AlertCommon,
	alertStore,
	alertStoreStateToPropsMap,
	alertStoreMethodToPropsMap
)

export { AlertCommon, AlertCommonStoreAlert }
