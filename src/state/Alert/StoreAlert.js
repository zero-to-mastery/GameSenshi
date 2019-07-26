import { Container } from 'unstated'
import { STATE, SET_STATE, RESET_STATE } from 'state/constants'

const STORE_ALERT_STATE_BODY = 'body'
const STORE_ALERT_STATE_IS_OPEN = 'isOpen'
const STORE_ALERT_STATE_COLOR = 'color'
const STORE_ALERT_STATE_ICON = 'icon'

const STORE_ALERT_TOGGLE = 'toggle'
const STORE_ALERT_SHOW = 'show'

const DEFAULT_ICON = 'tim-icons icon-bell-55'
const DEFAULT_COLOR = 'success'

const defaultValues = {
	[STORE_ALERT_STATE_BODY]: '',
	[STORE_ALERT_STATE_IS_OPEN]: false,
	[STORE_ALERT_STATE_COLOR]: DEFAULT_COLOR,
	[STORE_ALERT_STATE_ICON]: DEFAULT_ICON,
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

	[STORE_ALERT_SHOW] = (
		body = '',
		color = DEFAULT_COLOR,
		icon = DEFAULT_ICON
	) => {
		this.setState({
			[STORE_ALERT_STATE_BODY]: body,
			[STORE_ALERT_STATE_IS_OPEN]: true,
			[STORE_ALERT_STATE_COLOR]: color,
			[STORE_ALERT_STATE_ICON]: icon,
		})
		return this
	};

	[STORE_ALERT_TOGGLE] = () => {
		this.setState(state => {
			state[STORE_ALERT_STATE_IS_OPEN] = !state[STORE_ALERT_STATE_IS_OPEN]
			return this
		})
	}
}

export {
	StoreAlert,
	STORE_ALERT_STATE_BODY,
	STORE_ALERT_STATE_IS_OPEN,
	STORE_ALERT_STATE_COLOR,
	STORE_ALERT_STATE_ICON,
	STORE_ALERT_SHOW,
	STORE_ALERT_TOGGLE,
	SET_STATE,
	RESET_STATE,
}
