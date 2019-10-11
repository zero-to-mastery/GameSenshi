import React, { useState, useRef } from 'react'
import { firebaseDefaultStorage, auth } from 'firebaseInit'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'
// components
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'
// state management
import { storeUser, STORE_USER_STATE_AVATAR_URL } from 'state'

const ImageCropper = props => {
	const { isOpen, src, setIsOpen } = props
	const cropperRef = useRef(null)

	const onCropping = () => {
		const dataUrl = cropperRef.current.cropper.getCroppedCanvas().toDataURL()
		storeUser.setState({ [STORE_USER_STATE_AVATAR_URL]: dataUrl })
		setIsOpen(false)
	}
	return (
		<Modal isOpen={isOpen}>
			<ModalBody>
				<Cropper
					ref={cropperRef}
					src={src}
					style={{ height: 300, width: 400 }}
					// Cropper.js options
					aspectRatio={16 / 9}
					autoCropArea={0}
					strict={false}
					highlight={false}
					cropBoxMovable={false}
					cropBoxResizable={false}
					guides={false}
				/>
			</ModalBody>
			<ModalFooter>
				<Button color='success' onClick={() => onCropping()}>
					Set new profile picture
				</Button>{' '}
			</ModalFooter>
		</Modal>
	)
}

export { ImageCropper }
