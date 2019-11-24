import {
	CARD_SEARCHED_NAME,
	CARD_SEARCHED_IMAGE,
	CARD_SEARCHED_GENDER,
	CARD_SEARCHED_AUDIO,
	CARD_SEARCHED_PRICE,
	CARD_SEARCHED_DESCRIPTION,
} from './ContainerSearchResults'
import audioSample from 'assets/audio/sampleVoice.mp3'

const cardPlayers = [
	{
		[CARD_SEARCHED_NAME]: 'Dylan Wyatt',
		[CARD_SEARCHED_IMAGE]: require('assets/img/christian.jpg'),
		[CARD_SEARCHED_GENDER]: false,
		[CARD_SEARCHED_AUDIO]: audioSample,
		[CARD_SEARCHED_PRICE]: '30',
		[CARD_SEARCHED_DESCRIPTION]: 'hello',
	},
	{
		[CARD_SEARCHED_NAME]: 'Mila Skylar',
		[CARD_SEARCHED_IMAGE]: require('assets/img/johana.jpg'),
		[CARD_SEARCHED_GENDER]: true,
		[CARD_SEARCHED_AUDIO]: audioSample,
		[CARD_SEARCHED_PRICE]: '40',
		[CARD_SEARCHED_DESCRIPTION]: 'hello',
	},
	{
		[CARD_SEARCHED_NAME]: 'Mark Johnsson',
		[CARD_SEARCHED_IMAGE]: require('assets/img/mike.jpeg'),
		[CARD_SEARCHED_GENDER]: false,
		[CARD_SEARCHED_AUDIO]: audioSample,
		[CARD_SEARCHED_PRICE]: '50',
		[CARD_SEARCHED_DESCRIPTION]: 'hello',
	},
	{
		[CARD_SEARCHED_NAME]: 'Olivia Smith',
		[CARD_SEARCHED_IMAGE]: require('assets/img/olivia.jpg'),
		[CARD_SEARCHED_GENDER]: true,
		[CARD_SEARCHED_AUDIO]: audioSample,
		[CARD_SEARCHED_PRICE]: '60',
		[CARD_SEARCHED_DESCRIPTION]: 'hello',
	},
]

export { cardPlayers }
