import { storeAlertShow, storeUserResetAvatar } from '2_state'
import { storageUserAvatarRemove } from '1_fire_init'
import { docUserSettingGeneralAvatarSet } from '2_fire_store'
const emptyString = ''

const onRemove = async () => {
	const removed = await docUserSettingGeneralAvatarSet(emptyString)
		.then(() => {
			storeUserResetAvatar()
			storeAlertShow(
				'Profile picture removed, It may take a few moments to update across the site.',
				'success',
				'tim-icons icon-bell-55'
			)
			return true
		})
		.catch(() => {
			storeAlertShow(
				'Something went wrong, unable to remove profile picture',
				'danger',
				'tim-icons icon-alert-circle-exc'
			)
			return false
		})

	if (removed) {
		storageUserAvatarRemove().catch(() => {})
	}
}

export { onRemove }
