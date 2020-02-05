import React, { useState, useCallback } from 'react'
import Loader from 'react-loader-spinner'
import {
	Modal as ModalRS,
	ModalBody,
	ModalFooter,
	ModalHeader,
} from 'reactstrap'
import { Exports } from '5_comp_0'
import { stopUndefined } from '1_utils'

const { Button } = stopUndefined(Exports)

const MODAL_STATE_CHILDREN = 'children'
const MODAL_STATE_TITLE = 'title'
const MODAL_STATE_LOADER = 'loader'
const MODAL_STATE_IS_OPEN = 'isOpen'
const MODAL_STATE_FOOTER = 'footer'
const MODAL_TOGGLE = 'toggle'
const MODAL_ON_CONTINUE = 'onContinue'

const Modal = props => {
	const [disabled, setDisabled] = useState(false)
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

	const onClick_ = useCallback(() => {
		setDisabled(true)
		onContinue()
	}, [onContinue])

	return (
		<ModalRS
			isOpen={isOpen}
			toggle={toggle}
			backdrop='static'
			wrapClassName='modal-backdrop'
			modalClassName='modal-black'
			className='border border-success rounded-lg'
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
				{title}
			</ModalHeader>
			<ModalBody>{children}</ModalBody>
			<ModalFooter
				className={`d-flex justify-content-${loader ? 'center' : 'end'}`}
			>
				{loader ? (
					<Loader type='Ball-Triangle' color='#FFD700' height={80} width={80} />
				) : (
					<Button color='primary' onClick={onClick_} disabled={disabled}>
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
