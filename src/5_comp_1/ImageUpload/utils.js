import {
	storeAlertShow,
	storeAlertSimpleError,
	storeUserResetAvatar,
} from '2_state'
import { storageUserAvatarRemove } from '2_fire_storage'
import { docUserSettingGeneralAvatarSet } from '2_fire_store'
import { UNEXPECTED_ERROR_CODE_18 } from '0_constants'

const onRemove = async () => {
	const removed = await docUserSettingGeneralAvatarSet('')
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

export { onRemove }
