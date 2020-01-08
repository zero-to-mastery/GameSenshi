// temp data array
import { FIRESTORE_SENSHI_MEDIA_IMAGE } from 'constantValues'

const getIndexImage = name => require(`assets/img/index/${name}.jpg`)

const itemsIndex = [
	{
		[FIRESTORE_SENSHI_MEDIA_IMAGE]: getIndexImage('dota2'),
	},
	{
		[FIRESTORE_SENSHI_MEDIA_IMAGE]: getIndexImage('lol'),
	},
	{
		[FIRESTORE_SENSHI_MEDIA_IMAGE]: getIndexImage('fornite'),
	},
]

export { itemsIndex }
