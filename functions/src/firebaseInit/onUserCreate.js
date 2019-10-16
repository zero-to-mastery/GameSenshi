import {
	fbfsSettingsNotificationPath,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL_ORDER_UPDATES,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL_NEWS_LETTER,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL_CHATS,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL_COMMENTS,
	FB_FS_SETTINGS_NOTIFICATION_PUSH,
	FB_FS_SETTINGS_NOTIFICATION_PUSH_ORDER_UPDATES,
	FB_FS_SETTINGS_NOTIFICATION_PUSH_CHATS,
	FB_FS_SETTINGS_NOTIFICATION_PUSH_COMMENTS,
	fbfsSettingsGeneralPath,
	FB_FS_SETTINGS_GENERAL_DISPLAY_NAME,
} from 'constantValues'

const onUserCreate = (userRecord, eventContext, firestore) => {
	console.log(userRecord, eventContext)

	const { uid } = userRecord

	const isPasswordExist = userRecord.providerData.some(
		data => data.providerId === 'password'
	)

	if (!isPasswordExist) {
		firestore.doc(fbfsSettingsGeneralPath(uid)).set({
			[FB_FS_SETTINGS_GENERAL_DISPLAY_NAME]:
				userRecord.displayName || userRecord.uid,
		})
	}

	return firestore.doc(fbfsSettingsNotificationPath(uid)).set({
		[FB_FS_SETTINGS_NOTIFICATION_EMAIL]: {
			[FB_FS_SETTINGS_NOTIFICATION_EMAIL_ORDER_UPDATES]: true,
			[FB_FS_SETTINGS_NOTIFICATION_EMAIL_CHATS]: true,
			[FB_FS_SETTINGS_NOTIFICATION_EMAIL_COMMENTS]: true,
			[FB_FS_SETTINGS_NOTIFICATION_EMAIL_NEWS_LETTER]: true,
		},
		[FB_FS_SETTINGS_NOTIFICATION_PUSH]: {
			[FB_FS_SETTINGS_NOTIFICATION_PUSH_ORDER_UPDATES]: true,
			[FB_FS_SETTINGS_NOTIFICATION_PUSH_CHATS]: true,
			[FB_FS_SETTINGS_NOTIFICATION_PUSH_COMMENTS]: true,
		},
	})
}

export { onUserCreate }
