import {
	ProgressStore,
	PROGRESS_STORE_STATE_VALUE,
	PROGRESS_STORE_STATE_COLOR,
	PROGRESS_STORE_STATE_IS_OPEN,
	PROGRESS_STORE_SHOW,
	PROGRESS_STORE_CLOSE,
	SET_STATE,
	RESET_STATE,
} from 'state/Progress/ProgressStore'

const progressStore = new ProgressStore()
const progressStoreShow = progressStore[PROGRESS_STORE_SHOW]
const progressStoreClose = progressStore[PROGRESS_STORE_CLOSE]
const progressStoreSetState = progressStore[SET_STATE]
const progressStoreResetState = progressStore[RESET_STATE]

export {
	progressStore,
	progressStoreShow,
	progressStoreClose,
	progressStoreSetState,
	progressStoreResetState,
	PROGRESS_STORE_STATE_VALUE,
	PROGRESS_STORE_STATE_COLOR,
	PROGRESS_STORE_STATE_IS_OPEN,
	PROGRESS_STORE_SHOW,
	PROGRESS_STORE_CLOSE,
}
