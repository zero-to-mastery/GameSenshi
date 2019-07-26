import React, { useRef } from 'react'
import { firebaseDefaultStorage, auth } from 'firebaseInit'
// state management
import { userStore, storeAlertShow, progressStore, Subscribe } from 'state'
// component
import { Button } from 'reactstrap'
// constants
import {
	USER_UID,
	USER_PHOTO_URL,
	FIREBASE_STORAGE_USER_AVATAR,
} from 'constantValues'
// image
import defaultAvatar from 'assets/img/placeholder.jpg'

const ImageUpload = props => {
	const fileInput = useRef(null)

	const handleImageChange = e => {
		e.preventDefault()
		const reader = new FileReader()
		const file = e.target.files[0]

		if (file) {
			const avatarRef = firebaseDefaultStorage.ref(
				`${FIREBASE_STORAGE_USER_AVATAR}/${userStore.state[USER_UID]}.jpg`
			)
			const task = avatarRef.put(file)
			task.on(
				'state_changed',
				snapshot => {
					const { bytesTransferred, totalBytes } = snapshot
					const percentage = (bytesTransferred / totalBytes) * 100
					progressStore.show(
						Math.max(percentage, Math.floor(10 + Math.random() * 10)),
						'primary'
					)
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
						userStore.setState({ [USER_PHOTO_URL]: url })
						auth()
							.currentUser.updateProfile({
								[USER_PHOTO_URL]: url,
							})
							.then(() => {
								progressStore.close()
								storeAlertShow(
									'Imaged updated, It may take a few moments to update across the site.',
									'success',
									'tim-icons icon-bell-55'
								)
							})
							.catch(err => {
								progressStore.close()
								storeAlertShow(
									'Something went wrong, unable to update profile',
									'danger',
									'tim-icons icon-alert-circle-exc'
								)
							})
					}
				}
			)
			reader.readAsDataURL(file)
		}
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
					resetProfileImage,
				} = userStore
				return (
					<div className='fileinput text-center'>
						<input type='file' onChange={handleImageChange} ref={fileInput} />
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
