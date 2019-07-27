import { Container } from 'unstated'
import { STATE, SET_STATE, RESET_STATE } from 'state/constants'

import {
	USER,
	USER_UID,
	USER_EMAIL,
	USER_GENDER,
	USER_COUNTRY,
	USER_LANGUAGES,
	USER_PHOTO_URL,
	USER_SIGNED_IN,
	USER_BIRTH_DATE,
	USER_DISPLAY_NAME,
	USER_PHONE_NUMBER,
	USER_PROVIDER_DATA,
	USER_EMAIL_IS_VERIFIED,
} from 'constantValues'

import defaultAvatar from 'assets/img/placeholder.jpg'

const STORE_USER_STATE_IS_SIGNING_IN = 'isSigningIn'
const STORE_USER_SET_IS_SIGNING_IN = 'isSigningIn'

const defaultValues = {
	[USER]: '',
	[STORE_USER_STATE_IS_SIGNING_IN]: false,
	[USER_UID]: '',
	[USER_EMAIL]: '',
	[USER_GENDER]: '',
	[USER_COUNTRY]: '',
	[USER_LANGUAGES]: ['English'],
	[USER_PHOTO_URL]: defaultAvatar,
	[USER_SIGNED_IN]: false,
	[USER_BIRTH_DATE]: new Date(2000, 0, 1),
	[USER_DISPLAY_NAME]: '',
	[USER_PHONE_NUMBER]: '',
	[USER_PROVIDER_DATA]: [],
	[USER_EMAIL_IS_VERIFIED]: false,
}

class UserContainer extends Container {
	state = defaultValues

	resetState = () => {
		this.setState(defaultValues)
		return this
	}

	initialize = (onAutoSignedInFailed = () => {}) => {
		const user = JSON.parse(localStorage.getItem(USER))
		// purposely set state in sync so that it show correct navBar on first rendering
		// firebase need like 2 seconds to finish sign in, too long
		if (user) {
			this.state = {
				...this.state,
				...user,
			}
		}
		this[STORE_USER_SET_IS_SIGNING_IN](true, onAutoSignedInFailed)
		return this
	};

	[STORE_USER_SET_IS_SIGNING_IN] = (
		value = false,
		onAutoSignedInFailed = () => {}
	) => {
		this[SET_STATE]({ [STORE_USER_STATE_IS_SIGNING_IN]: value })
		if (value) {
			setTimeout(() => {
				if (this[STATE][STORE_USER_STATE_IS_SIGNING_IN]) {
					onAutoSignedInFailed()
				}
				this[STORE_USER_SET_IS_SIGNING_IN](false)
			}, 10000)
		}
		return this
	}

	onSignUpWithPassword = (username, email) => {
		this.setState({
			[USER_DISPLAY_NAME]: username,
			[USER_EMAIL]: email,
			[USER_SIGNED_IN]: true,
		})

		return this
	}

	resetProfileImage = () => {
		this.setState({ [USER_PHOTO_URL]: defaultAvatar })
		return this
	}

	onAuthStateChanged = (signedInUser = {}) => {
		if (signedInUser) {
			const user = {
				[USER_DISPLAY_NAME]: signedInUser[USER_DISPLAY_NAME],
				[USER_EMAIL_IS_VERIFIED]: signedInUser[USER_EMAIL_IS_VERIFIED],
				[USER_PHOTO_URL]: signedInUser[USER_PHOTO_URL] || defaultAvatar,
				[USER_UID]: signedInUser[USER_UID],
			}
			this.setState(state => {
				return {
					...state,
					...user,
					[USER]: signedInUser,
					[USER_EMAIL]: signedInUser[USER_EMAIL],
					[USER_PHONE_NUMBER]: signedInUser[USER_PHONE_NUMBER],
					[USER_PROVIDER_DATA]: signedInUser[USER_PROVIDER_DATA],
					[USER_SIGNED_IN]: true,
				}
			})
			this[STORE_USER_SET_IS_SIGNING_IN](false)
			// do not store sensitive information in localStorage
			localStorage.setItem(
				USER,
				JSON.stringify({
					...user,
				})
			)
		} else {
			// User signed out.
			this[RESET_STATE]()
			this[STORE_USER_SET_IS_SIGNING_IN](false)
			localStorage.removeItem(USER)
		}
		return this
	}
}

export {
	UserContainer,
	STORE_USER_STATE_IS_SIGNING_IN,
	STORE_USER_SET_IS_SIGNING_IN,
}
