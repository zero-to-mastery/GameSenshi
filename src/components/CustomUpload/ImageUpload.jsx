import React, { useState, useRef } from 'react'
// state management
import { userStore, Subscribe } from 'state'
//component
import { Button } from 'reactstrap'
//constant
import { USER_PHOTO_URL } from 'constantValues'
import defaultAvatar from 'assets/img/placeholder.jpg'

const ImageUpload = props => {
	const fileInput = useRef(null)

	const handleImageChange = e => {
		e.preventDefault()
		let reader = new FileReader()
		let file = e.target.files[0]
		reader.onloadend = () => {
			userStore.setState({ [USER_PHOTO_URL]: reader.result })
		}
		if (file) {
			reader.readAsDataURL(file)
		}
	}
	const handleSubmit = e => {
		e.preventDefault()
		// this.state.file is the file/image uploaded
		// in this function you can save the image (this.state.file) on form submit
		// you have to call it yourself
	}
	const handleClick = () => {
		fileInput.current.click()
	}
	const handleRemove = () => {
		userStore.setState({ [USER_PHOTO_URL]: defaultAvatar })
		fileInput.current.value = null
	}
	return (
		<Subscribe to={[userStore]}>
			{userStore => {
				const {
					state: { [USER_PHOTO_URL]: imagePreviewUrl },
				} = userStore
				return (
					<div className='fileinput text-center'>
						<input type='file' onChange={handleImageChange} ref={fileInput} />
						<div className='thumbnail '>
							<img src={imagePreviewUrl} alt='user avatar' />
						</div>
						<div>
							{imagePreviewUrl === defaultAvatar ? (
								<Button
									className='w-100 btn-round'
									color='primary'
									onClick={() => handleClick()}>
									Edit Image
								</Button>
							) : (
								<span>
									<Button
										className='w-100 btn-round'
										color='primary'
										onClick={() => handleClick()}>
										Change
									</Button>
									<br />
									<Button
										className='w-100 btn-round'
										color='danger'
										onClick={() => handleRemove()}>
										<i className='fa fa-times' /> Remove
									</Button>
								</span>
							)}
						</div>
					</div>
				)
			}}
		</Subscribe>
	)
}

export default ImageUpload
