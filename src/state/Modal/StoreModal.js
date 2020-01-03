import React from 'react'
import { Container } from 'unstated'
import Interweave from 'interweave'
import reactElementToJSXString from 'react-element-to-jsx-string'
import { simplerErrorMessage } from 'utils'
import { STATE, SET_STATE, RESET_STATE } from 'state/constants'
import { UNEXPECTED_ERROR_CODE_14 } from 'constantValues'

const STORE_MODAL = 'Modal'
const STORE_MODAL_STATE_BODY = 'body'
const STORE_MODAL_STATE_IS_OPEN = 'isOpen'
const STORE_MODAL_STATE_TITLE = 'title'
const STORE_MODAL_STATE_LOADER = 'loader'
const STORE_MODAL_STATE_CONTINUED_CALLBACK = 'callback'
const SHOW = 'show'
const CLOSE = 'close'
const TOGGLE = 'toggle'
const SET_ITEM = 'setItem'
const GET_ITEM = 'getItem'
const INITIALIZE = 'initialize'
const REMOVE_ITEM = 'removeItem'
const ON_AUTH_STATE_CHANGE = 'onAuthStateChange'
const PROCESS_REDIRECT_RESULT = 'processRedirectResult'
const ON_CONTINUE = 'onSuccessfulSubmission'
const CLEAR = 'clear'
const SIMPLE_ERROR = 'simpleError'
const TIMEOUT_ID = 'timeOutID'
const REDIRECT_URL = 'redirectURL'
const GET_REDIRECT_URL = 'getRedirectUrl'

const defaultValues = () => ({
	[STORE_MODAL_STATE_BODY]: '',
	[STORE_MODAL_STATE_TITLE]: '',
	[STORE_MODAL_STATE_IS_OPEN]: false,
	[STORE_MODAL_STATE_LOADER]: false,
	[STORE_MODAL_STATE_CONTINUED_CALLBACK]: () => {},
})

class StoreModal extends Container {
	constructor() {
		super()
		this[STATE] = defaultValues()
		this[SET_STATE] = this[SET_STATE].bind(this)
		this[TIMEOUT_ID] = -1
		this[REDIRECT_URL] = window.location.href
	}

	[TOGGLE] = () => {
		this[SET_STATE](state => {
			state[STORE_MODAL_STATE_IS_OPEN] = !state[STORE_MODAL_STATE_IS_OPEN]
			return state
		})
		return this
	};

	[RESET_STATE] = () => {
		this[SET_STATE](defaultValues())
		return this
	};

	[CLOSE] = () => {
		clearTimeout(this[TIMEOUT_ID])
		this[SET_STATE]({ [STORE_MODAL_STATE_IS_OPEN]: false })
		return this
	};

	[ON_CONTINUE] = () => {
		this[STATE][STORE_MODAL_STATE_CONTINUED_CALLBACK]()
		this[RESET_STATE]()
		return
	};

	[GET_ITEM] = () => {
		return JSON.parse(sessionStorage.getItem(STORE_MODAL))
	};

	[REMOVE_ITEM] = () => {
		sessionStorage.removeItem(STORE_MODAL)
		return this
	};

	[CLEAR] = () => {
		this[REMOVE_ITEM]()
		this[CLOSE]()
		return this
	};

	[GET_REDIRECT_URL] = () => {
		return this[REDIRECT_URL]
	};

	[SET_ITEM] = (title = '', body = '', restProps = {}) => {
		sessionStorage.setItem(
			STORE_MODAL,
			JSON.stringify({
				...restProps,
				[STORE_MODAL_STATE_BODY]: body,
				[STORE_MODAL_STATE_TITLE]: title,
			})
		)
		return this
	};

	[INITIALIZE] = (callback = () => {}) => {
		const item = this[GET_ITEM]()
		if (item) {
			callback()
			this[SHOW](
				<Interweave content={item[STORE_MODAL_STATE_TITLE]} />,
				<Interweave content={item[STORE_MODAL_STATE_BODY]} />,
				true
			)
		}
		return this
	};

	[SHOW] = (
		title = '',
		body = '',
		loader = false,
		afterContinueCallback = () => {}
	) => {
		this[CLOSE]()
		setTimeout(() => {
			// clearTimeout(this[TIMEOUT_ID])
			this[SET_STATE]({
				[STORE_MODAL_STATE_IS_OPEN]: true,
				[STORE_MODAL_STATE_BODY]: body,
				[STORE_MODAL_STATE_TITLE]: title,
				[STORE_MODAL_STATE_LOADER]: loader,
				[STORE_MODAL_STATE_CONTINUED_CALLBACK]: afterContinueCallback,
			})
			if (loader) {
				this[TIMEOUT_ID] = setTimeout(() => {
					this[SIMPLE_ERROR]({}, UNEXPECTED_ERROR_CODE_14)
				}, 10000)
			}
		}, 150)
		return this
	};

	[ON_AUTH_STATE_CHANGE] = () => {
		const item = this[GET_ITEM]()
		!item && this[SET_STATE]({ [STORE_MODAL_STATE_IS_OPEN]: false })
		return this
	};

	[SIMPLE_ERROR] = (err = {}, defaultErrorMessage = ['']) => {
		this[SHOW](
			<span className='text-danger'>Error</span>,
			<>
				{simplerErrorMessage(err, defaultErrorMessage)}.
				<br />
				{`Code: ${defaultErrorMessage[0]}`}
			</>,
			false
		)

		this[REMOVE_ITEM]()

		return this
	};

	[PROCESS_REDIRECT_RESULT] = (
		linkingCallBack = () => {},
		linkedCallback = () => {}
	) => {
		const item = this[GET_ITEM]()
		const {
			name1,
			name2,
			isLinked,
			provider2,
			linking,
			credential: { accessToken },
		} = item
		console.log('789')
		if (linking) {
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
				linking: false,
			}
			this[SET_ITEM]('Linking...', JSXString, restProps)
			// if (provider2 === 'password') {
			// TODO allow user to create password account and link to existing social account
			// } else {
			linkingCallBack(provider2, name1, accessToken)
			//}
		} else if (isLinked) {
			linkedCallback()
			this[REMOVE_ITEM]()
		} else {
			this[CLOSE]()
		}
		return this
	}
}

export {
	StoreModal,
	STORE_MODAL_STATE_BODY,
	STORE_MODAL_STATE_IS_OPEN,
	STORE_MODAL_STATE_TITLE,
	STORE_MODAL_STATE_LOADER,
	STORE_MODAL_STATE_CONTINUED_CALLBACK,
	SHOW,
	CLOSE,
	TOGGLE,
	GET_ITEM,
	SET_ITEM,
	INITIALIZE,
	REMOVE_ITEM,
	ON_AUTH_STATE_CHANGE,
	PROCESS_REDIRECT_RESULT,
	ON_CONTINUE,
	SET_STATE,
	RESET_STATE,
	CLEAR,
	SIMPLE_ERROR,
	GET_REDIRECT_URL,
}
