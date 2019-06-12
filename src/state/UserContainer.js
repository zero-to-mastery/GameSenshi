import { Container } from 'unstated'

import {
	USER_UID,
	USER_EMAIL,
	USER_PHOTO_URL,
	USER_SIGNED_IN,
	USER_DISPLAY_NAME,
	USER_EMAIL_IS_VERIFIED,
} from 'constantValues'

class UserContainer extends Container {
	state = {
		[USER_UID]: '',
		[USER_EMAIL]: '',
		[USER_PHOTO_URL]: '',
		[USER_SIGNED_IN]: false,
		[USER_DISPLAY_NAME]: '',
		[USER_EMAIL_IS_VERIFIED]: false,
	}
}

export default UserContainer
