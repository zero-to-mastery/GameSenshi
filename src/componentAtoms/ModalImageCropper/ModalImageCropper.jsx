import React, { useRef } from 'react'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'
// components
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'
// state management
import { storeUser, STORE_USER_STATE_AVATAR_URL } from 'state'

const ModalImageCropper = props => {
	const { isOpen, src, setIsOpen, toggle } = props
	const cropperRef = useRef(null)

	const onCropping = () => {
		const dataUrl = cropperRef.current.cropper.getCroppedCanvas().toDataURL()
		storeUser.setState({ [STORE_USER_STATE_AVATAR_URL]: dataUrl })
		setIsOpen(false)
	}
	return (
		<Modal
			isOpen={isOpen}
			toggle={toggle}
			backdrop='static'
			modalClassName='modal-black '>
			<ModalBody>
				<Cropper
					className='justify-content-center'
					ref={cropperRef}
					src={src}
					style={{ height: '100%', width: '100%' }}
					// Cropper.js options
					aspectRatio={1}
				/>
			</ModalBody>
			<ModalFooter>
				<Button color='success' onClick={() => onCropping()}>
					Set new profile picture
				</Button>
			</ModalFooter>
		</Modal>
	)
}

export { ModalImageCropper }
