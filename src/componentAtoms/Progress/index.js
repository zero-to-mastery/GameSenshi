import {
	Progress,
	PROGRESS_STATE_IS_OPEN,
	PROGRESS_STATE_COLOR,
	PROGRESS_STATE_VALUE,
} from './Progress'

import {
	StateContainer,
	storeProgress,
	STORE_PROGRESS_STATE_IS_OPEN,
	STORE_PROGRESS_STATE_COLOR,
	STORE_PROGRESS_STATE_VALUE,
} from 'state'

const mapStoreProgressStateToProp = {
	[PROGRESS_STATE_IS_OPEN]: STORE_PROGRESS_STATE_IS_OPEN,
	[PROGRESS_STATE_COLOR]: STORE_PROGRESS_STATE_COLOR,
	[PROGRESS_STATE_VALUE]: STORE_PROGRESS_STATE_VALUE,
}

const ProgressStoreProgress = StateContainer(
	Progress,
	[storeProgress],
	[mapStoreProgressStateToProp]
)

export { Progress, ProgressStoreProgress }
