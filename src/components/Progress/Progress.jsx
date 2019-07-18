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
				return open ? (
					<>
						<div className={`progress-container progress-${color}`}>
							<ProgressStrap
								className='mt-0 mb-0'
								max='100'
								value={value}
								animated>
								{value}%
							</ProgressStrap>
						</div>
					</>
				) : null
			}}
		</Subscribe>
	)
}

export default Progress
