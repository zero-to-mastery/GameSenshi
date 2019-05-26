import { Container } from 'unstated'
import { SUBMITTING } from 'utils/signUpConstants'

import { WILL_UNMOUNT } from 'utils/commonConstants'

class SignUpContainer extends Container {
	state = {
		[SUBMITTING]: false,
		[WILL_UNMOUNT]: false,
	}
}

export default SignUpContainer
