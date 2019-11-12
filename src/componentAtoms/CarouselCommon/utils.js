// temp data array
import {
	CAROUSEL_COMMON_IMAGE,
	CAROUSEL_COMMON_YOUTUBE,
} from './CarouselCommon'

const itemsProfile = [
	{
		[CAROUSEL_COMMON_IMAGE]: require('assets/img/denys.jpg'),
	},
	{
		[CAROUSEL_COMMON_YOUTUBE]: 'OGKbzhME3UI',
	},
	{
		[CAROUSEL_COMMON_IMAGE]: require('assets/img/mark-finn.jpg'),
	},
	{
		[CAROUSEL_COMMON_YOUTUBE]: '5HeVYC42grI',
	},
	{
		[CAROUSEL_COMMON_IMAGE]: require('assets/img/fabien-bazanegue.jpg'),
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
