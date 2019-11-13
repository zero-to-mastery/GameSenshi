import {
	CARD_INDEX_NAME,
	CARD_INDEX_IMAGE,
	CARD_INDEX_HOBBIES,
	CARD_INDEX_SKILLS,
	CARD_INDEX_LEVEL,
} from './CardIndex'

const cardPlayers = [
	{
		[CARD_INDEX_NAME]: 'Dylan Wyatt',
		[CARD_INDEX_IMAGE]: require('assets/img/christian.jpg'),
		[CARD_INDEX_HOBBIES]: 'Skiing, Chess',
		[CARD_INDEX_SKILLS]: 'Dota2, LOL',
		[CARD_INDEX_LEVEL]: 'Rising star',
	},
	{
		[CARD_INDEX_NAME]: 'Mila Skylar',
		[CARD_INDEX_IMAGE]: require('assets/img/johana.jpg'),
		[CARD_INDEX_HOBBIES]: 'Yoga, tennis',
		[CARD_INDEX_SKILLS]: 'Dota2, LOL',
		[CARD_INDEX_LEVEL]: 'Rising star',
	},
	{
		[CARD_INDEX_NAME]: 'Mark Johnsson',
		[CARD_INDEX_IMAGE]: require('assets/img/mike.jpeg'),
		[CARD_INDEX_HOBBIES]: 'Football, gym',
		[CARD_INDEX_SKILLS]: 'Dota2, LOL',
		[CARD_INDEX_LEVEL]: 'Rising star',
	},
	{
		[CARD_INDEX_NAME]: 'Olivia Smith',
		[CARD_INDEX_IMAGE]: require('assets/img/olivia.jpg'),
		[CARD_INDEX_HOBBIES]: 'Football, gym',
		[CARD_INDEX_SKILLS]: 'Dota2, LOL',
		[CARD_INDEX_LEVEL]: 'Rising star',
	},
]

// maps array of names with card object
const getCards = (name, cardPlayers) => {
	let result = []
	let data = [...cardPlayers]
	data.map(card => {
		if (name === card.name) {
			result.push(card)
		}
	})
	return result
}

export { cardPlayers, getCards }
