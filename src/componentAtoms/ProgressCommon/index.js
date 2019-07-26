import {
	ProgressCommon,
	PROGRESS_COMMON_STATE_IS_OPEN,
	PROGRESS_COMMON_STATE_COLOR,
	PROGRESS_COMMON_STATE_VALUE,
} from 'componentAtoms/ProgressCommon/ProgressCommon'

import {
	StateContainer,
	storeProgress,
	PROGRESS_STORE_STATE_IS_OPEN,
	PROGRESS_STORE_STATE_COLOR,
	PROGRESS_STORE_STATE_VALUE,
} from 'state'

const storeProgressStateToPropsMap = {
	[PROGRESS_COMMON_STATE_IS_OPEN]: PROGRESS_STORE_STATE_IS_OPEN,
	[PROGRESS_COMMON_STATE_COLOR]: PROGRESS_STORE_STATE_COLOR,
	[PROGRESS_COMMON_STATE_VALUE]: PROGRESS_STORE_STATE_VALUE,
}

const ProgressCommonStoreProgress = StateContainer(
	ProgressCommon,
	[storeProgress],
	[storeProgressStateToPropsMap]
)

export { ProgressCommon, ProgressCommonStoreProgress }
