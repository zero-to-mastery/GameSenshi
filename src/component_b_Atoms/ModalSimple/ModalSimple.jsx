import React from 'react'
import { Modal } from 'reactstrap'

const ModalSimple = props => {
	const { isOpen, toggle, children } = props
	return (
		<Modal
			backdrop='static'
			isOpen={isOpen}
			toggle={toggle}
			wrapClassName='modal-backdrop'
			fade
		>
			<div align='right' style={{ height: '0' }} className='p-0 fixed-top'>
				<button
					type='button'
					className='close mt-2 mr-2'
					data-dismiss='modal'
					aria-label='Close'
					onClick={toggle}
				>
					<i className='tim-icons icon-simple-remove text-primary' />
				</button>
			</div>
			{children}
		</Modal>
	)
}

export { ModalSimple }
