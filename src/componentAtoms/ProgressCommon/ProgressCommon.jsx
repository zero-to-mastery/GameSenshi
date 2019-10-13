import React from 'react'
// reactstrap components
import { Progress } from 'reactstrap'

const PROGRESS_COMMON_STATE_IS_OPEN = 'isOpen'
const PROGRESS_COMMON_STATE_COLOR = 'color'
const PROGRESS_COMMON_STATE_VALUE = 'value'

const ProgressCommon = props => {
	const {
		[PROGRESS_COMMON_STATE_IS_OPEN]: isOpen,
		[PROGRESS_COMMON_STATE_COLOR]: color,
		[PROGRESS_COMMON_STATE_VALUE]: value,
	} = props
	return isOpen ? (
		<div className={`progress-container progress-${color}`}>
			<Progress className='mt-0 mb-0' max='100' value={value} animated>
				{value}%
			</Progress>
		</div>
	) : null
}

export {
	ProgressCommon,
	PROGRESS_COMMON_STATE_IS_OPEN,
	PROGRESS_COMMON_STATE_COLOR,
	PROGRESS_COMMON_STATE_VALUE,
}
