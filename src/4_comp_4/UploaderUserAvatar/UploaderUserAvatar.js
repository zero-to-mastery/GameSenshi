import React, { useState, useCallback } from 'react'
import { stopUndefined } from '1_utils'
import { Exports } from '5_comp_2'

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
	}, [openCropper])

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
