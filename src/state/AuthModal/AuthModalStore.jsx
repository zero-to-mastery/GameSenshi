import React from 'react'
import { Container } from 'unstated'
import Interweave from 'interweave'
import reactElementToJSXString from 'react-element-to-jsx-string'

import { STATE, SET_STATE, RESET_STATE } from 'state/constants'

const AUTH_MODAL_STORE = 'authModal'
const AUTH_MODAL_STORE_STATE_BODY = 'body'
const AUTH_MODAL_STORE_STATE_IS_OPEN = 'open'
const AUTH_MODAL_STORE_STATE_TITLE = 'title'
const AUTH_MODAL_STORE_STATE_LOADER = 'loader'
const AUTH_MODAL_STORE_STATE_CONTINUED_CALLBACK = 'callback'
const AUTH_MODAL_STORE_SHOW = 'show'
const AUTH_MODAL_STORE_CLOSE = 'close'
const AUTH_MODAL_STORE_TOGGLE = 'toggle'
const AUTH_MODAL_STORE_SET_ITEM = 'setItem'
const AUTH_MODAL_STORE_GET_ITEM = 'getItem'
const AUTH_MODAL_STORE_INITIALIZE = 'initialize'
const AUTH_MODAL_STORE_REMOVE_ITEM = 'removeItem'
const AUTH_MODAL_STORE_ON_AUTH_STATE_CHANGE = 'onAuthStateChange'
const AUTH_MODAL_STORE_PROCESS_REDIRECT_RESULT = 'processRedirectResult'
const AUTH_MODAL_STORE_ON_CONTINUE = 'onSuccessfulSubmission'

const defaultValues = {
	[AUTH_MODAL_STORE_STATE_BODY]: '',
	[AUTH_MODAL_STORE_STATE_TITLE]: '',
	[AUTH_MODAL_STORE_STATE_IS_OPEN]: false,
	[AUTH_MODAL_STORE_STATE_LOADER]: false,
	[AUTH_MODAL_STORE_STATE_CONTINUED_CALLBACK]: () => {},
}

class AuthModalStore extends Container {
	constructor() {
		super()
		this[STATE] = defaultValues
		this[SET_STATE] = this[SET_STATE].bind(this)
	}

	[AUTH_MODAL_STORE_TOGGLE] = () => {
		this.setState(state => {
			state[AUTH_MODAL_STORE_STATE_IS_OPEN] = !state[
				AUTH_MODAL_STORE_STATE_IS_OPEN
			]
			return state
		})
		return this
	};

	[RESET_STATE] = () => {
		this.setState(defaultValues)
		return this
	};

	[AUTH_MODAL_STORE_CLOSE] = () => {
		this.setState({ [AUTH_MODAL_STORE_STATE_IS_OPEN]: false })
		return this
	};

	[AUTH_MODAL_STORE_ON_CONTINUE] = () => {
		this[STATE][AUTH_MODAL_STORE_STATE_CONTINUED_CALLBACK]()
		this[RESET_STATE]()
		return
	};

	[AUTH_MODAL_STORE_GET_ITEM] = () =>
		(JSON.parse(sessionStorage.getItem(AUTH_MODAL_STORE))[
			AUTH_MODAL_STORE_REMOVE_ITEM
		] = () => {
			sessionStorage.removeItem(AUTH_MODAL_STORE)
			return this
		});

	[AUTH_MODAL_STORE_SET_ITEM] = (title = '', body = '', restProps = {}) => {
		sessionStorage.setItem(
			AUTH_MODAL_STORE,
			JSON.stringify({
				...restProps,
				[AUTH_MODAL_STORE_STATE_BODY]: body,
				[AUTH_MODAL_STORE_STATE_TITLE]: title,
			})
		)
		return this
	};

	[AUTH_MODAL_STORE_SHOW] = (
		title = '',
		body = '',
		loader = false,
		afterContinueCallback = () => {}
	) => {
		this.setState({
			[AUTH_MODAL_STORE_STATE_IS_OPEN]: true,
			[AUTH_MODAL_STORE_STATE_BODY]: body,
			[AUTH_MODAL_STORE_STATE_TITLE]: title,
			[AUTH_MODAL_STORE_STATE_LOADER]: loader,
			[AUTH_MODAL_STORE_STATE_CONTINUED_CALLBACK]: afterContinueCallback,
		})
		return this
	};

	[AUTH_MODAL_STORE_INITIALIZE] = () => {
		const item = this[AUTH_MODAL_STORE_GET_ITEM]()
		if (item) {
			this.setState({
				[AUTH_MODAL_STORE_STATE_BODY]: (
					<Interweave content={item[AUTH_MODAL_STORE_STATE_BODY]} />
				),
				[AUTH_MODAL_STORE_STATE_IS_OPEN]: true,
				[AUTH_MODAL_STORE_STATE_TITLE]: (
					<Interweave content={item[AUTH_MODAL_STORE_STATE_TITLE]} />
				),
				[AUTH_MODAL_STORE_STATE_LOADER]: true,
			})
		}
		return this
	};

	[AUTH_MODAL_STORE_ON_AUTH_STATE_CHANGE] = () => {
		const item = this[AUTH_MODAL_STORE_GET_ITEM]()
		!item && this.setState({ [AUTH_MODAL_STORE_STATE_IS_OPEN]: false })
		return this
	};

	[AUTH_MODAL_STORE_PROCESS_REDIRECT_RESULT] = (
		LinkedCallBack = () => {},
		linkingCallBack = () => {}
	) => {
		const item = this[AUTH_MODAL_STORE_GET_ITEM]()
		const {
			name1,
			name2,
			isLinked,
			provider2,
			//credential,
		} = item
		if (isLinked) {
			LinkedCallBack(name2)
			this[AUTH_MODAL_STORE_REMOVE_ITEM]()
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
			this[AUTH_MODAL_STORE_SET_ITEM]('Linking...', JSXString, restProps)
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
	AuthModalStore,
	AUTH_MODAL_STORE_STATE_BODY,
	AUTH_MODAL_STORE_STATE_IS_OPEN,
	AUTH_MODAL_STORE_STATE_TITLE,
	AUTH_MODAL_STORE_STATE_LOADER,
	AUTH_MODAL_STORE_STATE_CONTINUED_CALLBACK,
	AUTH_MODAL_STORE_SHOW,
	AUTH_MODAL_STORE_CLOSE,
	AUTH_MODAL_STORE_TOGGLE,
	AUTH_MODAL_STORE_GET_ITEM,
	AUTH_MODAL_STORE_SET_ITEM,
	AUTH_MODAL_STORE_INITIALIZE,
	AUTH_MODAL_STORE_REMOVE_ITEM,
	AUTH_MODAL_STORE_ON_AUTH_STATE_CHANGE,
	AUTH_MODAL_STORE_PROCESS_REDIRECT_RESULT,
	AUTH_MODAL_STORE_ON_CONTINUE,
	SET_STATE,
	RESET_STATE,
}
