import {
	CREATED_AT,
	UPDATED_AT,
	FIRESTORE_SETTINGS_NOTIFICATION_EMAIL,
	FIRESTORE_SETTINGS_NOTIFICATION_EMAIL_ORDER_UPDATES,
	FIRESTORE_SETTINGS_NOTIFICATION_EMAIL_NEWS_LETTER,
	FIRESTORE_SETTINGS_NOTIFICATION_EMAIL_CHATS,
	FIRESTORE_SETTINGS_NOTIFICATION_EMAIL_COMMENTS,
	FIRESTORE_SETTINGS_NOTIFICATION_PUSH,
	FIRESTORE_SETTINGS_NOTIFICATION_PUSH_ORDER_UPDATES,
	FIRESTORE_SETTINGS_NOTIFICATION_PUSH_CHATS,
	FIRESTORE_SETTINGS_NOTIFICATION_PUSH_COMMENTS,
	FIRESTORE_SETTINGS_GENERAL_DISPLAY_NAME,
	FIRESTORE_SETTINGS_GENERAL_SHORT_ID,
	INTERNAL_ERROR_CODE_5,
	INTERNAL_ERROR_CODE_6,
} from 'constantValues'
import nanoid from 'nanoid'
import {
	functions,
	getServerTimestamp,
	docGeneralSettingSet,
	docNotificationSettingSet,
} from 'firebaseInit'
import { resObj } from 'utils'
const onUserCreate = (userRecord, eventContext) => {
	const { uid, displayName } = userRecord

	const isPasswordExist = userRecord.providerData.some(
		data => data.providerId === 'password'
	)

	const serverTimestamp = getServerTimestamp()

	const shortId = nanoid(10)

	if (!isPasswordExist) {
		docGeneralSettingSet(uid, {
			[CREATED_AT]: serverTimestamp,
			[UPDATED_AT]: serverTimestamp,
			[FIRESTORE_SETTINGS_GENERAL_SHORT_ID]: shortId,
			[FIRESTORE_SETTINGS_GENERAL_DISPLAY_NAME]: displayName || shortId,
		}).catch(err => {
			console.log(resObj(false, INTERNAL_ERROR_CODE_5, err))
		})
	}

	return docNotificationSettingSet(uid, {
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
	}).catch(err => {
		console.log(resObj(false, INTERNAL_ERROR_CODE_6, err))
	})
}

const onUserCreation = functions.auth
	.user()
	.onCreate((userRecord, eventContext) => {
		return onUserCreate(userRecord, eventContext)
	})

export { onUserCreation }
