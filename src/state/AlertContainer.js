import { Container } from 'unstated'

import { ALERT_BODY, ALERT_OPEN, ALERT_COLOR, ALERT_ICON } from 'constantValues'

const DEFAULT_ICON = 'tim-icons icon-bell-55'
const DEFAULT_COLOR = 'success'

const defaultValues = {
	[ALERT_BODY]: '',
	[ALERT_OPEN]: false,
	[ALERT_COLOR]: DEFAULT_COLOR,
	[ALERT_ICON]: DEFAULT_ICON,
}

class AlertContainer extends Container {
	state = defaultValues

	resetState = () => {
		this.setState(defaultValues)
		return this
	}

	show = (body = '', color = DEFAULT_COLOR, icon = DEFAULT_ICON) => {
		this.setState({
			[ALERT_BODY]: body,
			[ALERT_OPEN]: true,
			[ALERT_COLOR]: color,
			[ALERT_ICON]: icon,
		})
		return this
	}
}

export default AlertContainer
