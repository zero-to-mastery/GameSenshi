import React, { useState, useRef } from 'react'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'
const ImageCropper = props => {
	const cropperRef = useRef(null)
	const onCropping = () => {
		console.log(cropperRef.current.getCroppedCanvas().toDataURL())
	}
	return (
		<Cropper
			ref={cropperRef}
			src='http://fengyuanchen.github.io/cropper/img/picture.jpg'
			style={{ height: 400, width: '100%' }}
			// Cropper.js options
			aspectRatio={16 / 9}
			guides={false}
			crop={onCropping}
		/>
	)
}

export default ImageCropper
