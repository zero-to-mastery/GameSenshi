import { docGeneralSettingSet } from 'firebaseInit'
import { FB_FS_SETTINGS_GENERAL_USER_AVATAR } from 'constantValues'

const handleUserAvatarUrlSave = url =>
	docGeneralSettingSet({
		[FB_FS_SETTINGS_GENERAL_USER_AVATAR]: url,
	})

export { handleUserAvatarUrlSave }
