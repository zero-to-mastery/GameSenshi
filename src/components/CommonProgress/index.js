import {
	CommonProgress,
	COMMON_PROGRESS_STATE_OPEN,
	COMMON_PROGRESS_STATE_COLOR,
	COMMON_PROGRESS_STATE_VALUE,
} from 'components/CommonProgress/CommonProgress'

import {
	StateContainer,
	progressStore,
	PROGRESS_STATE_OPEN,
	PROGRESS_STATE_COLOR,
	PROGRESS_STATE_VALUE,
} from 'state'

const progressStoreStateToPropsMap = {
	[COMMON_PROGRESS_STATE_OPEN]: PROGRESS_STATE_OPEN,
	[COMMON_PROGRESS_STATE_COLOR]: PROGRESS_STATE_COLOR,
	[COMMON_PROGRESS_STATE_VALUE]: PROGRESS_STATE_VALUE,
}

const CommonProgressStoreProgress = StateContainer(
	CommonProgress,
	progressStore,
	progressStoreStateToPropsMap
)

export { CommonProgress, CommonProgressStoreProgress }
