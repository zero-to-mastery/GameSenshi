import React from 'react'
// reactstrap components
import { Progress as ProgressStrap } from 'reactstrap'
// state
import { progressStore, Subscribe } from 'state'
//constants
import { PROGRESS_OPEN, PROGRESS_VALUE, PROGRESS_COLOR } from 'constantValues'
const Progress = props => {
	return (
		<Subscribe to={[progressStore]}>
			{progressStore => {
				const {
					[PROGRESS_OPEN]: open,
					[PROGRESS_VALUE]: value,
					[PROGRESS_COLOR]: color,
				} = progressStore.state
				return (
					open && (
						<div className={`progress-container progress-${color}`}>
							<ProgressStrap max='100' value={value} />
						</div>
					)
				)
			}}
		</Subscribe>
	)
}

export default Progress
