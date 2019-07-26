import {
	StoreProgress,
	PROGRESS_STORE_STATE_VALUE,
	PROGRESS_STORE_STATE_COLOR,
	PROGRESS_STORE_STATE_IS_OPEN,
	PROGRESS_STORE_SHOW,
	PROGRESS_STORE_CLOSE,
	SET_STATE,
	RESET_STATE,
} from 'state/Progress/StoreProgress'

const storeProgress = new StoreProgress()
const storeProgressShow = storeProgress[PROGRESS_STORE_SHOW]
const storeProgressClose = storeProgress[PROGRESS_STORE_CLOSE]
const storeProgressSetState = storeProgress[SET_STATE]
const storeProgressResetState = storeProgress[RESET_STATE]

export {
	storeProgress,
	storeProgressShow,
	storeProgressClose,
	storeProgressSetState,
	storeProgressResetState,
	PROGRESS_STORE_STATE_VALUE,
	PROGRESS_STORE_STATE_COLOR,
	PROGRESS_STORE_STATE_IS_OPEN,
}
