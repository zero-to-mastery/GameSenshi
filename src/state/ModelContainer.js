import { Container } from 'unstated'

import {
	ALERT_HREF,
	ALERT_TEXT,
	ALERT_COLOR,
	ALERT_OPEN,
	ALERT_HREF_TEXT,
} from 'constantValues'

class AlertContainer extends Container {
	state = {
		[ALERT_HREF]: '',
		[ALERT_TEXT]: '',
		[ALERT_COLOR]: 'success',
		[ALERT_OPEN]: false,
		[ALERT_HREF_TEXT]: '',
	}
}

export default AlertContainer
