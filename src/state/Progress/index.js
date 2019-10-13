import {
	StoreProgress,
	STORE_PROGRESS_STATE_VALUE,
	STORE_PROGRESS_STATE_COLOR,
	STORE_PROGRESS_STATE_OPEN,
	SHOW,
	CLOSE,
	SET_STATE,
	RESET_STATE,
} from './StoreProgress'

const storeProgress = new StoreProgress()
const storeProgressShow = storeProgress[SHOW]
const storeProgressClose = storeProgress[CLOSE]
const storeProgressSetState = storeProgress[SET_STATE]
const storeProgressResetState = storeProgress[RESET_STATE]

export {
	storeProgress,
	storeProgressShow,
	storeProgressClose,
	storeProgressSetState,
	storeProgressResetState,
	STORE_PROGRESS_STATE_VALUE,
	STORE_PROGRESS_STATE_COLOR,
	STORE_PROGRESS_STATE_OPEN,
}
