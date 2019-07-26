import {
	StoreProgress,
	STORE_PROGRESS_STATE_VALUE,
	STORE_PROGRESS_STATE_COLOR,
	STORE_PROGRESS_STATE_IS_OPEN,
	STORE_PROGRESS_SHOW,
	STORE_PROGRESS_CLOSE,
	SET_STATE,
	RESET_STATE,
} from 'state/Progress/StoreProgress'

const storeProgress = new StoreProgress()
const storeProgressShow = storeProgress[STORE_PROGRESS_SHOW]
const storeProgressClose = storeProgress[STORE_PROGRESS_CLOSE]
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
	STORE_PROGRESS_STATE_IS_OPEN,
}
