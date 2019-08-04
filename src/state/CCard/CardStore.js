import { Container } from 'unstated'
import valid from 'card-validator'

const CARD_TYPE = 'type'
const CARD_IS_OPEN = 'isOpen'
const CARD_IS_DEFAULT = 'isDefault'
const CARD_EXPIRY_YEAR = 'expiryYear'
const CARD_EXPIRY_MONTH = 'expiryMonth'
const CARD_LAST_4_DIGITS = 'last4Digits'

const cardType = cardNumber => {
	// this is for payment icon
	switch (valid.number(cardNumber)) {
		case 'Visa':
			return 'visa'
		case 'Mastercard':
			return 'mastercard'
		case 'Diners Club':
			return 'diners'
		case 'Discover':
			return 'discover'
		case 'JCB':
			return 'jcb'
		case 'UnionPay':
			return 'unionpay'
		case 'Maestro':
			return 'maestro'
		case 'Elo':
			return 'elo'
		case 'Hipercard':
			return 'hipercard'
		default:
			return 'default'
	}
}

// currently this is for demo, normally should be empty array
const defaultValues = [
	{
		[CARD_LAST_4_DIGITS]: '8372',
		[CARD_EXPIRY_YEAR]: '2022',
		[CARD_EXPIRY_MONTH]: '06',
		[CARD_TYPE]: 'visa',
		[CARD_IS_DEFAULT]: true,
	},
	{
		[CARD_LAST_4_DIGITS]: '1225',
		[CARD_EXPIRY_YEAR]: '2021',
		[CARD_EXPIRY_MONTH]: '05',
		[CARD_TYPE]: 'mastercard',
		[CARD_IS_DEFAULT]: false,
	},
]

class CardStore extends Container {
	state = defaultValues
	resetState = () => {
		this.setState(defaultValues)
		return this
	}

	toggle = () => {
		this.setState(state => {
			state[CARD_IS_OPEN] = !state[CARD_IS_OPEN]
			return state
		})
		return this
	}

	show = () => {
		this.setState({ [CARD_IS_OPEN]: true })
		return this
	}

	toggleIsDefault = () => {
		this.setState(state => {
			state[CARD_IS_DEFAULT] = !state[CARD_IS_DEFAULT]
			return state
		})
		return this
	}

	// onSubmit = () => {
	// 	this.setState(state => {
	// 		if (state[CARD_IS_DEFAULT]) {
	// 			state[CARD_CARDS].forEach(creditCard => {
	// 				creditCard[CARD_IS_DEFAULT] = false
	// 			})
	// 		}
	// 		state[CARD_CARDS].push({
	// 			[CARD_LAST_4_DIGITS]: state[CARD_NUMBER].slice(-4),
	// 			[CARD_EXPIRY_YEAR]: state[CARD_EXPIRY_YEAR].value,
	// 			[CARD_EXPIRY_MONTH]: state[CARD_EXPIRY_MONTH].value,
	// 			[CARD_TYPE]: cardType(state[CARD_NUMBER]),
	// 			[CARD_IS_DEFAULT]: state[CARD_IS_DEFAULT],
	// 		})
	// 		return state
	// 	})
	// 	return this
	// }
}

export default CardStore
