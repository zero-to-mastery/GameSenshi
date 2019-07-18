import { Container } from 'unstated'

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

const defaultValues = {
	[USER]: '',
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

	initialize = () => {
		const user = JSON.parse(localStorage.getItem(USER))
		// purposely set state in sync so that it show correct navBar on first rendering
		// firebase need like 2 seconds to finish sign in, too long
		if (user) {
			this.state = { ...this.state, ...user, [USER_SIGNED_IN]: true }
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
			// do not store sensitive information in localStorage
			localStorage.setItem(
				USER,
				JSON.stringify({
					...user,
				})
			)
		} else {
			// User signed out.
			localStorage.removeItem(USER)
		}
		return this
	}
}

export default UserContainer
