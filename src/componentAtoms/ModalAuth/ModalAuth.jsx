// the purpose of this modal is to link user social auth
import React from 'react'
import Loader from 'react-loader-spinner'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'

const MODAL_AUTH_STATE_BODY = 'body'
const MODAL_AUTH_STATE_TITLE = 'title'
const MODAL_AUTH_STATE_LOADER = 'loader'
const MODAL_AUTH_STATE_IS_OPEN = 'isOpen'
const MODAL_AUTH_TOGGLE = 'toggle'
const MODAL_AUTH_ON_CONTINUE = 'onContinue'

const ModalAuth = props => {
	const {
		[MODAL_AUTH_STATE_BODY]: body,
		[MODAL_AUTH_STATE_TITLE]: title,
		[MODAL_AUTH_STATE_LOADER]: loader,
		[MODAL_AUTH_STATE_IS_OPEN]: isOpen,
		[MODAL_AUTH_TOGGLE]: toggle,
		[MODAL_AUTH_ON_CONTINUE]: onContinue,
	} = props
	return (
		<Modal
			isOpen={isOpen}
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
			<ModalFooter
				className={`d-flex justify-content-${loader ? 'center' : 'end'}`}>
				{loader ? (
					<Loader type='Plane' color='#FFD700' height={80} width={80} />
				) : (
					<Button color='primary' onClick={onContinue}>
						Continue
					</Button>
				)}
			</ModalFooter>
		</Modal>
	)
}

export {
	ModalAuth,
	MODAL_AUTH_STATE_BODY,
	MODAL_AUTH_STATE_TITLE,
	MODAL_AUTH_STATE_LOADER,
	MODAL_AUTH_STATE_IS_OPEN,
	MODAL_AUTH_TOGGLE,
	MODAL_AUTH_ON_CONTINUE,
}
