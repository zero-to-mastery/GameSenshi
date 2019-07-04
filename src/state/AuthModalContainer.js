import React from 'react'
import { Container } from 'unstated'
import Interweave from 'interweave'
import reactElementToJSXString from 'react-element-to-jsx-string'

import {
	AUTH_MODAL,
	AUTH_MODAL_BODY,
	AUTH_MODAL_OPEN,
	AUTH_MODAL_TITLE,
	AUTH_MODAL_LOADER,
	AUTH_MODAL_CALLBACK,
} from 'constantValues'

const defaultValues = {
	[AUTH_MODAL_BODY]: '',
	[AUTH_MODAL_TITLE]: '',
	[AUTH_MODAL_OPEN]: false,
	[AUTH_MODAL_LOADER]: false,
	[AUTH_MODAL_CALLBACK]: () => {},
}

class AuthModalContainer extends Container {
	state = defaultValues

	toggle = () => {
		this.setState(state => {
			state[AUTH_MODAL_OPEN] = !state[AUTH_MODAL_OPEN]
			return state
		})
		return this
	}
	resetState = () => {
		this.setState(defaultValues)
		return this
	}
	close = () => {
		this.setState({ [AUTH_MODAL_OPEN]: false })
		return this
	}
	show = (
		title = '',
		body = '',
		loader = false,
		afterContinueCallback = () => {}
	) => {
		this.setState({
			[AUTH_MODAL_OPEN]: true,
			[AUTH_MODAL_BODY]: body,
			[AUTH_MODAL_TITLE]: title,
			[AUTH_MODAL_LOADER]: loader,
			[AUTH_MODAL_CALLBACK]: afterContinueCallback,
		})
	}

	getItemFromSessionStorage = () =>
		JSON.parse(sessionStorage.getItem(AUTH_MODAL))

	removeItemFromSessionStorage = () => {
		sessionStorage.removeItem(AUTH_MODAL)
		return this
	}

	setItemInSessionStorage = (title = '', body = '', restProps = {}) => {
		sessionStorage.setItem(
			AUTH_MODAL,
			JSON.stringify({
				...restProps,
				[AUTH_MODAL_BODY]: body,
				[AUTH_MODAL_TITLE]: title,
			})
		)
		return this
	}

	initialize = () => {
		const item = this.getItemFromSessionStorage()
		if (item) {
			this.setState({
				[AUTH_MODAL_BODY]: <Interweave content={item[AUTH_MODAL_BODY]} />,
				[AUTH_MODAL_OPEN]: true,
				[AUTH_MODAL_TITLE]: <Interweave content={item[AUTH_MODAL_TITLE]} />,
				[AUTH_MODAL_LOADER]: true,
			})
		}
		return this
	}

	onAuthStateChange = () => {
		const item = this.getItemFromSessionStorage()
		!item && this.setState({ [AUTH_MODAL_OPEN]: false })
		return this
	}

	processRedirectResult = (
		LinkedCallBack = () => {},
		linkingCallBack = () => {}
	) => {
		const item = this.getItemFromSessionStorage()
		const {
			name1,
			name2,
			isLinked,
			provider2,
			//credential,
		} = item
		if (isLinked) {
			LinkedCallBack(name2)
			this.removeItemFromSessionStorage()
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
			this.setItemInSessionStorage('Linking...', JSXString, restProps)
			// if (provider2 === 'password') {
			// TODO allow user to create password account and link to existing social account
			// } else {
			linkingCallBack(provider2)
			//}
		}
		return this
	}
}

export default AuthModalContainer
