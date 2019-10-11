import React, { useState, useRef } from 'react'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'
// components
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'

const ImageCropper = props => {
	const { isOpen, src, forwardedRef, setIsOpen } = props

	const onCropping = () => {
		// setIsOpen(false)
	}
	return (
		<Modal isOpen={isOpen}>
			<ModalBody>
				<Cropper
					ref={forwardedRef}
					src={src}
					style={{ height: 300, width: 400 }}
					// Cropper.js options
					aspectRatio={16 / 9}
					guides={false}
					crop={onCropping}
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
