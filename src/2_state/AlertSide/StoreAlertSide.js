import React from 'react'
import { Container } from 'unstated'
import { STATE, SET_STATE, RESET_STATE } from '2_state/constants'
import { simplerErrorMessage } from '1_utils'
import { UNEXPECTED_ERROR_CODE_14 } from '0_constants'

const STORE_ALERT_SIDE_STATE_BODY = 'body'
const STORE_ALERT_SIDE_STATE_IS_OPEN = 'isOpen'
const STORE_ALERT_SIDE_STATE_STATUS = 'status'

const TOGGLE = 'toggle'
const SHOW = 'show'
const SIMPLE_ERROR = 'simpleError'

const defaultValues = () => ({
	[STORE_ALERT_SIDE_STATE_BODY]: '',
	[STORE_ALERT_SIDE_STATE_IS_OPEN]: false,
	[STORE_ALERT_SIDE_STATE_STATUS]: true,
})

class StoreAlertSide extends Container {
	constructor() {
		super()
		this[STATE] = defaultValues()
		this[SET_STATE] = this[SET_STATE].bind(this)
	}

	[RESET_STATE] = () => {
		this.setState(defaultValues())
		return this
	};

	[SHOW] = (body = '', status = true) => {
		this[SET_STATE]({
			[STORE_ALERT_SIDE_STATE_BODY]: body,
			[STORE_ALERT_SIDE_STATE_IS_OPEN]: true,
			[STORE_ALERT_SIDE_STATE_STATUS]: status,
		})
		return this
	};

	[TOGGLE] = () => {
		this[SET_STATE](state => {
			state[STORE_ALERT_SIDE_STATE_IS_OPEN] = !state[
				STORE_ALERT_SIDE_STATE_IS_OPEN
			]
			return this
		})
	};

	[SIMPLE_ERROR] = (
		err = {},
		defaultErrorMessage = UNEXPECTED_ERROR_CODE_14
	) => {
		this.show(
			<>
				{simplerErrorMessage(err, defaultErrorMessage)}.
				<br />
				{`Error Code: ${defaultErrorMessage[0]}`}
			</>,
			false
		)
		return this
	}
}

export {
	StoreAlertSide,
	STORE_ALERT_SIDE_STATE_BODY,
	STORE_ALERT_SIDE_STATE_IS_OPEN,
	STORE_ALERT_SIDE_STATE_STATUS,
	SHOW,
	TOGGLE,
	SET_STATE,
	RESET_STATE,
	SIMPLE_ERROR,
}
