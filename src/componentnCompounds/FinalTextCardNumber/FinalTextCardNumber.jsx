import React from 'react'
// utils
import { stopUndefined } from 'utils'
import { string } from 'yup'
//components
import { ExportMolecules } from 'componentMolecules'

const { FinalInputText } = stopUndefined(ExportMolecules)

const FINAL_TEXT_CARD_NUMBER = 'cardnumber'

const onChange = (e, onValueChange = () => {}) => {
	let {
		target: { value },
	} = e

	if (
		string()
			.matches(/^(?:[0-9 ]*)$/, 'only number and space allowed')
			.isValidSync(value)
	) {
		value = value.replace(/ /g, '')
		if (value.length < 17) {
			onValueChange(value)
			const indexes = [4, 9, 14]
			indexes.forEach(element => {
				if (value.length > element) {
					value = value.substr(0, element) + ' ' + value.substr(element)
				}
			})
			return value
		} else {
			return false
		}
	} else {
		return false
	}
}

const FinalTextCardNumber = props => {
	const {
		onValueChange,
		validation,
		existingCards,
		onCardFound,
		...restProps
	} = props
	return (
		<FinalInputText
			name={FINAL_TEXT_CARD_NUMBER}
			autoComplete='cc-number'
			placeholder='Card Number'
			hideSuccess
			onChange={e => {
				return onChange(e, onValueChange)
			}}
			icon='tim-icons icon-credit-card'
			validation={value => validation(value.replace(/ /g, ''))}
			{...restProps}
		/>
	)
}

export { FinalTextCardNumber, FINAL_TEXT_CARD_NUMBER }

// const findExistingCard = (
// 	cardNumber,
// 	existingCards,
// 	onCardFound = () => {}
// ) => {
// 	// TODO there is a non constant here
// 	if (cardNumber.length >= 4 && existingCards.length > 0) {
// 		const card = existingCards.find(card => {
// 						return card.cardNumber.substring(0, cardNumber.length) === cardNumber
// 		})
// 		if (card) {
// 			onCardFound(card)
// 		}
// 	}
// }
