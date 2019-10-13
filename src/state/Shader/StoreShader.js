import { Container } from 'unstated'
import { STATE, SET_STATE, RESET_STATE } from 'state/constants'

const STORE_SHADER_STATE_IS_OPEN = 'isOpen'

const SHOW = 'show'
const CLOSE = 'close'

const defaultValues = () => ({
	[STORE_SHADER_STATE_IS_OPEN]: false,
})

class StoreShader extends Container {
	constructor() {
		super()
		this[STATE] = defaultValues()
		this[SET_STATE] = this[SET_STATE].bind(this)
	}

	[RESET_STATE] = () => {
		this.setState(defaultValues())
		return this
	};

	[SHOW] = () => {
		this.setState({
			[STORE_SHADER_STATE_IS_OPEN]: true,
		})
		return this
	};

	[CLOSE] = () => {
		this.setState(defaultValues)
		return this
	}
}

export {
	StoreShader,
	STORE_SHADER_STATE_IS_OPEN,
	SHOW,
	CLOSE,
	STATE,
	SET_STATE,
	RESET_STATE,
}
