import React, { useRef, useState } from 'react'
import { firebaseDefaultStorage, auth } from 'firebaseInit'
// state management
import {
	storeUser,
	storeAlertShow,
	storeProgress,
	Subscribe,
	STORE_USER_STATE_UID,
	STORE_USER_STATE_AVATAR_URL,
} from 'state'
// component
import { Button } from 'reactstrap'
import { ImageCropper } from 'componentAtoms/Modals'
// constants
import { FIREBASE_STORAGE_USER_AVATAR } from 'constantValues'
// image
import defaultAvatar from 'assets/img/placeholder.jpg'

const ImageUpload = props => {
	const fileInput = useRef(null)
	const cropperRef = useRef(null)
	const [src, setSrc] = useState('')
	const [isOpen, setIsOpen] = useState(false)

	const handleImageChange = e => {
		e.preventDefault()
		const reader = new FileReader()
		const file = e.target.files[0]
		if (file) {
			setIsOpen(true)
			const avatarRef = firebaseDefaultStorage.ref(
				`${FIREBASE_STORAGE_USER_AVATAR}/${storeUser.state[STORE_USER_STATE_UID]}.jpg`
			)
			const task = avatarRef.put(file)

			task.on(
				'state_changed',
				snapshot => {
					const { bytesTransferred, totalBytes } = snapshot
					const percentage = (bytesTransferred / totalBytes) * 100
					// storeProgress.show(
					// 	Math.max(percentage, Math.floor(10 + Math.random() * 10)),
					// 	'primary'
					// )
				},
				err => {
					storeAlertShow(
						'Something went wrong, upload profile image failed',
						'danger',
						'tim-icons icon-alert-circle-exc'
					)
				},
				async () => {
					const url = await avatarRef.getDownloadURL().catch(() => {
						storeAlertShow(
							'Something went wrong, unable to update image',
							'danger',
							'tim-icons icon-alert-circle-exc'
						)
					})
					if (url) {
						storeUser.setState({ [STORE_USER_STATE_AVATAR_URL]: url })
						// auth()
						// 	.currentUser.updateProfile({
						// 		[STORE_USER_STATE_AVATAR_URL]: url,
						// 	})
						// 	.then(() => {
						// 		storeProgress.close()
						// 		storeAlertShow(
						// 			'Imaged updated, It may take a few moments to update across the site.',
						// 			'success',
						// 			'tim-icons icon-bell-55'
						// 		)
						// 	})
						// 	.catch(err => {
						// 		storeProgress.close()
						// 		storeAlertShow(
						// 			'Something went wrong, unable to update profile',
						// 			'danger',
						// 			'tim-icons icon-alert-circle-exc'
						// 		)
						// 	})
					}
				}
			)
		}
		reader.readAsDataURL(file)
	}
	const handleClick = () => {
		fileInput.current.click()
	}
	const handleRemove = () => {
		storeUser.setState({ [STORE_USER_STATE_AVATAR_URL]: defaultAvatar })
		fileInput.current.value = null
	}
	return (
		<Subscribe to={[storeUser]}>
			{storeUser => {
				const {
					state: { [STORE_USER_STATE_AVATAR_URL]: imagePreviewUrl },
					resetProfileImage,
				} = storeUser
				return (
					<div className='fileinput text-center'>
						<input type='file' onChange={handleImageChange} ref={fileInput} />
						<ImageCropper
							src={imagePreviewUrl}
							isOpen={isOpen}
							setIsOpen={setIsOpen}
							forwardedRef={cropperRef}
						/>
						{/* Our cropper component */}
						<div className='thumbnail '>
							<img
								src={imagePreviewUrl}
								alt='user avatar'
								onError={() => {
									resetProfileImage()
								}}
							/>
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
