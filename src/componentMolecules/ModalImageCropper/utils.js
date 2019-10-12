import { firebaseDefaultStorage, auth } from 'firebaseInit'
import {
	storeUser,
	storeUserSetState,
	storeAlertShow,
	storeProgress,
	STATE,
	STORE_USER_STATE_UID,
	STORE_USER_STATE_AVATAR,
} from 'state'

// constants
import { FB_STORAGE_USER_AVATAR } from 'constantValues'

const onCrop = dataUrl => {
	const avatarRef = firebaseDefaultStorage.ref(
		`${FB_STORAGE_USER_AVATAR}/${storeUser[STATE][STORE_USER_STATE_UID]}.jpg`
	)
	const task = avatarRef.put(dataUrl)

	task.on(
		'state_changed',
		snapshot => {
			const { bytesTransferred, totalBytes } = snapshot
			const percentage = (bytesTransferred / totalBytes) * 100
			storeProgress.show(
				Math.max(percentage, Math.floor(10 + Math.random() * 10)),
				'primary'
			)
		},
		err => {
			console.log(err)
			storeAlertShow(
				'Something went wrong, upload profile image failed',
				'danger',
				'tim-icons icon-alert-circle-exc'
			)
		},
		async () => {
			storeUserSetState({ [STORE_USER_STATE_AVATAR]: dataUrl })
			const url = await avatarRef.getDownloadURL().catch(() => {
				storeAlertShow(
					'Something went wrong, unable to update image',
					'danger',
					'tim-icons icon-alert-circle-exc'
				)
			})
			if (url) {
				auth()
					.currentUser.updateProfile({
						[STORE_USER_STATE_AVATAR]: url,
					})
					.then(() => {
						storeProgress.close()
						storeAlertShow(
							'Imaged updated, It may take a few moments to update across the site.',
							'success',
							'tim-icons icon-bell-55'
						)
					})
					.catch(err => {
						console.log(err)
						storeProgress.close()
						storeAlertShow(
							'Something went wrong, unable to update profile',
							'danger',
							'tim-icons icon-alert-circle-exc'
						)
					})
			}
		}
	)
}

export { onCrop }
