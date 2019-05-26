import { Container } from 'unstated'
import {
	EMAIL,
	PASSWORD,
	TERM,
	EMAIL_VALID,
	PASSWORD_VALID,
	TERM_VALID,
	SUBMITTING,
} from 'utils/signUpConstants'

import { WILL_UNMOUNT } from 'utils/commonConstants'

class SignUpContainer extends Container {
	state = {
		[EMAIL]: '',
		[PASSWORD]: '',
		[TERM]: false,
		[EMAIL_VALID]: false,
		[PASSWORD_VALID]: false,
		[TERM_VALID]: false,
		[SUBMITTING]: false,
		[WILL_UNMOUNT]: false,
	}
}

export default SignUpContainer
