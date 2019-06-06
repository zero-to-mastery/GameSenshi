// the purpose of this modal is to link user social auth
import React from 'react'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'

// constants
import {
	SOCIAL_SIGN_UP_MODAL_OPEN,
	SOCIAL_SIGN_UP_MODAL_TITLE,
	SOCIAL_SIGN_UP_MODAL_CALLBACK,
	SOCIAL_SIGN_UP_MODAL_PROVIDER_1,
	SOCIAL_SIGN_UP_MODAL_PROVIDER_2,
} from 'constantValues'

// state
import { modalStore, Subscribe } from 'state'

// toggle
const SocialAuthSignUpModal = () => {
	const toggle = () => {
		modalStore.setState(state => {
			state[SOCIAL_SIGN_UP_MODAL_OPEN] = !state[SOCIAL_SIGN_UP_MODAL_OPEN]
			return state
		})
	}
	return (
		<Subscribe to={[modalStore]}>
			{modalStore => {
				const {
					state: {
						[SOCIAL_SIGN_UP_MODAL_OPEN]: open,
						[SOCIAL_SIGN_UP_MODAL_TITLE]: title,
						[SOCIAL_SIGN_UP_MODAL_CALLBACK]: callback,
						[SOCIAL_SIGN_UP_MODAL_PROVIDER_1]: provider1,
						[SOCIAL_SIGN_UP_MODAL_PROVIDER_2]: provider2,
					},
				} = modalStore
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
							<h5 className='modal-title'>{title}</h5>
						</div>
						<ModalBody>
							It seem like you already registered with <b>{provider1}</b>, we
							will now try to link both your <b>{provider1}</b> and{' '}
							<b>{provider2}</b> social login by signing you in with{' '}
							<b>{provider1}</b> first then <b>{provider2}</b>.
						</ModalBody>
						<ModalFooter>
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

export default SocialAuthSignUpModal
