import React, { useState } from 'react'
//state
import { Subscribe, userStore } from 'state'
// constants
import { USER_CARDS } from 'constantValues'
// reactstrap components
import { Button, Label, FormGroup, Input, Table, TabPane } from 'reactstrap'

import CreditCardModel from 'components/Modals/CreditCardModel'

const BillingTabPane = () => {
	const [openCard, setOpenCard] = useState(false)

	return (
		<Subscribe to={[userStore]}>
			{userStore => {
				const {
					state: { [USER_CARDS]: creditCards },
				} = userStore
				return (
					<TabPane tabId='profile2'>
						<CreditCardModel
							open={openCard}
							toggle={() => {
								setOpenCard(openCard => !openCard)
							}}
						/>
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
								{creditCards.map((creditCard, i) => {
									return (
										<tr key={i}>
											<th scope='row'>
												<img
													alt='...'
													className='avatar'
													src={require(`payment-icons/min/flat/${
														creditCard.cardType
													}.svg`)}
												/>
											</th>
											<td>
												<span className='d-block'>
													•••• •••• •••• {creditCard.last4Digits}
												</span>
												<small className='text-muted'>
													Exp:
													{` ${
														creditCard.expiryMonth
													}/${creditCard.expiryYear.slice(-2)}`}
												</small>
											</td>
											<td className='text-center'>
												<FormGroup check className='form-check-radio'>
													<Label check>
														<Input
															defaultChecked={creditCard.isDefault}
															defaultValue={i}
															id='Radios'
															name='payment'
															type='radio'
															onClick={() => {
																userStore.setState(state => {
																	state[USER_CARDS].forEach(creditCard => {
																		creditCard.isDefault = false
																	})

																	state[USER_CARDS][i].isDefault = true
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
														userStore.setState(state => {
															state[USER_CARDS].splice(i, 1)
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
								setOpenCard(true)
							}}>
							<i className='tim-icons icon-simple-add' /> Add card
						</Button>
					</TabPane>
				)
			}}
		</Subscribe>
	)
}

export default BillingTabPane
