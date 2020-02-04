import { storeAlertShow, storeProgress } from '2_state'
import { storageUserAvatarSet, storageUserAvatarGet } from '1_fire_Init'
import { docUserSettingGeneralAvatarSet } from '2_fireStored'

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
				docUserSettingGeneralAvatarSet(url)
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
