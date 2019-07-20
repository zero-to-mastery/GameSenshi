import { AlertContainer, alertStore } from 'state'
import {
	CommonAlert,
	COMMON_ALERT_BODY,
	COMMON_ALERT_ICON,
	COMMON_ALERT_OPEN,
	COMMON_ALERT_COLOR,
} from 'components/CommonAlert/CommonAlert'

const CommonAlertContainerAlert = AlertContainer(CommonAlert, alertStore, [
	COMMON_ALERT_BODY,
	COMMON_ALERT_ICON,
	COMMON_ALERT_OPEN,
	COMMON_ALERT_COLOR,
])

export { CommonAlertContainerAlert }
