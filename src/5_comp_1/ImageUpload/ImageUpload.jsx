import React, { useRef, useCallback } from 'react'
import Image from 'material-ui-image'
import { Exports } from '5_comp_0'
import { stopUndefined } from '1_utils'
const { Button } = stopUndefined(Exports)

const emptyFunction = () => {}

const IMAGE_UPLOAD_STATE_IMAGE = 'image'
const IMAGE_UPLOAD_ON_REMOVE = 'onRemove'

const ImageUpload = props => {
	const {
		onRemove,
		defaultImage,
		[IMAGE_UPLOAD_STATE_IMAGE]: image,
		onSelect,
		onClick,
	} = props
	const onRemove_ = onRemove || emptyFunction
	const onSelect_ = onSelect || emptyFunction
	const onClick_ = onClick || emptyFunction

	const fileInput = useRef(null)

	const handleImageChange = useCallback(
		e => {
			const reader = new FileReader()
			const file = e.target.files[0]
			if (file) {
				reader.onloadend = () => {
					const result = reader.result
					onSelect_(result)
				}
				reader.readAsDataURL(file)
				e.target.value = ''
			}
		},
		[onSelect_]
	)

	const handleClick = useCallback(
		e => {
			fileInput.current.click()
			onClick_(e)
		},
		[onClick_, fileInput.current]
	)

	const handleRemove = useCallback(() => {
		fileInput.current.value = null
		onRemove_()
	}, [onRemove_, fileInput.current])
	return (
		<div
			className='fileinput text-center w-100 h-100'
			style={{ maxWidth: 250, maxHeight: 250 }}
		>
			<input type='file' onChange={handleImageChange} ref={fileInput} />
			{/* Our cropper component */}
			<div className='thumbnail d-block'>
				<Image src={image} alt='user avatar' />
			</div>
			<div>
				{image === defaultImage ? (
					<Button
						className='w-100 btn-round'
						color='primary'
						onClick={handleClick}
					>
						Edit Image
					</Button>
				) : (
					<span>
						<Button
							className='w-100 btn-round'
							color='primary'
							onClick={handleClick}
						>
							Change
						</Button>
						<br />
						<Button
							className='w-100 btn-round'
							color='danger'
							onClick={handleRemove}
						>
							<i className='fa fa-times' /> Remove
						</Button>
					</span>
				)}
			</div>
		</div>
	)
}

export { ImageUpload, IMAGE_UPLOAD_STATE_IMAGE, IMAGE_UPLOAD_ON_REMOVE }
