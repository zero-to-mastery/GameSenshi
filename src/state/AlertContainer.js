import { Container } from 'unstated'

import { ALERT_BODY, ALERT_OPEN, ALERT_COLOR } from 'constantValues'

class AlertContainer extends Container {
	state = {
		[ALERT_BODY]: '',
		[ALERT_OPEN]: false,
		[ALERT_COLOR]: 'success',
	}
}

export default AlertContainer
