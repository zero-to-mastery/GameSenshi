import {
	CommonAlert,
	COMMON_ALERT_BODY,
	COMMON_ALERT_ICON,
	COMMON_ALERT_OPEN,
	COMMON_ALERT_COLOR,
} from 'components/CommonAlert/CommonAlert'

import {
	StateContainer,
	alertStore,
	ALERT_STATE_BODY,
	ALERT_STATE_ICON,
	ALERT_STATE_OPEN,
	ALERT_STATE_COLOR,
} from 'state'

const alertStoreStateToPropsMap = {
	[COMMON_ALERT_BODY]: ALERT_STATE_BODY,
	[COMMON_ALERT_ICON]: ALERT_STATE_ICON,
	[COMMON_ALERT_OPEN]: ALERT_STATE_OPEN,
	[COMMON_ALERT_COLOR]: ALERT_STATE_COLOR,
}

const CommonAlertStoreAlert = StateContainer(
	CommonAlert,
	alertStore,
	alertStoreStateToPropsMap
)

export { CommonAlertStoreAlert }
