import React from 'react'
// reactstrap components
import { Progress as ProgressStrap } from 'reactstrap'

const PROGRESS_COMMON_STATE_OPEN = 'open'
const PROGRESS_COMMON_STATE_COLOR = 'color'
const PROGRESS_COMMON_STATE_VALUE = 'value'

const ProgressCommon = props => {
	const {
		[PROGRESS_COMMON_STATE_OPEN]: open,
		[PROGRESS_COMMON_STATE_COLOR]: color,
		[PROGRESS_COMMON_STATE_VALUE]: value,
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
	ProgressCommon,
	PROGRESS_COMMON_STATE_OPEN,
	PROGRESS_COMMON_STATE_COLOR,
	PROGRESS_COMMON_STATE_VALUE,
}
