import { storeAlertShow, storeProgress } from 'state'

import {
	handleUserAvatarUrlSave,
	handleUserAvatarSave,
	handleUserAvatarLoad,
} from 'api'

const onCrop = (e, dataUrl, toggle) => {
	handleUserAvatarSave(dataUrl).on(
		'state_changed',
		snapshot => {
			const { bytesTransferred, totalBytes } = snapshot
			const percentage = Math.floor((bytesTransferred / totalBytes) * 100)
			storeProgress.show(percentage)
		},
		() => {
			storeAlertShow(
				'Something went wrong, upload profile image failed',
				'danger',
				'tim-icons icon-alert-circle-exc'
			)
		},
		async () => {
			toggle()

			const url = await handleUserAvatarLoad().catch(() => {
				storeAlertShow(
					'Something went wrong, unable to update image',
					'danger',
					'tim-icons icon-alert-circle-exc'
				)
			})
			if (url) {
				handleUserAvatarUrlSave(url)
					.then(() => {
						storeProgress.close()
						storeAlertShow(
							'Profile picture updated, It may take a few moments to update across the site.',
							'success',
							'tim-icons icon-bell-55'
						)
					})
					.catch(() => {
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
