import {
	Alert,
	ALERT_STATE_BODY,
	ALERT_STATE_ICON,
	ALERT_STATE_IS_OPEN,
	ALERT_STATE_COLOR,
	ALERT_TOGGLE,
} from './Alert'

import {
	StateContainer,
	storeAlert,
	STORE_ALERT_STATE_BODY,
	STORE_ALERT_STATE_ICON,
	STORE_ALERT_STATE_IS_OPEN,
	STORE_ALERT_STATE_COLOR,
	storeAlertToggle,
} from '2_state'

const mapStoreAlertStateToProp = {
	[ALERT_STATE_BODY]: STORE_ALERT_STATE_BODY,
	[ALERT_STATE_ICON]: STORE_ALERT_STATE_ICON,
	[ALERT_STATE_IS_OPEN]: STORE_ALERT_STATE_IS_OPEN,
	[ALERT_STATE_COLOR]: STORE_ALERT_STATE_COLOR,
}

const mapStoreAlertMethodToProp = {
	[ALERT_TOGGLE]: storeAlertToggle,
}

const AlertStoreAlert = StateContainer(
	Alert,
	[storeAlert],
	[mapStoreAlertStateToProp],
	[mapStoreAlertMethodToProp]
)

export { Alert, AlertStoreAlert }
