import {
	BODY,
	NAME,
} from 'componentMolecules/CheckBoxListInstantFeedback/CheckBoxListInstantFeedback'

import {
	FB_FS_SETTINGS_NOTIFICATION_ORDER_UPDATES,
	FB_FS_SETTINGS_NOTIFICATION_NEWS_LETTER,
	FB_FS_SETTINGS_NOTIFICATION_CHATS,
	FB_FS_SETTINGS_NOTIFICATION_COMMENTS,
} from 'constants'

const checkBoxesPush = () => [
	{
		[BODY]: 'Order Updates',
		[NAME]: FB_FS_SETTINGS_NOTIFICATION_ORDER_UPDATES,
	},
	{
		[BODY]: 'Chats',
		[NAME]: FB_FS_SETTINGS_NOTIFICATION_CHATS,
	},
	{
		[BODY]: 'Comments',
		[NAME]: FB_FS_SETTINGS_NOTIFICATION_COMMENTS,
	},
]

const checkBoxesEmail = () => [
	{
		[BODY]: 'Newsletter',
		[NAME]: FB_FS_SETTINGS_NOTIFICATION_NEWS_LETTER,
	},
	{
		[BODY]: 'Chats',
		[NAME]: FB_FS_SETTINGS_NOTIFICATION_CHATS,
	},
	{
		[BODY]: 'Comments',
		[NAME]: FB_FS_SETTINGS_NOTIFICATION_COMMENTS,
	},
]

export { checkBoxesPush, checkBoxesEmail }
