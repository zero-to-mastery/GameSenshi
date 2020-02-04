import { Container } from 'unstated'
import { STATE, SET_STATE, RESET_STATE } from '2_state/constants'

const STORE_PROGRESS_STATE_VALUE = 'value'
const STORE_PROGRESS_STATE_COLOR = 'color'
const STORE_PROGRESS_STATE_IS_OPEN = 'isOpen'

const SHOW = 'show'
const CLOSE = 'close'

const DEFAULT_COLOR = 'primary'
const DEFAULT_VALUE = '0'

const defaultValues = () => ({
	[STORE_PROGRESS_STATE_VALUE]: DEFAULT_VALUE,
	[STORE_PROGRESS_STATE_IS_OPEN]: false,
	[STORE_PROGRESS_STATE_COLOR]: DEFAULT_COLOR,
})

class StoreProgress extends Container {
	constructor() {
		super()
		this[STATE] = defaultValues()
		this[SET_STATE] = this[SET_STATE].bind(this)
	}

	[RESET_STATE] = () => {
		this[SET_STATE](defaultValues())
		return this
	};

	[SHOW] = (value = DEFAULT_VALUE, color = DEFAULT_COLOR) => {
		this[SET_STATE]({
			[STORE_PROGRESS_STATE_IS_OPEN]: true,
			[STORE_PROGRESS_STATE_COLOR]: color,
			[STORE_PROGRESS_STATE_VALUE]: value,
		})
		return this
	};

	[CLOSE] = () => {
		this[SET_STATE](defaultValues)
		return this
	}
}

export {
	StoreProgress,
	STORE_PROGRESS_STATE_VALUE,
	STORE_PROGRESS_STATE_COLOR,
	STORE_PROGRESS_STATE_IS_OPEN,
	SHOW,
	CLOSE,
	SET_STATE,
	RESET_STATE,
}
