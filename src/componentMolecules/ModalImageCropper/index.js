import React from 'react'
import { ModalImageCropper } from './ModalImageCropper'
import { onCrop } from './utils'

const ModalImageCropperPropedSettings = props => {
	return <ModalImageCropper onCrop={onCrop} {...props} />
}

export { ModalImageCropperPropedSettings }
