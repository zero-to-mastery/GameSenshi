import { Container } from 'unstated'

import {
	SOCIAL_SIGN_UP_MODAL_OPEN,
	SOCIAL_SIGN_UP_MODAL_TITLE,
	SOCIAL_SIGN_UP_MODAL_CALLBACK,
	SOCIAL_SIGN_UP_MODAL_PROVIDER_1,
	SOCIAL_SIGN_UP_MODAL_PROVIDER_2,
} from 'constantValues'

class SocialAuthSignUpModalContainer extends Container {
	state = {
		[SOCIAL_SIGN_UP_MODAL_TITLE]: '',
		[SOCIAL_SIGN_UP_MODAL_OPEN]: false,
		[SOCIAL_SIGN_UP_MODAL_CALLBACK]: () => {},
		[SOCIAL_SIGN_UP_MODAL_PROVIDER_1]: '',
		[SOCIAL_SIGN_UP_MODAL_PROVIDER_2]: '',
	}
}

export default SocialAuthSignUpModalContainer
