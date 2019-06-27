import { Container } from 'unstated'

import {
	CARD_CVC,
	CARD_TYPE,
	CARD_CARDS,
	CARD_NUMBER,
	CARD_IS_DEFAULT,
	CARD_EXPIRY_YEAR,
	CARD_HOLDER_NAME,
	CARD_EXPIRY_MONTH,
	CARD_LAST_4_DIGITS,
	MONTH_ABVS_SELECT,
	YEARS,
} from 'constantValues'

const defaultValues = {
	// currently this is for demo, normally should be empty array
	[CARD_CARDS]: [
		{
			[CARD_NUMBER]: '',
			[CARD_LAST_4_DIGITS]: '8372',
			[CARD_EXPIRY_YEAR]: '2022',
			[CARD_EXPIRY_MONTH]: '06',
			[CARD_TYPE]: 'visa',
			[CARD_IS_DEFAULT]: true,
		},
		{
			[CARD_NUMBER]: '',
			[CARD_LAST_4_DIGITS]: '1225',
			[CARD_EXPIRY_YEAR]: '2021',
			[CARD_EXPIRY_MONTH]: '05',
			[CARD_TYPE]: 'mastercard',
			[CARD_IS_DEFAULT]: false,
		},
	],
	// for card modal
	[CARD_CVC]: '',
	[CARD_TYPE]: '',
	[CARD_NUMBER]: '',
	[CARD_IS_DEFAULT]: false,
	[CARD_HOLDER_NAME]: '',
	[CARD_EXPIRY_YEAR]: YEARS[0],
	[CARD_EXPIRY_MONTH]: MONTH_ABVS_SELECT[0],
}

class CardContainer extends Container {
	state = defaultValues
	resetState = () => {
		return this.setState(defaultValues)
	}
}

export default CardContainer
