import { Container } from 'unstated'

class SignUpContainer extends Container {
	state = {
		validating: true,
		delay: 0,
		timeOutID: 0,
	}
}

export default SignUpContainer
