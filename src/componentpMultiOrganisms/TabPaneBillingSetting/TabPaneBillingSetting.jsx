import React, { useState } from 'react'
import { stopUndefined } from 'utils'
// reactstrap components
import { Button, Label, FormGroup, Input, Table } from 'reactstrap'

import { ExportOrganisms } from 'componentOrganisms'

const { FormCard, IconCard } = stopUndefined(ExportOrganisms)

const CARD_NUMBER = 'cardNumber'
const CARD_IS_DEFAULT = 'isDefault'
const CARD_EXPIRY_YEAR = 'expiryYear'
const CARD_EXPIRY_MONTH = 'expiryMonth'

// * currently this is for demo, normally should fetch the card from api
const defaultCards = [
	{
		[CARD_NUMBER]: '4556949236166375',
		[CARD_EXPIRY_YEAR]: '2022',
		[CARD_EXPIRY_MONTH]: '06',
		[CARD_IS_DEFAULT]: true,
	},
	{
		[CARD_NUMBER]: '5598618172773380',
		[CARD_EXPIRY_YEAR]: '2021',
		[CARD_EXPIRY_MONTH]: '05',
		[CARD_IS_DEFAULT]: false,
	},
]

const resetAllCardDefault = (cards = [], setCards = () => {}) => {
	cards.forEach(card => {
		card[CARD_IS_DEFAULT] = false
	})
	setCards([...cards])
}

const listNewCard = (cardValues, cards = [], setCards = () => {}) => {
	//TODO property is not constant
	const { isDefault, cardNumber, expiryMonth, expiryYear } = cardValues

	const existingCard = cards.find(card => {
		return card[CARD_NUMBER] === cardNumber
	})
	if (isDefault) {
		resetAllCardDefault(cards, setCards)
	}

	if (existingCard) {
		//overwrite existing card
		existingCard[CARD_EXPIRY_YEAR] = expiryYear
		existingCard[CARD_EXPIRY_MONTH] = expiryMonth
		if (isDefault) {
			//setting condition is to prevent there is no default card
			existingCard[CARD_IS_DEFAULT] = isDefault
		}
		setCards(cards => [...cards])
	} else {
		setCards(cards => {
			cards.push({
				[CARD_NUMBER]: cardNumber,
				[CARD_EXPIRY_YEAR]: expiryYear,
				[CARD_EXPIRY_MONTH]: expiryMonth,
				[CARD_IS_DEFAULT]: isDefault || cards.length === 0,
			})
			return cards
		})
	}
}
// TODO create third party card processor api
const TabPaneBillingSetting = () => {
	const [isOpenCardModal, setIsOpenCardModal] = useState(false)
	const [cards, setCards] = useState([...defaultCards])

	return (
		<>
			{isOpenCardModal && (
				<FormCard
					isOpen={isOpenCardModal}
					toggle={() => {
						setIsOpenCardModal(isOpenCardModal => !isOpenCardModal)
					}}
					onSuccessfulSubmission={values => {
						listNewCard(values, cards, setCards)
					}}
				/>
			)}
			<header>
				<h2 className='text-uppercase'>Payment method</h2>
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
							[CARD_NUMBER]: cardNumber,
							[CARD_EXPIRY_MONTH]: expiryMonth,
							[CARD_EXPIRY_YEAR]: expiryYear,
							[CARD_IS_DEFAULT]: isDefaultCard,
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
														cards[i][CARD_IS_DEFAULT] = true
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

export { TabPaneBillingSetting }
