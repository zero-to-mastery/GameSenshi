import {
	ProgressCommon,
	PROGRESS_COMMON_STATE_IS_OPEN,
	PROGRESS_COMMON_STATE_COLOR,
	PROGRESS_COMMON_STATE_VALUE,
} from 'componentAtoms/ProgressCommon/ProgressCommon'

import {
	StateContainer,
	storeProgress,
	STORE_PROGRESS_STATE_IS_OPEN,
	STORE_PROGRESS_STATE_COLOR,
	STORE_PROGRESS_STATE_VALUE,
} from 'state'

const MapStoreProgressStateToProp = {
	[PROGRESS_COMMON_STATE_IS_OPEN]: STORE_PROGRESS_STATE_IS_OPEN,
	[PROGRESS_COMMON_STATE_COLOR]: STORE_PROGRESS_STATE_COLOR,
	[PROGRESS_COMMON_STATE_VALUE]: STORE_PROGRESS_STATE_VALUE,
}

const ProgressCommonStoreProgress = StateContainer(
	ProgressCommon,
	[storeProgress],
	[MapStoreProgressStateToProp]
)

export { ProgressCommon, ProgressCommonStoreProgress }
