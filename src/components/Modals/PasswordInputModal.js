// the purpose of this modal is to link user social auth
import React from 'react'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'

// constants
import {
	PASSWORD_INPUT_MODAL_OPEN,
	PASSWORD_INPUT_MODAL_EMAIL,
	PASSWORD_INPUT_MODAL_CALLBACK,
	PASSWORD_INPUT_MODAL_PROVIDER,
} from 'constantValues'

// state
import { socialAuthModalStore, Subscribe } from 'state'

// toggle
const SocialAuthModal = () => {
	const toggle = () => {
		socialAuthModalStore.setState(state => {
			state[PASSWORD_INPUT_MODAL_OPEN] = !state[PASSWORD_INPUT_MODAL_OPEN]
			return state
		})
	}
	return (
		<Subscribe to={[socialAuthModalStore]}>
			{socialAuthModalStore => {
				const {
					state: {
						[PASSWORD_INPUT_MODAL_OPEN]: open,
						[PASSWORD_INPUT_MODAL_EMAIL]: email,
						[PASSWORD_INPUT_MODAL_CALLBACK]: callback,
						[PASSWORD_INPUT_MODAL_PROVIDER]: provider,
					},
				} = socialAuthModalStore
				return (
					<Modal isOpen={open} toggle={toggle} backdrop='static'>
						<div className='modal-header'>
							<button
								type='button'
								className='close'
								data-dismiss='modal'
								aria-label='Close'
								onClick={toggle}>
								<i className='tim-icons icon-simple-remove' />
							</button>
							<h5 className='modal-title'>Signing In With Password</h5>
						</div>
						<ModalBody>
							It seem like you already registered with <b>{email}</b>, we will
							try to link both of your account and
							<b>{provider}</b> social login by signing you in with password
							first then <b>{provider}</b>. Please enter your password here:
						</ModalBody>
						<ModalFooter className='d-flex justify-content-end'>
							<Button color='primary' onClick={callback}>
								Continue
							</Button>
						</ModalFooter>
					</Modal>
				)
			}}
		</Subscribe>
	)
}

export default SocialAuthModal
