import React, { useState, useCallback } from 'react'
import { stopUndefined } from 'utils'
import { Exports } from 'componentMolecules'

const {
	ImageUploadStoreUserPropedSettings,
	ModalImageCropperPropedSettings,
} = stopUndefined(Exports)

const UploaderUserAvatar = () => {
	const [imageDataUrl, setImageDataUrl] = useState('')
	const [openCropper, setOpenCropper] = useState(false)

	const onSelectImageFile = useCallback(
		imageDataUrl => {
			setImageDataUrl(imageDataUrl)
			setOpenCropper(true)
		},
		[imageDataUrl]
	)

	const toggleCropper = useCallback(() => {
		setOpenCropper(!openCropper)
	}, [])

	return (
		<>
			<ModalImageCropperPropedSettings
				isOpen={openCropper}
				toggle={toggleCropper}
				src={imageDataUrl}
			/>
			<ImageUploadStoreUserPropedSettings onSelect={onSelectImageFile} />
		</>
	)
}

export { UploaderUserAvatar }
