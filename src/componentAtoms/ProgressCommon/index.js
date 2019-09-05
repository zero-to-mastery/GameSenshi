import {
	ProgressCommon,
	PROGRESS_COMMON_STATE_OPEN,
	PROGRESS_COMMON_STATE_COLOR,
	PROGRESS_COMMON_STATE_VALUE,
} from 'componentAtoms/ProgressCommon/ProgressCommon'

import {
	StateContainer,
	storeProgress,
	STORE_PROGRESS_STATE_OPEN,
	STORE_PROGRESS_STATE_COLOR,
	STORE_PROGRESS_STATE_VALUE,
} from 'state'

const mapStoreProgressStateToProp = {
	[PROGRESS_COMMON_STATE_OPEN]: STORE_PROGRESS_STATE_OPEN,
	[PROGRESS_COMMON_STATE_COLOR]: STORE_PROGRESS_STATE_COLOR,
	[PROGRESS_COMMON_STATE_VALUE]: STORE_PROGRESS_STATE_VALUE,
}

const ProgressCommonStoreProgress = StateContainer(
	ProgressCommon,
	[storeProgress],
	[mapStoreProgressStateToProp]
)

export { ProgressCommon, ProgressCommonStoreProgress }
