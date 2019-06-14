import React from 'react'
import { Modal } from 'reactstrap'
import SingInForm from '../Forms/SingInForm'

const SignInModal = () => {
	return (
		<Modal
			isOpen={this.state.modalLogin}
			toggle={this.toggleModalLogin}
			modalClassName='modal-login'>
			<SingInForm />
		</Modal>
	)
}

export default SignInModal
