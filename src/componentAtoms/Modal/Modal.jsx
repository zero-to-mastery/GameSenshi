// the purpose of this modal is to link user social auth
import React from 'react'
import Loader from 'react-loader-spinner'
import {
	Modal as ModalRS,
	ModalBody,
	ModalFooter,
	ModalHeader,
} from 'reactstrap'
import { Exports } from 'componentaProton'
import { stopUndefined } from 'utils'

const { Button } = stopUndefined(Exports)

const MODAL_STATE_CHILDREN = 'children'
const MODAL_STATE_TITLE = 'title'
const MODAL_STATE_LOADER = 'loader'
const MODAL_STATE_IS_OPEN = 'isOpen'
const MODAL_STATE_FOOTER = 'footer'
const MODAL_TOGGLE = 'toggle'
const MODAL_ON_CONTINUE = 'onContinue'

const Modal = props => {
	const {
		[MODAL_STATE_CHILDREN]: children,
		[MODAL_STATE_TITLE]: title,
		[MODAL_STATE_LOADER]: loader,
		[MODAL_STATE_IS_OPEN]: isOpen,
		[MODAL_TOGGLE]: toggle,
		[MODAL_ON_CONTINUE]: onContinue,
		[MODAL_STATE_FOOTER]: footer,
		...otherProps
	} = props

	return (
		<ModalRS
			isOpen={isOpen}
			toggle={toggle}
			backdrop='static'
			wrapClassName='modal-backdrop'
			modalClassName='modal-black'
			style={{ border: '1px solid #00d6d1', borderRadius: '5px' }}
			{...otherProps}
		>
			<ModalHeader>
				<button
					type='button'
					className='close'
					data-dismiss='modal'
					aria-label='Close'
					onClick={toggle}
				>
					<i className='tim-icons icon-simple-remove' />
				</button>
				<h5 className='modal-title'>{title}</h5>
			</ModalHeader>
			<ModalBody>{children}</ModalBody>
			<ModalFooter
				className={`d-flex justify-content-${loader ? 'center' : 'end'}`}
			>
				{loader ? (
					<Loader type='Ball-Triangle' color='#FFD700' height={80} width={80} />
				) : (
					<Button color='primary' onClick={onContinue}>
						{footer}
					</Button>
				)}
			</ModalFooter>
		</ModalRS>
	)
}

export {
	Modal,
	MODAL_STATE_CHILDREN,
	MODAL_STATE_TITLE,
	MODAL_STATE_LOADER,
	MODAL_STATE_IS_OPEN,
	MODAL_TOGGLE,
	MODAL_ON_CONTINUE,
	MODAL_STATE_FOOTER,
}
