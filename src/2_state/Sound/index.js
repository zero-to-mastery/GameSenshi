import {
	StoreSound,
	SET_STATE,
	RESET_STATE,
	SET_UUID,
	STORE_SOUND_STATE_UUID,
	STATE,
} from './StoreSound'

const storeSound = new StoreSound()
const storeSoundSetUuid = storeSound[SET_UUID]
const storeSoundSetState = storeSound[SET_STATE]
const storeSoundResetState = storeSound[RESET_STATE]
const storeSoundGet = state => storeSound[STATE][state]

export {
	storeSound,
	storeSoundSetState,
	storeSoundResetState,
	storeSoundSetUuid,
	STORE_SOUND_STATE_UUID,
	storeSoundGet,
}
