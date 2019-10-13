import React from 'react'
import { ModalImageCropper } from './ModalImageCropper'
import { onCrop } from './utils'

const ModalImageCropperPropedSettings = props => {
	return (
		<ModalImageCropper
			title='Set New Profile Picture'
			footer='Crop'
			onCrop={onCrop}
			{...props}
		/>
	)
}

export { ModalImageCropperPropedSettings }
