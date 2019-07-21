import React from 'react'
// reactstrap components
import { Progress as ProgressStrap } from 'reactstrap'

const COMMON_PROGRESS_STATE_OPEN = 'open'
const COMMON_PROGRESS_STATE_COLOR = 'color'
const COMMON_PROGRESS_STATE_VALUE = 'value'

const CommonProgress = props => {
	const {
		[COMMON_PROGRESS_STATE_OPEN]: open,
		[COMMON_PROGRESS_STATE_COLOR]: color,
		[COMMON_PROGRESS_STATE_VALUE]: value,
	} = props
	return open ? (
		<div className={`progress-container progress-${color}`}>
			<ProgressStrap className='mt-0 mb-0' max='100' value={value} animated>
				{value}%
			</ProgressStrap>
		</div>
	) : null
}

export {
	CommonProgress,
	COMMON_PROGRESS_STATE_OPEN,
	COMMON_PROGRESS_STATE_COLOR,
	COMMON_PROGRESS_STATE_VALUE,
}
