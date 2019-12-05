// temp data array
import {
	CAROUSEL_COMMON_IMAGE,
	CAROUSEL_COMMON_YOUTUBE,
} from './CarouselCommon'

const getProfileImage = name => require(`assets/img/${name}.jpg`)

const itemsProfile = [
	{
		[CAROUSEL_COMMON_IMAGE]: getProfileImage('denys'),
	},
	{
		[CAROUSEL_COMMON_YOUTUBE]: 'OGKbzhME3UI',
	},
	{
		[CAROUSEL_COMMON_IMAGE]: getProfileImage('mark-finn'),
	},
	{
		[CAROUSEL_COMMON_YOUTUBE]: '5HeVYC42grI',
	},
	{
		[CAROUSEL_COMMON_IMAGE]: getProfileImage('fabien-bazanegue'),
	},
	{
		[CAROUSEL_COMMON_YOUTUBE]: 'vtjorh21b8Q',
	},
]

const getIndexImage = name => require(`assets/img/index/${name}.jpg`)

const itemsIndex = [
	{
		[CAROUSEL_COMMON_IMAGE]: getIndexImage('dota2'),
	},
	{
		[CAROUSEL_COMMON_IMAGE]: getIndexImage('lol'),
	},
	{
		[CAROUSEL_COMMON_IMAGE]: getIndexImage('fornite'),
	},
]

export { itemsProfile, itemsIndex }
