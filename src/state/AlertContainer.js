import { Container } from 'unstated'

import { ALERT_BODY, ALERT_OPEN, ALERT_COLOR } from 'constantValues'

const defaultValues = {
	[ALERT_BODY]: '',
	[ALERT_OPEN]: false,
	[ALERT_COLOR]: 'success',
}

class AlertContainer extends Container {
	state = defaultValues

	resetState = () => {
		return this.setState(defaultValues)
	}
}

export default AlertContainer
