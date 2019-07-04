// the purpose of this modal is to link user social auth
import React from 'react'
import Loader from 'react-loader-spinner'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'

// constants
import {
	AUTH_MODAL_BODY,
	AUTH_MODAL_OPEN,
	AUTH_MODAL_TITLE,
	AUTH_MODAL_LOADER,
	AUTH_MODAL_CALLBACK,
} from 'constantValues'

// state
import { authModalStore, Subscribe } from 'state'

// toggle
const AuthModal = () => {
	return (
		<Subscribe to={[authModalStore]}>
			{authModalStore => {
				const {
					state: {
						[AUTH_MODAL_BODY]: body,
						[AUTH_MODAL_OPEN]: open,
						[AUTH_MODAL_TITLE]: title,
						[AUTH_MODAL_CALLBACK]: callback,
						[AUTH_MODAL_LOADER]: loader,
					},
					toggle,
				} = authModalStore
				return (
					<Modal
						isOpen={open}
						toggle={toggle}
						backdrop='static'
						modalClassName='modal-black'>
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

export default AuthModal
