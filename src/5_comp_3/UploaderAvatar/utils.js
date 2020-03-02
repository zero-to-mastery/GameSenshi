import {
	storeAlertShow,
	storeAlertSimpleError,
	storeUserResetAvatar,
	storeProgress,
} from '2_state'
import {
	storageUserAvatarRemove,
	storageUserAvatarGet,
	storageUserAvatarOn,
} from '2_fire_storage'
import {
	UNEXPECTED_ERROR_CODE_18,
	UNEXPECTED_ERROR_CODE_20,
	UNEXPECTED_ERROR_CODE_21,
	UNEXPECTED_ERROR_CODE_22,
} from '0_constants'

import { docUserAndSellerAvatarSet } from '4_comp_utils'

const onRemove = async () => {
	const removed = await docUserAndSellerAvatarSet('')
		.then(() => {
			storeUserResetAvatar()
			storeAlertShow(
				'Profile picture removed, it may take a few moments to update across the site..',
				true
			)
			return true
		})
		.catch(err => {
			storeAlertSimpleError(err, UNEXPECTED_ERROR_CODE_18)
			return false
		})

	if (removed) {
		storageUserAvatarRemove().catch(() => {})
	}
}

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
				docUserAndSellerAvatarSet(url)
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

export { onRemove, onCrop }
