import { storeAlertShow, storeProgress } from 'state'

import {
	docGeneralSettingSetAvatar,
	storageUserAvatarSet,
	storageUserAvatarGet,
} from 'firebaseInit'

const onCrop = (e, dataUrl, toggle) => {
	storageUserAvatarSet(dataUrl).on(
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

			const url = await storageUserAvatarGet().catch(() => {
				storeAlertShow(
					'Something went wrong, unable to update image',
					'danger',
					'tim-icons icon-alert-circle-exc'
				)
			})
			if (url) {
				docGeneralSettingSetAvatar(url)
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
