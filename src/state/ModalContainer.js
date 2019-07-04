import React from 'react'
import { Container } from 'unstated'
import Interweave from 'interweave'

import {
	MODAL_BODY,
	MODAL_OPEN,
	MODAL_TITLE,
	MODAL_LOADER,
	MODAL_CALLBACK,
} from 'constantValues'

const defaultValues = {
	[MODAL_BODY]: '',
	[MODAL_TITLE]: '',
	[MODAL_OPEN]: false,
	[MODAL_LOADER]: false,
	[MODAL_CALLBACK]: () => {},
}

class ModalContainer extends Container {
	state = defaultValues

	toggle = () => {
		return this.setState(state => {
			state[MODAL_OPEN] = !state[MODAL_OPEN]
			return state
		})
	}
	resetState = () => {
		return this.setState(defaultValues)
	}

	initialize = () => {
		const authModal = JSON.parse(sessionStorage.getItem('authModal'))
		if (authModal) {
			return this.setState({
				[MODAL_BODY]: <Interweave content={authModal[MODAL_BODY]} />,
				[MODAL_OPEN]: true,
				[MODAL_TITLE]: <Interweave content={authModal[MODAL_TITLE]} />,
				[MODAL_LOADER]: true,
			})
		} else {
			return this.setState({})
		}
	}
}

export default ModalContainer
