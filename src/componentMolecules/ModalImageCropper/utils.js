import { firebaseDefaultStorage, auth, firestore } from 'firebaseInit'
import {
	storeUserSetState,
	storeAlertShow,
	storeProgress,
	STORE_USER_STATE_AVATAR,
} from 'state'
import {
	FB_STORAGE_USER_AVATAR,
	fbfsSettingsGeneral,
	FB_FS_SETTINGS_GENERAL_USER_AVATAR,
} from 'constantValues'

const onCrop = (dataUrl, toggle) => {
	const uid = auth().currentUser.uid

	const avatarRef = firebaseDefaultStorage.ref(
		`${FB_STORAGE_USER_AVATAR}/${uid}.jpg`
	)
	const task = avatarRef.putString(dataUrl, 'data_url')

	task.on(
		'state_changed',
		snapshot => {
			const { bytesTransferred, totalBytes } = snapshot
			const percentage = Math.floor((bytesTransferred / totalBytes) * 100)
			storeProgress.show(percentage)
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
			toggle()
			storeUserSetState({ [STORE_USER_STATE_AVATAR]: dataUrl })
			const url = await avatarRef.getDownloadURL().catch(() => {
				storeAlertShow(
					'Something went wrong, unable to update image',
					'danger',
					'tim-icons icon-alert-circle-exc'
				)
			})
			if (url) {
				firestore
					.doc(fbfsSettingsGeneral(auth().currentUser))
					.set({
						[FB_FS_SETTINGS_GENERAL_USER_AVATAR]: url,
					})
					.then(() => {
						storeProgress.close()
						storeAlertShow(
							'Profile picture updated, It may take a few moments to update across the site.',
							'success',
							'tim-icons icon-bell-55'
						)
					})
					.catch(err => {
						console.log(err)
						storeProgress.close()
						storeAlertShow(
							'Something went wrong, unable to update profile picture',
							'danger',
							'tim-icons icon-alert-circle-exc'
						)
					})
			}
		}
	)
}

export { onCrop }
