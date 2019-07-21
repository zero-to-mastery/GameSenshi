import {
	CommonProgress,
	COMMON_PROGRESS_STATE_OPEN,
	COMMON_PROGRESS_STATE_COLOR,
	COMMON_PROGRESS_STATE_VALUE,
} from 'components/CommonProgress/CommonProgress'

import {
	StateContainer,
	progressStore,
	PROGRESS_OPEN,
	PROGRESS_COLOR,
	PROGRESS_VALUE,
} from 'state'

const progressStoreStateToPropsMap = {
	[COMMON_PROGRESS_STATE_OPEN]: PROGRESS_OPEN,
	[COMMON_PROGRESS_STATE_COLOR]: PROGRESS_COLOR,
	[COMMON_PROGRESS_STATE_VALUE]: PROGRESS_VALUE,
}

const CommonProgressStoreProgress = StateContainer(
	CommonProgress,
	progressStore,
	progressStoreStateToPropsMap
)

export { CommonProgress, CommonProgressStoreProgress }
