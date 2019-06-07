import { Container } from 'unstated'

import {
	PASSWORD_INPUT_MODAL_OPEN,
	PASSWORD_INPUT_MODAL_EMAIL,
	PASSWORD_INPUT_MODAL_CALLBACK,
	PASSWORD_INPUT_MODAL_PROVIDER,
} from 'constantValues'

class PasswordInputModalContainer extends Container {
	state = {
		[PASSWORD_INPUT_MODAL_OPEN]: false,
		[PASSWORD_INPUT_MODAL_EMAIL]: '',
		[PASSWORD_INPUT_MODAL_CALLBACK]: () => {},
		[PASSWORD_INPUT_MODAL_PROVIDER]: '',
	}
}

export default PasswordInputModalContainer
