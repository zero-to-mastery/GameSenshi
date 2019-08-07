import React, { useState } from 'react'
import { stopUndefined } from 'utils'
// reactstrap components
import { Button, Label, FormGroup, Input, Table } from 'reactstrap'

import { ExportOrganisms } from 'componentOrganisms'

const {
	FormCard,
	IconCard,
	FINAL_TEXT_CARD_HOLDER_NAME,
	FINAL_TEXT_CARD_NUMBER,
} = stopUndefined(ExportOrganisms)

const IS_DEFAULT = 'isDefault'
const EXPIRY_MONTH = 'expiryMonth'
const EXPIRY_YEAR = 'expiryYear'

// * currently this is for demo, normally should fetch the card from api
const defaultCards = [
	{
		[FINAL_TEXT_CARD_NUMBER]: '4556949236166375',
		[EXPIRY_YEAR]: '2022',
		[EXPIRY_MONTH]: '06',
		[IS_DEFAULT]: true,
		[FINAL_TEXT_CARD_HOLDER_NAME]: 'tester1',
	},
	{
		[FINAL_TEXT_CARD_NUMBER]: '5598618172773380',
		[EXPIRY_YEAR]: '2021',
		[EXPIRY_MONTH]: '05',
		[IS_DEFAULT]: false,
		[FINAL_TEXT_CARD_HOLDER_NAME]: 'tester2',
	},
]

const resetAllCardDefault = (cards = [], setCards = () => {}) => {
	cards.forEach(card => {
		card[IS_DEFAULT] = false
	})
	setCards([...cards])
}

const listNewCard = (cardValues, cards = [], setCards = () => {}) => {
	//TODO property is not constant
	const {
		isDefault,
		cardNumber,
		expiryMonth,
		expiryYear,
		holderName,
	} = cardValues

	const existingCard = cards.find(card => {
		return card[FINAL_TEXT_CARD_NUMBER] === cardNumber
	})
	if (isDefault) {
		resetAllCardDefault(cards, setCards)
	}

	if (existingCard) {
		//overwrite existing card
		existingCard[EXPIRY_YEAR] = expiryYear
		existingCard[EXPIRY_MONTH] = expiryMonth
		existingCard[FINAL_TEXT_CARD_HOLDER_NAME] = holderName
		if (isDefault) {
			//setting condition is to prevent there is no default card
			existingCard[IS_DEFAULT] = isDefault
		}
		setCards(cards => [...cards])
	} else {
		setCards(cards => {
			cards.push({
				[FINAL_TEXT_CARD_NUMBER]: cardNumber,
				[EXPIRY_YEAR]: expiryYear,
				[EXPIRY_MONTH]: expiryMonth,
				[FINAL_TEXT_CARD_HOLDER_NAME]: holderName,
				[IS_DEFAULT]: isDefault || cards.length === 0,
			})
			return cards
		})
	}
}
// TODO create third party card processor api
const TabPanePaymentSetting = () => {
	const [isOpenCardModal, setIsOpenCardModal] = useState(false)
	const [cards, setCards] = useState([...defaultCards])

	return (
		<>
			<FormCard
				isOpen={isOpenCardModal}
				toggle={() => {
					setIsOpenCardModal(isOpenCardModal => !isOpenCardModal)
				}}
				onSuccessfulSubmission={values => {
					listNewCard(values, cards, setCards)
				}}
			/>

			<header>
				<h2 className='text-uppercase'>Payment methods</h2>
			</header>
			<hr className='line-info' />
			<br />
			<Table className='align-items-center'>
				<thead>
					<tr>
						<th scope='col'>Card Type</th>
						<th scope='col'>Card Number</th>
						<th scope='col'>Payment Method</th>
						<th scope='col'>Action</th>
					</tr>
				</thead>
				<tbody>
					{cards.map((card, i) => {
						const {
							[FINAL_TEXT_CARD_NUMBER]: cardNumber,
							[EXPIRY_MONTH]: expiryMonth,
							[EXPIRY_YEAR]: expiryYear,
							[IS_DEFAULT]: isDefaultCard,
						} = card
						return (
							<tr key={cardNumber.slice(-4)}>
								<th scope='row'>
									<IconCard cardNumber={cardNumber} />
								</th>
								<td>
									<span className='d-block'>
										•••• •••• •••• {cardNumber.slice(-4)}
									</span>
									<small className='text-muted'>
										Exp:
										{` ${expiryMonth}/${expiryYear.slice(-2)}`}
									</small>
								</td>
								<td className='text-center'>
									<FormGroup check className='form-check-radio'>
										<Label check>
											<Input
												defaultChecked={isDefaultCard}
												defaultValue={i}
												id='Radios'
												name='payment'
												type='radio'
												onClick={() => {
													setCards(cards => {
														resetAllCardDefault(cards, setCards)
														cards[i][IS_DEFAULT] = true
														return [...cards]
													})
												}}
											/>
											<span className='form-check-sign' />
										</Label>
									</FormGroup>
								</td>
								<td>
									<Button
										className='btn-simple'
										color='danger'
										size='sm'
										type='button'
										onClick={() => {
											setCards(cards => {
												cards.splice(i, 1)
												return [...cards]
											})
										}}>
										<i className='tim-icons icon-simple-remove' /> Remove card
									</Button>
								</td>
							</tr>
						)
					})}
				</tbody>
			</Table>
			<Button
				color='info'
				size='sm'
				type='button'
				onClick={() => {
					setIsOpenCardModal(true)
				}}>
				<i className='tim-icons icon-simple-add' /> Add card
			</Button>
		</>
	)
}

export { TabPanePaymentSetting }
