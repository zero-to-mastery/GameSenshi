import React, { useRef, useCallback, useState } from 'react'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'
import { ExportAtoms } from 'componentAtoms'
import { stopUndefined } from 'utils'

const { ModalCommonStoreModalPropedImageCropper } = stopUndefined(ExportAtoms)
const emptyFunction = () => {}
const ModalImageCropper = props => {
	const { isOpen, src, toggle, onCrop, title, footer } = props
	const onCrop_ = onCrop || emptyFunction

	const [dataUrl, setDataUrl] = useState('')
	const cropperRef = useRef(null)
	const timeoutId = useRef(-1)

	const crop = useCallback(() => {
		// setState here cause lagness due too much setState with each movement
		// setTimeout is added, the more timeout, the smoother
		// the lag is more unnoticeable after build
		// TODO need a better solution
		clearTimeout(timeoutId.current)
		timeoutId.current = setTimeout(() => {
			setDataUrl(cropperRef.current.cropper.getCroppedCanvas().toDataURL())
		}, 500)
	}, [])

	const onContinue = useCallback(
		e => {
			// e is normally not needed but incase some need it
			onCrop_(dataUrl, toggle, e)
		},
		[onCrop_, dataUrl]
	)

	return (
		<ModalCommonStoreModalPropedImageCropper
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
		</ModalCommonStoreModalPropedImageCropper>
	)
}

export { ModalImageCropper }
