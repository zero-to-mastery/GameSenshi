import React from 'react'
import valid from 'card-validator'

const cardType = cardNumber => {
	// this is for payment icon
	let cardType = ''

	try {
		cardType = valid.number(cardNumber).card.niceType
	} catch (e) {
		//
	}

	switch (cardType) {
		case 'Visa':
			return 'visa'
		case 'Mastercard':
			return 'mastercard'
		case 'American Express':
			return 'amex'
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

const IconCard = props => {
	const { cardNumber } = props

	return (
		<img
			alt='...'
			className='avatar'
			src={require(`payment-icons/min/flat/${cardType(cardNumber)}.svg`)}
		/>
	)
}

export { IconCard }
