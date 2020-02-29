// temp data array
import { FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_IMAGE } from '0_constants'

const getIndexImage = name => require(`0_assets/img/index/${name}.jpg`)

const itemsIndex = [
	{
		[FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_IMAGE]: getIndexImage('dota2'),
	},
	{
		[FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_IMAGE]: getIndexImage('lol'),
	},
	{
		[FIRESTORE_SELLER_SETTINGS_PROFILE_CAROUSEL_IMAGE]: getIndexImage(
			'fornite'
		),
	},
]

export { itemsIndex }
