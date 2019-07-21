import { AlertContainer, alertStore } from 'state'
import {
	CommonAlert,
	COMMON_ALERT_BODY,
	COMMON_ALERT_ICON,
	COMMON_ALERT_OPEN,
	COMMON_ALERT_COLOR,
} from 'components/CommonAlert/CommonAlert'

// check container component props name before you map your props in it
// skip unnecessary by passing random string, for example
// [	COMMON_ALERT_BODY, "unusedProps1" ,COMMON_ALERT_ICON,]
const CommonAlertContainerAlert = AlertContainer(CommonAlert, alertStore, [
	COMMON_ALERT_BODY,
	COMMON_ALERT_ICON,
	COMMON_ALERT_OPEN,
	COMMON_ALERT_COLOR,
])

export { CommonAlertContainerAlert }
