import React from 'react'
import { ModalImageCropper } from './ModalImageCropper'
import { onCrop } from './utils'
import { storeShaderShow, storeShaderClose } from 'state'

const ModalImageCropperPropedSettings = props => {
	return (
		<ModalImageCropper
			onOpened={() => {
				storeShaderShow()
				console.log(123)
			}}
			onExit={storeShaderClose}
			onCrop={onCrop}
			{...props}
		/>
	)
}

export { ModalImageCropperPropedSettings }
