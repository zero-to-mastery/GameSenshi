import React, { useRef, useCallback } from 'react'
import Image from 'material-ui-image'
import { Exports } from '5_comp_0'
import { stopUndefined } from '1_utils'
const { Button, Row, Col } = stopUndefined(Exports)

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
		<Row
			xs='1'
			align='center'
			className='fileinput w-100 h-100 '
			style={{ maxWidth: 250, maxHeight: 250 }}
		>
			<input type='file' onChange={handleImageChange} ref={fileInput} />
			<Col className='mb-2'>
				<Image
					src={image}
					alt='user avatar'
					className='thumbnail d-block'
					color='transparent'
				/>
			</Col>
			{image === defaultImage ? (
				<Col>
					<Button className='btn-round' color='primary' onClick={handleClick}>
						Edit Image
					</Button>
				</Col>
			) : (
				<>
					<Col xs='12' lg='8'>
						<Button
							baseClass='w-100'
							className='btn-round'
							color='primary'
							onClick={handleClick}
						>
							Change
						</Button>
					</Col>
					<Col xs='12' lg='8'>
						<Button
							baseClass='w-100'
							className='btn-round'
							color='danger'
							onClick={handleRemove}
						>
							<i className='fa fa-times' /> Remove
						</Button>
					</Col>
				</>
			)}
		</Row>
	)
}

export { ImageUpload, IMAGE_UPLOAD_STATE_IMAGE, IMAGE_UPLOAD_ON_REMOVE }
