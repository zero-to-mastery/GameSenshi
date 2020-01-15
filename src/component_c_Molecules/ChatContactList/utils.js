import {
	CHAT_CONTACT_IMAGE,
	CHAT_CONTACT_LABEL,
	CHAT_CONTACT_LAST_SEEN,
	CHAT_CONTACT_NAME,
} from './ChatContactList'

const contactList = [
	{
		[CHAT_CONTACT_NAME]: 'Charlie Watson',
		[CHAT_CONTACT_IMAGE]: require('assets/img/p10.jpg'),
		[CHAT_CONTACT_LAST_SEEN]: '1 hour ago',
		[CHAT_CONTACT_LABEL]: 'Computer users and programmers',
	},
	{
		[CHAT_CONTACT_NAME]: 'Jane Doe',
		[CHAT_CONTACT_IMAGE]: require('assets/img/johana.jpg'),
		[CHAT_CONTACT_LAST_SEEN]: '24 minutes ago',
		[CHAT_CONTACT_LABEL]: 'You can subscribe to receive weekly...',
	},
	{
		[CHAT_CONTACT_NAME]: 'Sofia Scarlett',
		[CHAT_CONTACT_IMAGE]: require('assets/img/kareya-saleh.jpg'),
		[CHAT_CONTACT_LAST_SEEN]: '24 minutes ago',
		[CHAT_CONTACT_LABEL]: 'It’s an effective resource regardless..',
	},
	{
		[CHAT_CONTACT_NAME]: 'Tom Klein',
		[CHAT_CONTACT_IMAGE]: require('assets/img/christian.jpg'),
		[CHAT_CONTACT_LAST_SEEN]: '1 day ago',
		[CHAT_CONTACT_LABEL]: 'Be sure to check it out if your dev pro...',
	},
	{
		[CHAT_CONTACT_NAME]: 'Mila Skylar',
		[CHAT_CONTACT_IMAGE]: require('assets/img/ryan.png'),
		[CHAT_CONTACT_LAST_SEEN]: '2 day ago',
		[CHAT_CONTACT_LABEL]: 'You can subscribe to receive weekly...',
	},
]

export { contactList }
