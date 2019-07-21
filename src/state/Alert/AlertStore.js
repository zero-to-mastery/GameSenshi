import { Container } from 'unstated'
import { STATE, SET_STATE, RESET_STATE } from 'constantValues'

const ALERT_STATE_BODY = 'body'
const ALERT_STATE_OPEN = 'open'
const ALERT_STATE_COLOR = 'color'
const ALERT_STATE_ICON = 'icon'

const ALERT_TOGGLE = 'toggle'
const ALERT_SHOW = 'show'

const DEFAULT_ICON = 'tim-icons icon-bell-55'
const DEFAULT_COLOR = 'success'

const defaultValues = {
	[ALERT_STATE_BODY]: '',
	[ALERT_STATE_OPEN]: false,
	[ALERT_STATE_COLOR]: DEFAULT_COLOR,
	[ALERT_STATE_ICON]: DEFAULT_ICON,
}

class AlertStore extends Container {
	constructor() {
		super()
		this[STATE] = defaultValues
		this[SET_STATE] = this[SET_STATE].bind(this)
	}

	[RESET_STATE] = () => {
		this.setState(defaultValues)
		return this
	};

	[ALERT_SHOW] = (body = '', color = DEFAULT_COLOR, icon = DEFAULT_ICON) => {
		this.setState({
			[ALERT_STATE_BODY]: body,
			[ALERT_STATE_OPEN]: true,
			[ALERT_STATE_COLOR]: color,
			[ALERT_STATE_ICON]: icon,
		})
		return this
	};

	[ALERT_TOGGLE] = () => {
		this.setState(state => {
			state[ALERT_STATE_OPEN] = !state[ALERT_STATE_OPEN]
			return this
		})
	}
}

export {
	AlertStore,
	ALERT_STATE_BODY,
	ALERT_STATE_OPEN,
	ALERT_STATE_COLOR,
	ALERT_STATE_ICON,
	ALERT_SHOW,
	ALERT_TOGGLE,
	SET_STATE,
	RESET_STATE,
}
