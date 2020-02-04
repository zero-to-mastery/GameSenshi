import { Container } from 'unstated'
import { STATE, SET_STATE, RESET_STATE } from '2_state/constants'

const STORE_WRAPPER_STATE_OFFSET_TOP = 'offsetTop'
const SET_OFFSET_TOP = 'setOffsetTop'

const defaultValues = () => ({
	[STORE_WRAPPER_STATE_OFFSET_TOP]: 80,
})

class StoreWrapper extends Container {
	constructor() {
		super()
		this[STATE] = defaultValues()
		this[SET_STATE] = this[SET_STATE].bind(this)
	}

	[RESET_STATE] = () => {
		this[SET_STATE](defaultValues())
		return this
	};

	[SET_OFFSET_TOP] = height => {
		this[SET_STATE]({ [STORE_WRAPPER_STATE_OFFSET_TOP]: height })
		return this
	}
}

export {
	StoreWrapper,
	STATE,
	SET_STATE,
	RESET_STATE,
	SET_OFFSET_TOP,
	STORE_WRAPPER_STATE_OFFSET_TOP,
}
