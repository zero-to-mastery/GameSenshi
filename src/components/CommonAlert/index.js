import {
	CommonAlert,
	COMMON_ALERT_STATE_BODY,
	COMMON_ALERT_STATE_ICON,
	COMMON_ALERT_STATE_OPEN,
	COMMON_ALERT_STATE_COLOR,
	COMMON_ALERT_TOGGLE,
} from 'components/CommonAlert/CommonAlert'

import {
	StateContainer,
	alertStore,
	ALERT_STATE_BODY,
	ALERT_STATE_ICON,
	ALERT_STATE_OPEN,
	ALERT_STATE_COLOR,
	ALERT_TOGGLE,
} from 'state'

const alertStoreStateToPropsMap = {
	[COMMON_ALERT_STATE_BODY]: ALERT_STATE_BODY,
	[COMMON_ALERT_STATE_ICON]: ALERT_STATE_ICON,
	[COMMON_ALERT_STATE_OPEN]: ALERT_STATE_OPEN,
	[COMMON_ALERT_STATE_COLOR]: ALERT_STATE_COLOR,
}

const alertStoreMethodToPropsMap = {
	[COMMON_ALERT_TOGGLE]: ALERT_TOGGLE,
}

const CommonAlertStoreAlert = StateContainer(
	CommonAlert,
	alertStore,
	alertStoreStateToPropsMap,
	alertStoreMethodToPropsMap
)

export { CommonAlert, CommonAlertStoreAlert }
