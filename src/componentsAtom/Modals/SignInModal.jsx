import React from 'react'

//components
import { Modal } from 'reactstrap'
import SignInForm from 'componentsAtom/Forms/SignInForm'

//state
import { signInStore, Subscribe } from 'state'

import { SIGN_IN_OPEN } from 'constantValues'

const SignInModal = () => {
	return (
		<Subscribe to={[signInStore]}>
			{signInStore => {
				const {
					state: { [SIGN_IN_OPEN]: open, toggle },
				} = signInStore
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
