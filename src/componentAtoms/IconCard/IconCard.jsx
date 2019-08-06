import React from 'react'
import valid from 'card-validator'

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
