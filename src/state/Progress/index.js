import {
	ProgressStore,
	PROGRESS_VALUE,
	PROGRESS_COLOR,
	PROGRESS_OPEN,
	PROGRESS_SHOW,
	PROGRESS_CLOSE,
} from 'state/Progress/ProgressStore'

const progressStore = new ProgressStore()
const progressStoreShow = progressStore[PROGRESS_SHOW].bind(progressStore)
const progressStoreClose = progressStore[PROGRESS_CLOSE].bind(progressStore)
const progressStoreSetState = progressStore.setState.bind(progressStore)

export {
	progressStore,
	progressStoreShow,
	progressStoreClose,
	progressStoreSetState,
	PROGRESS_VALUE,
	PROGRESS_COLOR,
	PROGRESS_OPEN,
	PROGRESS_SHOW,
	PROGRESS_CLOSE,
}
