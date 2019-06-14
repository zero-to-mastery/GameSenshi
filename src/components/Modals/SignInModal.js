import React from 'react'

//components
import { Modal } from 'reactstrap'
import SingInForm from 'components/Forms/SingInForm'

//state
import { signInModalStore, Subscribe } from 'state'

import { SIGN_IN_MODAL_OPEN } from 'constantValues'

const SignInModal = () => {
	return (
		<Subscribe to={[signInModalStore]}>
			{signInModalStore => {
				const {
					state: { [SIGN_IN_MODAL_OPEN]: open, toggle },
				} = signInModalStore
				return (
					<Modal isOpen={open} toggle={toggle} modalClassName='modal-login'>
						<SingInForm passwordOnly />
					</Modal>
				)
			}}
		</Subscribe>
	)
}

export default SignInModal
