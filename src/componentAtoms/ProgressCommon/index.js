import {
	ProgressCommon,
	PROGRESS_COMMON_STATE_OPEN,
	PROGRESS_COMMON_STATE_COLOR,
	PROGRESS_COMMON_STATE_VALUE,
} from 'componentAtoms/ProgressCommon/ProgressCommon'

import {
	StateContainer,
	progressStore,
	PROGRESS_STORE_STATE_OPEN,
	PROGRESS_STORE_STATE_COLOR,
	PROGRESS_STORE_STATE_VALUE,
} from 'state'

const progressStoreStateToPropsMap = {
	[PROGRESS_COMMON_STATE_OPEN]: PROGRESS_STORE_STATE_OPEN,
	[PROGRESS_COMMON_STATE_COLOR]: PROGRESS_STORE_STATE_COLOR,
	[PROGRESS_COMMON_STATE_VALUE]: PROGRESS_STORE_STATE_VALUE,
}

const ProgressCommonStoreProgress = StateContainer(
	ProgressCommon,
	progressStore,
	progressStoreStateToPropsMap
)

export { ProgressCommon, ProgressCommonStoreProgress }
