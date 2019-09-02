import React from 'react'
import { Container } from 'unstated'
import Interweave from 'interweave'
import reactElementToJSXString from 'react-element-to-jsx-string'

import { STATE, SET_STATE, RESET_STATE } from 'state/constants'

const STORE_AUTH_MODAL = 'authModal'
const STORE_AUTH_MODAL_STATE_BODY = 'body'
const STORE_AUTH_MODAL_STATE_IS_OPEN = 'open'
const STORE_AUTH_MODAL_STATE_TITLE = 'title'
const STORE_AUTH_MODAL_STATE_LOADER = 'loader'
const STORE_AUTH_MODAL_STATE_CONTINUED_CALLBACK = 'callback'
const STORE_AUTH_MODAL_SHOW = 'show'
const STORE_AUTH_MODAL_CLOSE = 'close'
const STORE_AUTH_MODAL_TOGGLE = 'toggle'
const STORE_AUTH_MODAL_SET_ITEM = 'setItem'
const STORE_AUTH_MODAL_GET_ITEM = 'getItem'
const STORE_AUTH_MODAL_INITIALIZE = 'initialize'
const STORE_AUTH_MODAL_REMOVE_ITEM = 'removeItem'
const STORE_AUTH_MODAL_ON_AUTH_STATE_CHANGE = 'onAuthStateChange'
const STORE_AUTH_MODAL_PROCESS_REDIRECT_RESULT = 'processRedirectResult'
const STORE_AUTH_MODAL_ON_CONTINUE = 'onSuccessfulSubmission'

const defaultValues = () => ({
	[STORE_AUTH_MODAL_STATE_BODY]: '',
	[STORE_AUTH_MODAL_STATE_TITLE]: '',
	[STORE_AUTH_MODAL_STATE_IS_OPEN]: false,
	[STORE_AUTH_MODAL_STATE_LOADER]: false,
	[STORE_AUTH_MODAL_STATE_CONTINUED_CALLBACK]: () => {},
})

class StoreAuthModal extends Container {
	constructor() {
		super()
		this[STATE] = defaultValues()
		this[SET_STATE] = this[SET_STATE].bind(this)
	}

	[STORE_AUTH_MODAL_TOGGLE] = () => {
		this.setState(state => {
			state[STORE_AUTH_MODAL_STATE_IS_OPEN] = !state[
				STORE_AUTH_MODAL_STATE_IS_OPEN
			]
			return state
		})
		return this
	};

	[RESET_STATE] = () => {
		this.setState(defaultValues())
		return this
	};

	[STORE_AUTH_MODAL_CLOSE] = () => {
		this.setState({ [STORE_AUTH_MODAL_STATE_IS_OPEN]: false })
		return this
	};

	[STORE_AUTH_MODAL_ON_CONTINUE] = () => {
		this[STATE][STORE_AUTH_MODAL_STATE_CONTINUED_CALLBACK]()
		this[RESET_STATE]()
		return
	};

	[STORE_AUTH_MODAL_GET_ITEM] = () => {
		return JSON.parse(sessionStorage.getItem(STORE_AUTH_MODAL))
	};

	[STORE_AUTH_MODAL_REMOVE_ITEM] = () => {
		sessionStorage.removeItem(STORE_AUTH_MODAL)
		return this
	};

	[STORE_AUTH_MODAL_SET_ITEM] = (title = '', body = '', restProps = {}) => {
		sessionStorage.setItem(
			STORE_AUTH_MODAL,
			JSON.stringify({
				...restProps,
				[STORE_AUTH_MODAL_STATE_BODY]: body,
				[STORE_AUTH_MODAL_STATE_TITLE]: title,
			})
		)
		return this
	};

	[STORE_AUTH_MODAL_SHOW] = (
		title = '',
		body = '',
		loader = false,
		afterContinueCallback = () => {}
	) => {
		this.setState({
			[STORE_AUTH_MODAL_STATE_IS_OPEN]: true,
			[STORE_AUTH_MODAL_STATE_BODY]: body,
			[STORE_AUTH_MODAL_STATE_TITLE]: title,
			[STORE_AUTH_MODAL_STATE_LOADER]: loader,
			[STORE_AUTH_MODAL_STATE_CONTINUED_CALLBACK]: afterContinueCallback,
		})
		return this
	};

	[STORE_AUTH_MODAL_INITIALIZE] = () => {
		const item = this[STORE_AUTH_MODAL_GET_ITEM]()
		if (item) {
			this.setState({
				[STORE_AUTH_MODAL_STATE_BODY]: (
					<Interweave content={item[STORE_AUTH_MODAL_STATE_BODY]} />
				),
				[STORE_AUTH_MODAL_STATE_IS_OPEN]: true,
				[STORE_AUTH_MODAL_STATE_TITLE]: (
					<Interweave content={item[STORE_AUTH_MODAL_STATE_TITLE]} />
				),
				[STORE_AUTH_MODAL_STATE_LOADER]: true,
			})
		}
		return this
	};

	[STORE_AUTH_MODAL_ON_AUTH_STATE_CHANGE] = () => {
		const item = this[STORE_AUTH_MODAL_GET_ITEM]()
		!item && this.setState({ [STORE_AUTH_MODAL_STATE_IS_OPEN]: false })
		return this
	};

	[STORE_AUTH_MODAL_PROCESS_REDIRECT_RESULT] = (
		LinkedCallBack = () => {},
		linkingCallBack = () => {}
	) => {
		const item = this[STORE_AUTH_MODAL_GET_ITEM]()
		const {
			name1,
			name2,
			isLinked,
			provider2,
			//credential,
		} = item
		if (isLinked) {
			LinkedCallBack(name2)
			this[STORE_AUTH_MODAL_REMOVE_ITEM]()
		} else if (item) {
			// show modal on link redirect
			const JSXString = reactElementToJSXString(
				<span>
					Please wait while we linking your
					<b> {name2} </b>
					account to your<b> {name1} </b>account.
				</span>
			)
			const restProps = {
				...item,
				isLinked: true,
			}
			this[STORE_AUTH_MODAL_SET_ITEM]('Linking...', JSXString, restProps)
			// if (provider2 === 'password') {
			// TODO allow user to create password account and link to existing social account
			// } else {
			linkingCallBack(provider2)
			//}
		}
		return this
	}
}

export {
	StoreAuthModal,
	STORE_AUTH_MODAL_STATE_BODY,
	STORE_AUTH_MODAL_STATE_IS_OPEN,
	STORE_AUTH_MODAL_STATE_TITLE,
	STORE_AUTH_MODAL_STATE_LOADER,
	STORE_AUTH_MODAL_STATE_CONTINUED_CALLBACK,
	STORE_AUTH_MODAL_SHOW,
	STORE_AUTH_MODAL_CLOSE,
	STORE_AUTH_MODAL_TOGGLE,
	STORE_AUTH_MODAL_GET_ITEM,
	STORE_AUTH_MODAL_SET_ITEM,
	STORE_AUTH_MODAL_INITIALIZE,
	STORE_AUTH_MODAL_REMOVE_ITEM,
	STORE_AUTH_MODAL_ON_AUTH_STATE_CHANGE,
	STORE_AUTH_MODAL_PROCESS_REDIRECT_RESULT,
	STORE_AUTH_MODAL_ON_CONTINUE,
	SET_STATE,
	RESET_STATE,
}
