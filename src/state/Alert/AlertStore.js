import { Container } from 'unstated'
import { RESET_STATE } from 'constantValues'

// use unique name so that container component so it doesn't conflict with callback component name
const ALERT = 'alert' // why this small letter? because props name start with small letter
const ALERT_STATE_BODY = ALERT + 'Body'
const ALERT_STATE_OPEN = ALERT + 'Open'
const ALERT_STATE_COLOR = ALERT + 'Color'
const ALERT_STATE_ICON = ALERT + 'Icon'
const ALERT_TOGGLE = ALERT + 'Toggle'
const ALERT_SHOW = ALERT + 'Show'
const DEFAULT_ICON = 'tim-icons icon-bell-55'
const DEFAULT_COLOR = 'success'

const defaultValues = {
	[ALERT_STATE_BODY]: '',
	[ALERT_STATE_OPEN]: false,
	[ALERT_STATE_COLOR]: DEFAULT_COLOR,
	[ALERT_STATE_ICON]: DEFAULT_ICON,
}

class AlertStore extends Container {
	state = defaultValues

	resetState = () => {
		this.setState(defaultValues)
		return this
	}
}

//cannot use arrow function here because it cant be rebind with "new"
AlertStore.prototype[RESET_STATE] = function() {
	this.setState(defaultValues)
	return this
}

AlertStore.prototype[ALERT_SHOW] = function(
	body = '',
	color = DEFAULT_COLOR,
	icon = DEFAULT_ICON
) {
	this.setState({
		[ALERT_STATE_BODY]: body,
		[ALERT_STATE_OPEN]: true,
		[ALERT_STATE_COLOR]: color,
		[ALERT_STATE_ICON]: icon,
	})
	return this
}

AlertStore.prototype[ALERT_TOGGLE] = function() {
	this.setState(state => {
		state[ALERT_STATE_OPEN] = !state[ALERT_STATE_OPEN]
		return this
	})
}

export {
	AlertStore,
	ALERT_STATE_BODY,
	ALERT_STATE_OPEN,
	ALERT_STATE_COLOR,
	ALERT_STATE_ICON,
	ALERT_SHOW,
	ALERT_TOGGLE,
}
