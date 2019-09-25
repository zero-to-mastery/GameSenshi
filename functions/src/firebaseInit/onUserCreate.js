import {
	fbfsSettingsNotification,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL,
	FB_FS_SETTINGS_NOTIFICATION_PUSH,
	FB_FS_SETTINGS_NOTIFICATION_ORDER_UPDATES,
	FB_FS_SETTINGS_NOTIFICATION_NEWS_LETTER,
	FB_FS_SETTINGS_NOTIFICATION_CHATS,
	FB_FS_SETTINGS_NOTIFICATION_COMMENTS,
	fbfsSettingsGeneral,
	FB_FS_SETTINGS_GENERAL_DISPLAY_NAME,
} from 'constantValues'

const onUserCreate = (user, firestore) => {
	const isPasswordExist = user.providerData.some(
		data => data.providerId === 'password'
	)
	const batch = firestore.batch()

	if (!isPasswordExist) {
		batch.set(firestore.doc(fbfsSettingsGeneral(user)), {
			[FB_FS_SETTINGS_GENERAL_DISPLAY_NAME]: user.displayName || user.uid,
		})
	}

	batch.set(firestore.doc(fbfsSettingsNotification(user)), {
		[FB_FS_SETTINGS_NOTIFICATION_EMAIL]: {
			[FB_FS_SETTINGS_NOTIFICATION_ORDER_UPDATES]: true,
			[FB_FS_SETTINGS_NOTIFICATION_CHATS]: true,
			[FB_FS_SETTINGS_NOTIFICATION_COMMENTS]: true,
		},
		[FB_FS_SETTINGS_NOTIFICATION_PUSH]: {
			[FB_FS_SETTINGS_NOTIFICATION_NEWS_LETTER]: true,
			[FB_FS_SETTINGS_NOTIFICATION_CHATS]: true,
			[FB_FS_SETTINGS_NOTIFICATION_COMMENTS]: true,
		},
	})
	return batch
		.commit()
		.then(console.log)
		.catch(console.log)
}

export { onUserCreate }
