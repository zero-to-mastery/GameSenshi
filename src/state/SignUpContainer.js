import { Container } from 'unstated'
import {
	SUBMITTING,
	EMAIL_VALID,
	PASSWORD_VALID,
	TERM_VALID,
	EMAIL_SUBMIT_ERRORS,
	PASSWORD_SUBMIT_ERRORS,
	TERM_SUBMIT_ERRORS,
} from 'utils/signUpConstants'

import { WILL_UNMOUNT } from 'utils/commonConstants'

class SignUpContainer extends Container {
	state = {
		[EMAIL_VALID]: false,
		[PASSWORD_VALID]: false,
		[TERM_VALID]: false,
		[SUBMITTING]: false,
		[WILL_UNMOUNT]: false,
		[EMAIL_SUBMIT_ERRORS]: undefined,
		[PASSWORD_SUBMIT_ERRORS]: undefined,
		[TERM_SUBMIT_ERRORS]: undefined,
	}
}

export default SignUpContainer
