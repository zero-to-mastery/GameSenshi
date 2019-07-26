import { Container } from 'unstated'
import { STATE, SET_STATE, RESET_STATE } from 'state/constants'

const ALERT_STORE_STATE_BODY = 'body'
const ALERT_STORE_STATE_IS_OPEN = 'isOpen'
const ALERT_STORE_STATE_COLOR = 'color'
const ALERT_STORE_STATE_ICON = 'icon'

const ALERT_STORE_TOGGLE = 'toggle'
const ALERT_STORE_SHOW = 'show'

const DEFAULT_ICON = 'tim-icons icon-bell-55'
const DEFAULT_COLOR = 'success'

const defaultValues = {
	[ALERT_STORE_STATE_BODY]: '',
	[ALERT_STORE_STATE_IS_OPEN]: false,
	[ALERT_STORE_STATE_COLOR]: DEFAULT_COLOR,
	[ALERT_STORE_STATE_ICON]: DEFAULT_ICON,
}

class StoreAlert extends Container {
	constructor() {
		super()
		this[STATE] = defaultValues
		this[SET_STATE] = this[SET_STATE].bind(this)
	}

	[RESET_STATE] = () => {
		this.setState(defaultValues)
		return this
	};

	[ALERT_STORE_SHOW] = (
		body = '',
		color = DEFAULT_COLOR,
		icon = DEFAULT_ICON
	) => {
		this.setState({
			[ALERT_STORE_STATE_BODY]: body,
			[ALERT_STORE_STATE_IS_OPEN]: true,
			[ALERT_STORE_STATE_COLOR]: color,
			[ALERT_STORE_STATE_ICON]: icon,
		})
		return this
	};

	[ALERT_STORE_TOGGLE] = () => {
		this.setState(state => {
			state[ALERT_STORE_STATE_IS_OPEN] = !state[ALERT_STORE_STATE_IS_OPEN]
			return this
		})
	}
}

export {
	StoreAlert,
	ALERT_STORE_STATE_BODY,
	ALERT_STORE_STATE_IS_OPEN,
	ALERT_STORE_STATE_COLOR,
	ALERT_STORE_STATE_ICON,
	ALERT_STORE_SHOW,
	ALERT_STORE_TOGGLE,
	SET_STATE,
	RESET_STATE,
}
