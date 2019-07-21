import {
	ProgressStore,
	PROGRESS_STATE_VALUE,
	PROGRESS_STATE_COLOR,
	PROGRESS_STATE_OPEN,
	PROGRESS_SHOW,
	PROGRESS_CLOSE,
	SET_STATE,
	RESET_STATE,
} from 'state/Progress/ProgressStore'

const progressStore = new ProgressStore()
const progressStoreShow = progressStore[PROGRESS_SHOW]
const progressStoreClose = progressStore[PROGRESS_CLOSE]
const progressStoreSetState = progressStore[SET_STATE]
const progressStoreResetState = progressStore[RESET_STATE]

export {
	progressStore,
	progressStoreShow,
	progressStoreClose,
	progressStoreSetState,
	progressStoreResetState,
	PROGRESS_STATE_VALUE,
	PROGRESS_STATE_COLOR,
	PROGRESS_STATE_OPEN,
	PROGRESS_SHOW,
	PROGRESS_CLOSE,
}
