import { Container } from 'unstated'

import {
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
		return this.setState(defaultValues)
	}
	initialize = () => {
		const user = JSON.parse(localStorage.getItem('user'))
		// purposely set state in sync so that it show correct navBar on first rendering
		// firebase need like 2 seconds to finish sign in, too long
		if (user) {
			this.state = { ...this.state, ...user, [USER_SIGNED_IN]: true }
		}
		return this
	}
}

export default UserContainer
