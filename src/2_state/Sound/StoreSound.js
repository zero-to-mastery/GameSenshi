import { Container } from 'unstated'
import { STATE, SET_STATE, RESET_STATE } from '2_state/constants'

const STORE_SOUND_STATE_UUID = 'uuid'
const SET_UUID = 'setUuid'

const defaultValues = () => ({
	[STORE_SOUND_STATE_UUID]: null,
})

// the prupose of this store is to automatically stop other sound playing when the latest sound is playing
class StoreSound extends Container {
	constructor() {
		super()
		this[STATE] = defaultValues()
		this[SET_STATE] = this[SET_STATE].bind(this)
	}

	[RESET_STATE] = () => {
		this[SET_STATE](defaultValues())
		return this
	};

	[SET_UUID] = bool => {
		this[SET_STATE]({ [STORE_SOUND_STATE_UUID]: bool })
		return this
	}
}

export {
	StoreSound,
	STATE,
	SET_STATE,
	RESET_STATE,
	SET_UUID,
	STORE_SOUND_STATE_UUID,
}
