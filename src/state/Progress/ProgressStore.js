import { Container } from 'unstated'
import { STATE, SET_STATE, RESET_STATE } from 'constantValues'

const PROGRESS_STORE_STATE_VALUE = 'value'
const PROGRESS_STORE_STATE_COLOR = 'color'
const PROGRESS_STORE_STATE_IS_OPEN = 'isOpen'

const PROGRESS_STORE_SHOW = 'show'
const PROGRESS_STORE_CLOSE = 'close'

const DEFAULT_COLOR = 'primary'
const DEFAULT_VALUE = '0'

const defaultValues = {
	[PROGRESS_STORE_STATE_VALUE]: DEFAULT_VALUE,
	[PROGRESS_STORE_STATE_IS_OPEN]: false,
	[PROGRESS_STORE_STATE_COLOR]: DEFAULT_COLOR,
}

class ProgressStore extends Container {
	constructor() {
		super()
		this[STATE] = defaultValues
		this[SET_STATE] = this[SET_STATE].bind(this)
	}

	[RESET_STATE] = () => {
		this.setState(defaultValues)
		return this
	};

	[PROGRESS_STORE_SHOW] = (value = DEFAULT_VALUE, color = DEFAULT_COLOR) => {
		this.setState({
			[PROGRESS_STORE_STATE_IS_OPEN]: true,
			[PROGRESS_STORE_STATE_COLOR]: color,
			[PROGRESS_STORE_STATE_VALUE]: value,
		})
		return this
	};

	[PROGRESS_STORE_CLOSE] = () => {
		this.setState(defaultValues)
		return this
	}
}

export {
	ProgressStore,
	PROGRESS_STORE_STATE_VALUE,
	PROGRESS_STORE_STATE_COLOR,
	PROGRESS_STORE_STATE_IS_OPEN,
	PROGRESS_STORE_SHOW,
	PROGRESS_STORE_CLOSE,
	STATE,
	SET_STATE,
	RESET_STATE,
}
