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

	const [dataUrl, setDataUrl] = useState('')
	const cropperRef = useRef(null)
	const timeoutId = useRef(-1)

	const crop = useCallback(() => {
		// if setState here cause lagness, too much setState with each movement
		// setTimeout is added, the more timeout, the smoother
		// TODO need a better solution
		clearTimeout(timeoutId)
		timeoutId.current = setTimeout(() => {
			setDataUrl(cropperRef.current.cropper.getCroppedCanvas().toDataURL())
		}, 100)
	}, [])

	const onContinue = useCallback(
		e => {
			// e is normally not needed but incase some need it
			onCrop_(dataUrl, toggle, e)
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
