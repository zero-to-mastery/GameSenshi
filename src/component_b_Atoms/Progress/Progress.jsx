import React from 'react'
// reactstrap components
import { Progress as ProgressRS } from 'reactstrap'

const PROGRESS_STATE_IS_OPEN = 'isOpen'
const PROGRESS_STATE_COLOR = 'color'
const PROGRESS_STATE_VALUE = 'value'

const Progress = props => {
	const {
		[PROGRESS_STATE_IS_OPEN]: isOpen,
		[PROGRESS_STATE_COLOR]: color,
		[PROGRESS_STATE_VALUE]: value,
	} = props
	return isOpen ? (
		<div className={`progress-container progress-${color}`}>
			<ProgressRS className='my-0' max='100' value={value} animated>
				{value}%
			</ProgressRS>
		</div>
	) : null
}

export {
	Progress,
	PROGRESS_STATE_IS_OPEN,
	PROGRESS_STATE_COLOR,
	PROGRESS_STATE_VALUE,
}
