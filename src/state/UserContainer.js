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
	DEFAULT_AVATAR_URL,
} from 'constantValues'

const defaultValues = {
	[USER_UID]: '',
	[USER_EMAIL]: '',
	[USER_GENDER]: '',
	[USER_COUNTRY]: '',
	[USER_LANGUAGES]: ['English', 'French'],
	[USER_PHOTO_URL]: '',
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

	onAuthStateChanged = (
		signInData = {
			[USER_DISPLAY_NAME]: '',
			[USER_EMAIL_IS_VERIFIED]: '',
			[USER_PHOTO_URL]: '',
			[USER_UID]: '',
			[USER_EMAIL]: '',
			[USER_PHONE_NUMBER]: '',
			[USER_PROVIDER_DATA]: '',
			[USER_SIGNED_IN]: '',
		}
	) => {
		if (signInData) {
			const user = {
				[USER_DISPLAY_NAME]: signInData[USER_DISPLAY_NAME],
				[USER_EMAIL_IS_VERIFIED]: signInData[USER_EMAIL_IS_VERIFIED],
				[USER_PHOTO_URL]:
					signInData[USER_PHOTO_URL] || process.env[DEFAULT_AVATAR_URL], //fallback,
				[USER_UID]: signInData[USER_UID],
			}
			this.setState(state => {
				return {
					...state,
					...user,
					[USER_EMAIL]: signInData[USER_EMAIL],
					[USER_PHONE_NUMBER]: signInData[USER_PHONE_NUMBER],
					[USER_PROVIDER_DATA]: signInData[USER_PROVIDER_DATA],
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
