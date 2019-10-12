import { firebaseDefaultStorage, auth, firestore } from 'firebaseInit'
import { storeAlertShow, storeUserResetAvatar } from 'state'
import {
	FB_STORAGE_USER_AVATAR,
	fbfsSettingsGeneral,
	FB_FS_SETTINGS_GENERAL_USER_AVATAR,
} from 'constantValues'

const emptyString = ''

const onRemove = async () => {
	const removed = await firestore
		.doc(fbfsSettingsGeneral(auth().currentUser))
		.set({
			[FB_FS_SETTINGS_GENERAL_USER_AVATAR]: emptyString,
		})
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
		const uid = auth().currentUser.uid

		const avatarRef = firebaseDefaultStorage.ref(
			`${FB_STORAGE_USER_AVATAR}/${uid}.jpg`
		)
		avatarRef.delete().catch(() => {})
	}
}

export { onRemove }
