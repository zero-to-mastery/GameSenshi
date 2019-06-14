// the purpose of this modal is to link user social auth
import React from 'react'
import Loader from 'react-loader-spinner'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'

// constants
import {
	SOCIAL_AUTH_MODAL_BODY,
	SOCIAL_AUTH_MODAL_OPEN,
	SOCIAL_AUTH_MODAL_TITLE,
	SOCIAL_AUTH_MODAL_LOADER,
	SOCIAL_AUTH_MODAL_CALLBACK,
} from 'constantValues'

// state
import { socialAuthModalStore, Subscribe } from 'state'

// toggle
const SocialAuthModal = () => {
	return (
		<Subscribe to={[socialAuthModalStore]}>
			{socialAuthModalStore => {
				const {
					state: {
						[SOCIAL_AUTH_MODAL_BODY]: body,
						[SOCIAL_AUTH_MODAL_OPEN]: open,
						[SOCIAL_AUTH_MODAL_TITLE]: title,
						[SOCIAL_AUTH_MODAL_CALLBACK]: callback,
						[SOCIAL_AUTH_MODAL_LOADER]: loader,
					},
					toggle,
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
							<h5 className='modal-title'>{title}</h5>
						</div>
						<ModalBody>{body}</ModalBody>
						{loader ? (
							<ModalFooter className='d-flex justify-content-center'>
								<Loader type='Plane' color='#FFD700' height={80} width={80} />
							</ModalFooter>
						) : (
							<ModalFooter className='d-flex justify-content-end'>
								<Button color='primary' onClick={callback}>
									Continue
								</Button>
							</ModalFooter>
						)}
					</Modal>
				)
			}}
		</Subscribe>
	)
}

export default SocialAuthModal
