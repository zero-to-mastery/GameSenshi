import React, { useState, useRef } from 'react'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'
// components
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'

const ImageCropper = props => {
	const cropperRef = useRef(null)

	const onCropping = () => {
		console.log(cropperRef.current.getCroppedCanvas().toDataURL())
	}
	return (
		<Modal>
			<ModalBody>
				<Cropper
					ref={cropperRef}
					src='http://fengyuanchen.github.io/cropper/img/picture.jpg'
					style={{ height: 400, width: '100%' }}
					// Cropper.js options
					aspectRatio={16 / 9}
					guides={false}
					crop={onCropping}
				/>
			</ModalBody>
			<ModalFooter>
				<Button color='primary'>Set new profile picture</Button>{' '}
			</ModalFooter>
		</Modal>
	)
}

export default ImageCropper
