import React from 'react'
import { ModalImageCropper } from 'componentAtoms/ModalImageCropper/ModalImageCropper'
import { onCrop } from 'componentAtoms/ModalImageCropper/utils'

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
