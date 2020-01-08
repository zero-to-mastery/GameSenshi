// temp data array
import {
	FIRESTORE_SENSHI_MEDIA_IMAGE,
	FIRESTORE_SENSHI_MEDIA_YOUTUBE,
} from 'constantValues'

const getProfileImage = name => require(`assets/img/${name}.jpg`)

const itemsProfile = [
	{
		[FIRESTORE_SENSHI_MEDIA_IMAGE]: getProfileImage('denys'),
	},
	{
		[FIRESTORE_SENSHI_MEDIA_YOUTUBE]: 'OGKbzhME3UI',
	},
	{
		[FIRESTORE_SENSHI_MEDIA_IMAGE]: getProfileImage('mark-finn'),
	},
	{
		[FIRESTORE_SENSHI_MEDIA_YOUTUBE]: '5HeVYC42grI',
	},
	{
		[FIRESTORE_SENSHI_MEDIA_IMAGE]: getProfileImage('fabien-bazanegue'),
	},
	{
		[FIRESTORE_SENSHI_MEDIA_YOUTUBE]: 'vtjorh21b8Q',
	},
]

export { itemsProfile }
