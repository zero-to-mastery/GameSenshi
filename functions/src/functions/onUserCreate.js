import {
	CREATED_AT,
	UPDATED_AT,
	fireStorePathSettingsNotification,
	FIRESTORE_SETTINGS_NOTIFICATION_EMAIL,
	FIRESTORE_SETTINGS_NOTIFICATION_EMAIL_ORDER_UPDATES,
	FIRESTORE_SETTINGS_NOTIFICATION_EMAIL_NEWS_LETTER,
	FIRESTORE_SETTINGS_NOTIFICATION_EMAIL_CHATS,
	FIRESTORE_SETTINGS_NOTIFICATION_EMAIL_COMMENTS,
	FIRESTORE_SETTINGS_NOTIFICATION_PUSH,
	FIRESTORE_SETTINGS_NOTIFICATION_PUSH_ORDER_UPDATES,
	FIRESTORE_SETTINGS_NOTIFICATION_PUSH_CHATS,
	FIRESTORE_SETTINGS_NOTIFICATION_PUSH_COMMENTS,
	firestorePathSettingsGeneral,
	FIRESTORE_SETTINGS_GENERAL_DISPLAY_NAME,
	FIRESTORE_SETTINGS_GENERAL_SHORT_ID,
} from 'constantValues'
import nanoid from 'nanoid'
import { functions, fireStored, getServerTimestamp } from 'firebaseInit'

const onUserCreate = (userRecord, eventContext, fireStored) => {
	const { uid } = userRecord

	const isPasswordExist = userRecord.providerData.some(
		data => data.providerId === 'password'
	)

	const serverTimestamp = getServerTimestamp()

	const shortId = nanoid(10)

	if (!isPasswordExist) {
		fireStored.doc(firestorePathSettingsGeneral(uid)).set({
			[CREATED_AT]: serverTimestamp,
			[UPDATED_AT]: serverTimestamp,
			[FIRESTORE_SETTINGS_GENERAL_SHORT_ID]: shortId,
			[FIRESTORE_SETTINGS_GENERAL_DISPLAY_NAME]:
				userRecord.displayName || shortId,
		})
	}

	return fireStored.doc(fireStorePathSettingsNotification(uid)).set({
		[CREATED_AT]: serverTimestamp,
		[UPDATED_AT]: serverTimestamp,
		[FIRESTORE_SETTINGS_NOTIFICATION_EMAIL]: {
			[FIRESTORE_SETTINGS_NOTIFICATION_EMAIL_ORDER_UPDATES]: true,
			[FIRESTORE_SETTINGS_NOTIFICATION_EMAIL_CHATS]: true,
			[FIRESTORE_SETTINGS_NOTIFICATION_EMAIL_COMMENTS]: true,
			[FIRESTORE_SETTINGS_NOTIFICATION_EMAIL_NEWS_LETTER]: true,
		},
		[FIRESTORE_SETTINGS_NOTIFICATION_PUSH]: {
			[FIRESTORE_SETTINGS_NOTIFICATION_PUSH_ORDER_UPDATES]: true,
			[FIRESTORE_SETTINGS_NOTIFICATION_PUSH_CHATS]: true,
			[FIRESTORE_SETTINGS_NOTIFICATION_PUSH_COMMENTS]: true,
		},
	})
}

const onUserCreation = functions.auth
	.user()
	.onCreate((userRecord, eventContext) => {
		return onUserCreate(userRecord, eventContext, fireStored)
	})

export { onUserCreation }
