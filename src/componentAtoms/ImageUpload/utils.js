import { storeAlertShow, storeUserResetAvatar } from 'state'
import { handleUserAvatarUrlSave, handleUserAvatarRemove } from 'api'
const emptyString = ''

const onRemove = async () => {
	const removed = await handleUserAvatarUrlSave(emptyString)
		.then(() => {
			storeUserResetAvatar()
			storeAlertShow(
				'Profile picture removed, It may take a few moments to update across the site.',
				'success',
				'tim-icons icon-bell-55'
			)
			return true
		})
		.catch(err => {
			console.log(err)
			storeAlertShow(
				'Something went wrong, unable to remove profile picture',
				'danger',
				'tim-icons icon-alert-circle-exc'
			)
			return false
		})

	if (removed) {
		try {
			// for some reason this does not return promise as stated in https://firebase.google.com/docs/reference/js/firebase.storage.Reference.html?authuser=0#delete
			handleUserAvatarRemove()
		} catch (e) {
			//
		}
	}
}

export { onRemove }
