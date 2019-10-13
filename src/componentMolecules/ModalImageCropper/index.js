import React from 'react'
import { ModalImageCropper } from './ModalImageCropper'
import { onCrop } from './utils'

const ModalImageCropperPropedSettings = props => {
	return (
		<ModalImageCropper
			title='Set New Profile Picture'
			footer='Crop and Update Profile Image'
			onCrop={onCrop}
			{...props}
		/>
	)
}

export { ModalImageCropperPropedSettings }
