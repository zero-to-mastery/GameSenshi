// the purpose of this modal is to link user social auth
import React from 'react'
import Loader from 'react-loader-spinner'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'

const MODAL_COMMON_STATE_BODY = 'body'
const MODAL_COMMON_STATE_TITLE = 'title'
const MODAL_COMMON_STATE_LOADER = 'loader'
const MODAL_COMMON_STATE_OPEN = 'isOpen'
const MODAL_COMMON_STATE_FOOTER = 'footer'
const MODAL_COMMON_TOGGLE = 'toggle'
const MODAL_COMMON_ON_CONTINUE = 'onContinue'

const ModalCommon = props => {
	const {
		[MODAL_COMMON_STATE_BODY]: body,
		[MODAL_COMMON_STATE_TITLE]: title,
		[MODAL_COMMON_STATE_LOADER]: loader,
		[MODAL_COMMON_STATE_OPEN]: isOpen,
		[MODAL_COMMON_TOGGLE]: toggle,
		[MODAL_COMMON_ON_CONTINUE]: onContinue,
		[MODAL_COMMON_STATE_FOOTER]: footer,
		children,
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
			<ModalBody>
				{body}
				{children}
			</ModalBody>
			<ModalFooter
				className={`d-flex justify-content-${loader ? 'center' : 'end'}`}>
				{loader ? (
					<Loader type='Plane' color='#FFD700' height={80} width={80} />
				) : (
					<Button color='primary' onClick={onContinue}>
						{footer}
					</Button>
				)}
			</ModalFooter>
		</Modal>
	)
}

export {
	ModalCommon,
	MODAL_COMMON_STATE_BODY,
	MODAL_COMMON_STATE_TITLE,
	MODAL_COMMON_STATE_LOADER,
	MODAL_COMMON_STATE_OPEN,
	MODAL_COMMON_TOGGLE,
	MODAL_COMMON_ON_CONTINUE,
	MODAL_COMMON_STATE_FOOTER,
}
