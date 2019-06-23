import React, { useState, useEffect } from 'react'
import {
	Button,
	Modal,
	ModalBody,
	ModalFooter,
	Container,
	Row,
	Col,
	FormGroup,
	Input,
	Label,
} from 'reactstrap'
import Cards from 'react-credit-cards'
import 'react-credit-cards/lib/styles.scss'

// constants
import { USER_CARDS } from 'constantValues'

// state
import { userStore, Subscribe } from 'state'

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

// toggle
const AuthModal = props => {
	const [, forceUpdate] = useState()
	const [cardNumber, setCardNumber] = useState('')
	const [cardHolderName, setCardHolderName] = useState('')
	const [expiry, setExp] = useState('')
	const [cvc, setCvc] = useState('')
	const [focus, setFocus] = useState('number')
	const [checked, setChecked] = useState(false)

	const { open, toggle } = props

	useEffect(() => {
		window.addEventListener('resize', forceUpdate)
		return () => {
			window.removeEventListener('resize', forceUpdate)
		}
	}, [])
	return (
		<Subscribe to={[userStore]}>
			{userStore => {
				const {
					state: { [USER_CARDS]: creditCards },
				} = userStore
				return (
					<Modal
						style={window.innerWidth > 768 ? { maxWidth: 700 } : {}}
						isOpen={open}
						toggle={toggle}
						backdrop='static'
						modalClassName='modal-black'>
						<div className='modal-header'>
							<button
								type='button'
								className='close'
								data-dismiss='modal'
								aria-label='Close'
								onClick={toggle}>
								<i className='tim-icons icon-simple-remove' />
							</button>
							<h5 className='modal-title'>Card</h5>
						</div>
						<ModalBody>
							<Container>
								<Row>
									<Col xs='12' md='6'>
										<FormGroup>
											<Cards
												number={cardNumber}
												name={cardHolderName}
												expiry={expiry}
												cvc={cvc}
												focused={focus}
											/>
										</FormGroup>
									</Col>
									<Col xs='12' md='6' className='d-flex align-items-center'>
										<Container>
											<Row>
												<Col>
													<FormGroup>
														<Input
															placeholder='Card Number'
															name='Card Number'
															type='tel'
															value={cardNumber}
															onFocus={() => {
																setFocus('number')
															}}
															onChange={e => {
																setCardNumber(e.target.value)
															}}
														/>
													</FormGroup>
												</Col>
											</Row>
											<Row>
												<Col>
													<FormGroup>
														<Input
															placeholder='Card Holder Name'
															name='Card Holder Name'
															type='text'
															value={cardHolderName}
															onFocus={() => {
																setFocus('name')
															}}
															onChange={e => {
																setCardHolderName(e.target.value)
															}}
														/>
													</FormGroup>
												</Col>
											</Row>
											<Row>
												<Col xs='7' className='pr-0'>
													<FormGroup>
														<Input
															placeholder='Valid Thru'
															name='Expiry Date'
															type='tel'
															value={expiry}
															onFocus={() => {
																setFocus('expiry')
															}}
															onChange={e => {
																setExp(e.target.value)
															}}
														/>
													</FormGroup>
												</Col>
												<Col xs='5'>
													<FormGroup>
														<Input
															placeholder='CVC'
															name='CVC'
															type='tel'
															value={cvc}
															onFocus={() => {
																setFocus('cvc')
															}}
															onChange={e => {
																setCvc(e.target.value)
															}}
														/>
													</FormGroup>
												</Col>
											</Row>
											<Row>
												<Col>
													<FormGroup check className='text-left'>
														<Label check>
															<Input
																type='checkbox'
																checked={checked}
																onChange={value => {
																	setChecked(value)
																}}
															/>
															<span className='form-check-sign' />
															set this card as default?
														</Label>
													</FormGroup>
												</Col>
											</Row>
										</Container>
									</Col>
								</Row>
							</Container>
						</ModalBody>
						<ModalFooter>
							<Button color='secondary' onClick={toggle}>
								Close
							</Button>
							<Button
								color='primary'
								onClick={() => {
									userStore.setState(state => {
										if (checked) {
											state[USER_CARDS].forEach(creditCard => {
												creditCard.isDefault = false
											})
										}
										state[USER_CARDS].push({
											last4Digits: cardNumber.slice(-4),
											expiry,
											cardType: cardType(cardNumber),
											isDefault: checked,
										})
										toggle()
										return state
									})
								}}>
								Continue
							</Button>
						</ModalFooter>
					</Modal>
				)
			}}
		</Subscribe>
	)
}

export default AuthModal
