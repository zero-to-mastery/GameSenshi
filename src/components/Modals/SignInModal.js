import React from 'react'

//components
import { Modal } from 'reactstrap'
import SignInForm from 'components/Forms/SignInForm'

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
						<SignInForm passwordOnly />
					</Modal>
				)
			}}
		</Subscribe>
	)
}

export default SignInModal
