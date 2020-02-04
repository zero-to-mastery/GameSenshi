import { storeAlertShow, storeProgress, storeAlertSimpleError } from '2_state'
import { storageUserAvatarGet, storageUserAvatarOn } from '2_fire_storage'
import { docUserSettingGeneralAvatarSet } from '2_fire_store'
import {
	UNEXPECTED_ERROR_CODE_20,
	UNEXPECTED_ERROR_CODE_21,
	UNEXPECTED_ERROR_CODE_22,
} from '0_constants'

const onCrop = (e, dataUrl, toggle) => {
	storageUserAvatarOn(dataUrl, {
		next: snapshot => {
			const { bytesTransferred, totalBytes } = snapshot
			const percentage = Math.floor((bytesTransferred / totalBytes) * 100)
			storeProgress.show(percentage)
		},
		error: err => {
			storeAlertSimpleError(err, UNEXPECTED_ERROR_CODE_20)
		},
		complete: async () => {
			toggle()

			const url = await storageUserAvatarGet().catch(err => {
				storeAlertSimpleError(err, UNEXPECTED_ERROR_CODE_21)
			})
			storeProgress.close()
			if (url) {
				docUserSettingGeneralAvatarSet(url)
					.then(() => {
						storeAlertShow(
							'Profile picture updated, it may take a few moments to update across the site.',
							true
						)
					})
					.catch(err => {
						storeAlertSimpleError(err, UNEXPECTED_ERROR_CODE_22)
					})
			}
		},
	})
}

export { onCrop }
