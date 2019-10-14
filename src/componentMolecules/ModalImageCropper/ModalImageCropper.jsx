import React, { useRef, useCallback, useState, useEffect } from 'react'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'
import { ExportAtoms } from 'componentAtoms'
import { stopUndefined } from 'utils'

const { ModalCommon } = stopUndefined(ExportAtoms)
const emptyFunction = () => {}
const ModalImageCropper = props => {
	const { src, toggle, onCrop, ...otherProps } = props
	const onCrop_ = onCrop || emptyFunction

	const [dataUrl, setDataUrl] = useState('')
	const cropperRef = useRef(null)
	const timeoutId = useRef(-1)

	const crop = useCallback(() => {
		// setState here cause lagness due too much setState with each movement
		// setTimeout is added, the more timeout, the smoother
		// the lag is less noticeable as built files
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
		<ModalCommon
			title='Set New Profile Picture'
			footer='Crop and Update Profile Image'
			toggle={toggle}
			onContinue={onContinue}
			{...otherProps}>
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
