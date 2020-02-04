import React, { useState, useCallback } from 'react'
import { stopUndefined } from '1_utils'
import { Exports } from '5_comp_2'

const {
	ImageUploadPropedDefaultAvatar,
	ModalImageCropperPropedSettings,
} = stopUndefined(Exports)

const UPLOADER_AVATAR_STATE_IMAGE = 'image'
const UPLOADER_AVATAR_ON_REMOVE = 'onRemove'

const UploaderAvatar = props => {
	const {
		[UPLOADER_AVATAR_STATE_IMAGE]: image,
		[UPLOADER_AVATAR_ON_REMOVE]: onRemove,
	} = props
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
			<ImageUploadPropedDefaultAvatar
				image={image}
				onRemove={onRemove}
				onSelect={onSelectImageFile}
			/>
		</>
	)
}

export {
	UploaderAvatar,
	UPLOADER_AVATAR_STATE_IMAGE,
	UPLOADER_AVATAR_ON_REMOVE,
}
