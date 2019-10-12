import React, { useState, useCallback } from 'react'
import { stopUndefined } from 'utils'
import { ExportMolecules } from 'componentMolecules'

const {
	AvatarUserStoreUserPropedSettings,
	ModalImageCropperPropedSettings,
} = stopUndefined(ExportMolecules)

const UploaderUserAvatar = () => {
	const [imageDataUrl, setImageDataUrl] = useState('')
	const [openCropper, setOpenCropper] = useState(false)

	const onSelectImageFile = useCallback(imageDataUrl => {
		setImageDataUrl(imageDataUrl)
		setOpenCropper(true)
	}, [])

	const toggleCropper = useCallback(() => {
		setOpenCropper(state => !state)
	}, [])

	return (
		<>
			<ModalImageCropperPropedSettings
				isOpen={openCropper}
				toggle={toggleCropper}
				src={imageDataUrl}
			/>
			<AvatarUserStoreUserPropedSettings onSelect={onSelectImageFile} />
		</>
	)
}

export { UploaderUserAvatar }
