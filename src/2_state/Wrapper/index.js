import {
	StoreWrapper,
	SET_STATE,
	RESET_STATE,
	SET_OFFSET_TOP,
	STORE_WRAPPER_STATE_OFFSET_TOP,
	STATE,
} from './StoreWrapper'

const storeWrapper = new StoreWrapper()
const storeWrapperSetOffsetTop = storeWrapper[SET_OFFSET_TOP]
const storeWrapperSetState = storeWrapper[SET_STATE]
const storeWrapperResetState = storeWrapper[RESET_STATE]
const storeWrapperGet = state => storeWrapper[STATE][state]

export {
	storeWrapper,
	storeWrapperSetState,
	storeWrapperResetState,
	storeWrapperSetOffsetTop,
	STORE_WRAPPER_STATE_OFFSET_TOP,
	storeWrapperGet,
}
