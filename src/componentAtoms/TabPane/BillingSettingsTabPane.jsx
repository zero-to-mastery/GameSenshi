import React from 'react'
//state
import { Subscribe, cardStore } from 'state'
// constants
import {
	CARD_TYPE,
	CARD_CARDS,
	CARD_IS_DEFAULT,
	CARD_EXPIRY_MONTH,
	CARD_EXPIRY_YEAR,
	CARD_LAST_4_DIGITS,
} from 'constantValues'
// reactstrap components
import { Button, Label, FormGroup, Input, Table } from 'reactstrap'

import CardModal from 'componentAtoms/Modals/CardModal'

const BillingSettingsTabPane = () => {
	return (
		<Subscribe to={[cardStore]}>
			{cardStore => {
				const {
					state: { [CARD_CARDS]: cards },
				} = cardStore
				return (
					<>
						<CardModal />
						<header>
							<h2 className='text-uppercase'>Billing method</h2>
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
									// TODO change this to cardIcon and create conversion method in cardStore
									const cardType = card[CARD_TYPE] // webpack cant read property accessor
									return (
										<tr key={i}>
											<th scope='row'>
												<img
													alt='...'
													className='avatar'
													src={require(`payment-icons/min/flat/${cardType}.svg`)}
												/>
											</th>
											<td>
												<span className='d-block'>
													•••• •••• •••• {card[CARD_LAST_4_DIGITS]}
												</span>
												<small className='text-muted'>
													Exp:
													{` ${card[CARD_EXPIRY_MONTH]}/${card[
														CARD_EXPIRY_YEAR
													].slice(-2)}`}
												</small>
											</td>
											<td className='text-center'>
												<FormGroup check className='form-check-radio'>
													<Label check>
														<Input
															defaultChecked={card[CARD_IS_DEFAULT]}
															defaultValue={i}
															id='Radios'
															name='payment'
															type='radio'
															onClick={() => {
																cardStore.setState(state => {
																	state[CARD_CARDS].forEach(card => {
																		card[CARD_IS_DEFAULT] = false
																	})
																	state[CARD_CARDS][i][CARD_IS_DEFAULT] = true
																	return state
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
														cardStore.setState(state => {
															state[CARD_CARDS].splice(i, 1)
															return state
														})
													}}>
													<i className='tim-icons icon-simple-remove' /> Remove
													card
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
								cardStore.show()
							}}>
							<i className='tim-icons icon-simple-add' /> Add card
						</Button>
					</>
				)
			}}
		</Subscribe>
	)
}

export default BillingSettingsTabPane
