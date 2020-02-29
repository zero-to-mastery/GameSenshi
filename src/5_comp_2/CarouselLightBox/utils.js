// temp data array
import {
	FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_IMAGE,
	FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_YOUTUBE,
} from '0_constants'

const getProfileImage = name => require(`0_assets/img/${name}.jpg`)

const itemsProfile = [
	{
		[FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_IMAGE]: getProfileImage(
			'denys'
		),
	},
	{
		[FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_YOUTUBE]: 'bdgTa9ni4S8',
	},
	{
		[FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_IMAGE]: getProfileImage(
			'mark-finn'
		),
	},
	{
		[FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_YOUTUBE]: 'vZX8WJJyXvM',
	},
	{
		[FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_IMAGE]: getProfileImage(
			'fabien-bazanegue'
		),
	},
	{
		[FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_YOUTUBE]: 'vtjorh21b8Q',
	},
]

export { itemsProfile }
