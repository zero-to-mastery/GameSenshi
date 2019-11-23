import React, { useState } from 'react'
import { stopUndefined } from 'utils'
import { Label, FormGroup, Input, Table } from 'reactstrap'

import { Exports } from 'componentOrganisms'

const {
	Button,
	FormCard,
	IconCard,
	FINAL_TEXT_CARD_HOLDER_NAME,
	FINAL_TEXT_CARD_NUMBER,
	FINAL_SELECT_EXPIRY_MONTH,
	FINAL_SELECT_EXPIRY_YEAR,
	FORM_CARD_DEFAULT,
} = stopUndefined(Exports)

// * currently this is for demo, normally should fetch the card from api
const defaultCards = [
	{
		[FINAL_TEXT_CARD_NUMBER]: '4556949236166375',
		[FINAL_SELECT_EXPIRY_YEAR]: '2022',
		[FINAL_SELECT_EXPIRY_MONTH]: '06',
		[FORM_CARD_DEFAULT]: true,
		[FINAL_TEXT_CARD_HOLDER_NAME]: 'tester1',
	},
	{
		[FINAL_TEXT_CARD_NUMBER]: '5598618172773380',
		[FINAL_SELECT_EXPIRY_YEAR]: '2021',
		[FINAL_SELECT_EXPIRY_MONTH]: '05',
		[FORM_CARD_DEFAULT]: false,
		[FINAL_TEXT_CARD_HOLDER_NAME]: 'tester2',
	},
]

const resetAllCardDefault = (cards = [], setCards = () => {}) => {
	cards.forEach(card => {
		card[FORM_CARD_DEFAULT] = false
	})
	setCards([...cards])
}

const listNewCard = (cardValues, cards = [], setCards = () => {}) => {
	//TODO property is not constant
	const {
		isDefault,
		[FINAL_TEXT_CARD_NUMBER]: cardNumber,
		[FINAL_SELECT_EXPIRY_MONTH]: expiryMonth,
		[FINAL_SELECT_EXPIRY_YEAR]: expiryYear,
		[FINAL_TEXT_CARD_HOLDER_NAME]: holderName,
	} = cardValues

	const existingCard = cards.find(card => {
		return card[FINAL_TEXT_CARD_NUMBER] === cardNumber
	})
	if (isDefault) {
		resetAllCardDefault(cards, setCards)
	}

	if (existingCard) {
		//overwrite existing card
		existingCard[FINAL_SELECT_EXPIRY_YEAR] = expiryYear.value
		existingCard[FINAL_SELECT_EXPIRY_MONTH] = expiryMonth.value
		existingCard[FINAL_TEXT_CARD_HOLDER_NAME] = holderName
		if (isDefault) {
			//setting condition is to prevent there is no default card
			existingCard[FORM_CARD_DEFAULT] = isDefault
		}
		setCards(cards => [...cards])
	} else {
		setCards(cards => {
			cards.push({
				[FINAL_TEXT_CARD_NUMBER]: cardNumber,
				[FINAL_SELECT_EXPIRY_YEAR]: expiryYear.value,
				[FINAL_SELECT_EXPIRY_MONTH]: expiryMonth.value,
				[FINAL_TEXT_CARD_HOLDER_NAME]: holderName,
				[FORM_CARD_DEFAULT]: isDefault || cards.length === 0,
			})
			return cards
		})
	}
}
// TODO create third party card processor api
const TabPanePaymentSettings = () => {
	const [isOpenCardModal, setIsOpenCardModal] = useState(false)
	const [cards, setCards] = useState([...defaultCards])

	return (
		<>
			<FormCard
				isOpen={isOpenCardModal}
				toggle={() => {
					setIsOpenCardModal(!isOpenCardModal)
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
							[FINAL_SELECT_EXPIRY_MONTH]: expiryMonth,
							[FINAL_SELECT_EXPIRY_YEAR]: expiryYear,
							[FORM_CARD_DEFAULT]: isDefaultCard,
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
														cards[i][FORM_CARD_DEFAULT] = true
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
										}}
									>
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
				}}
			>
				<i className='tim-icons icon-simple-add' /> Add card
			</Button>
		</>
	)
}

export { TabPanePaymentSettings }
