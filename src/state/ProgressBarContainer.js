import { Container } from 'unstated'

import { PROGRESS_OPEN, PROGRESS_VALUE, PROGRESS_COLOR } from 'constantValues'

const DEFAULT_COLOR = 'success'

const defaultValues = {
	[PROGRESS_VALUE]: '0',
	[PROGRESS_OPEN]: false,
	[PROGRESS_COLOR]: DEFAULT_COLOR,
}

class ProgressContainer extends Container {
	state = defaultValues

	resetState = () => {
		this.setState(defaultValues)
		return this
	}

	show = (value = '0', color = DEFAULT_COLOR) => {
		this.setState({
			[PROGRESS_OPEN]: true,
			[PROGRESS_COLOR]: color,
			[PROGRESS_VALUE]: value,
		})
		return this
	}
}

export default ProgressContainer
