import React from 'react'
import { ModalImageCropper } from 'componentMolecules/ModalImageCropper/ModalImageCropper'
import { onCrop } from 'componentMolecules/ModalImageCropper/utils'

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
