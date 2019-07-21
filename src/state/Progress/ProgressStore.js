import { Container } from 'unstated'
import { RESET_STATE } from 'constantValues'

const PROGRESS_STATE_VALUE = 'value'
const PROGRESS_STATE_COLOR = 'color'
const PROGRESS_STATE_OPEN = 'open'

const PROGRESS_SHOW = 'show'
const PROGRESS_CLOSE = 'close'

const DEFAULT_COLOR = 'primary'
const DEFAULT_VALUE = '0'

const defaultValues = {
	[PROGRESS_STATE_VALUE]: DEFAULT_VALUE,
	[PROGRESS_STATE_OPEN]: false,
	[PROGRESS_STATE_COLOR]: DEFAULT_COLOR,
}

class ProgressStore extends Container {
	state = defaultValues
}

ProgressStore.prototype[RESET_STATE] = function() {
	this.setState(defaultValues)
	return this
}

ProgressStore.prototype[PROGRESS_SHOW] = function(
	value = DEFAULT_VALUE,
	color = DEFAULT_COLOR
) {
	this.setState({
		[PROGRESS_STATE_OPEN]: true,
		[PROGRESS_STATE_COLOR]: color,
		[PROGRESS_STATE_VALUE]: value,
	})
	return this
}

ProgressStore.prototype[PROGRESS_CLOSE] = function() {
	this.setState(defaultValues)
	return this
}

export {
	ProgressStore,
	PROGRESS_STATE_VALUE,
	PROGRESS_STATE_COLOR,
	PROGRESS_STATE_OPEN,
	PROGRESS_SHOW,
	PROGRESS_CLOSE,
}
