import { Container } from 'unstated'

import {
	SOCIAL_AUTH_MODAL_BODY,
	SOCIAL_AUTH_MODAL_OPEN,
	SOCIAL_AUTH_MODAL_TITLE,
	SOCIAL_AUTH_MODAL_CALLBACK,
	SOCIAL_AUTH_MODAL_PROVIDER_1,
	SOCIAL_AUTH_MODAL_PROVIDER_2,
} from 'constantValues'

class SocialAuthModalContainer extends Container {
	state = {
		[SOCIAL_AUTH_MODAL_BODY]: '',
		[SOCIAL_AUTH_MODAL_TITLE]: '',
		[SOCIAL_AUTH_MODAL_OPEN]: false,
		[SOCIAL_AUTH_MODAL_CALLBACK]: () => {},
		[SOCIAL_AUTH_MODAL_PROVIDER_1]: '',
		[SOCIAL_AUTH_MODAL_PROVIDER_2]: '',
	}
}

export default SocialAuthModalContainer
