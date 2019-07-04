import React from 'react'
import { Container } from 'unstated'
import Interweave from 'interweave'
import reactElementToJSXString from 'react-element-to-jsx-string'

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

class AuthModalContainer extends Container {
	state = defaultValues

	toggle = () => {
		this.setState(state => {
			state[MODAL_OPEN] = !state[MODAL_OPEN]
			return state
		})
		return this
	}
	resetState = () => {
		this.setState(defaultValues)
		return this
	}
	close = () => {
		this.setState({ [MODAL_OPEN]: false })
		return this
	}
	show = (
		body = '',
		title = '',
		loader = false,
		afterContinueCallback = () => {}
	) => {
		this.setState({
			[MODAL_OPEN]: true,
			[MODAL_BODY]: body,
			[MODAL_TITLE]: title,
			[MODAL_LOADER]: loader,
			[MODAL_CALLBACK]: afterContinueCallback,
		})
	}

	getItemFromSessionStorage = () =>
		JSON.parse(sessionStorage.getItem('authModal'))

	removeItemFromSessionStorage = () => {
		sessionStorage.removeItem('authModal')
		return this
	}

	setItemInSessionStorage = (restProps = {}, title = '', body = '') => {
		sessionStorage.setItem(
			'authModal',
			JSON.stringify({
				...restProps,
				[MODAL_BODY]: body,
				[MODAL_TITLE]: title,
			})
		)
		return this
	}

	initialize = () => {
		const item = this.getItemFromSessionStorage()
		if (item) {
			this.setState({
				[MODAL_BODY]: <Interweave content={item[MODAL_BODY]} />,
				[MODAL_OPEN]: true,
				[MODAL_TITLE]: <Interweave content={item[MODAL_TITLE]} />,
				[MODAL_LOADER]: true,
			})
		}
		return this
	}

	onAuthStateChange = () => {
		const item = this.getItemFromSessionStorage()
		!item && this.setState({ [MODAL_OPEN]: false })
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
			this.setItemInSessionStorage(
				{
					...item,
					isLinked: true,
				},
				'Linking...',
				JSXString
			)
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
