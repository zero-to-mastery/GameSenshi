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
} from 'reactstrap'
import Cards from 'react-credit-cards'
import 'react-credit-cards/lib/styles.scss'

// constants
import { USER_CREDIT_CARDS } from 'constantValues'

// state
import { userStore, Subscribe } from 'state'

// toggle
const AuthModal = props => {
	const [, forceUpdate] = useState()
	const [cardNumber, setCardNumber] = useState('')
	const [cardHolderName, setCardHolderName] = useState('')
	const [exp, setExp] = useState('')
	const [cvc, setCvc] = useState('')

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
					state: { [USER_CREDIT_CARDS]: creditCards },
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
							<h5 className='modal-title'>Credit Card</h5>
						</div>
						<ModalBody>
							<Container>
								<Row>
									<Col xs='12' md='6'>
										<FormGroup>
											<Cards
												number={123}
												name={123}
												expiry={123}
												cvc={123}
												focused={123}
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
															type='text'
															value={cardNumber}
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
															type='text'
															value={exp}
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
															type='text'
															value={cvc}
															onChange={e => {
																setCvc(e.target.value)
															}}
														/>
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
							<Button color='primary'>Continue</Button>
						</ModalFooter>
					</Modal>
				)
			}}
		</Subscribe>
	)
}

export default AuthModal
