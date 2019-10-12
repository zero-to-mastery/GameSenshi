import React, { useRef, useCallback, useState } from 'react'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'
import { ExportAtoms } from 'componentAtoms'
import { stopUndefined } from 'utils'

const { ModalCommon } = stopUndefined(ExportAtoms)
const emptyFunction = () => {}
const ModalImageCropper = props => {
	const { isOpen, src, toggle, onCrop, title, footer } = props
	const onCrop_ = onCrop || emptyFunction
	const cropperRef = useRef(null)
	const { dataUrl, setDataUrl } = useState('')

	const crop = useCallback(() => {
		setDataUrl(cropperRef.current.cropper.getCroppedCanvas().toDataURL())
	}, [])

	const onContinue = useCallback(
		e => {
			// e is normally not needed but incase some need it
			onCrop_(dataUrl, e)
		},
		[onCrop_, dataUrl]
	)

	return (
		<ModalCommon
			title={title}
			isOpen={isOpen}
			toggle={toggle}
			footer={footer}
			onContinue={onContinue}>
			<Cropper
				ref={cropperRef}
				src={src}
				style={{ height: '100%', width: '100%' }}
				// Cropper.js options
				aspectRatio={1}
				crop={crop}
			/>
		</ModalCommon>
	)
}

export { ModalImageCropper }
