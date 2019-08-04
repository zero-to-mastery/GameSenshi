import React, { useState, useEffect, useRef } from 'react'
// reactstrap
import {
	Button,
	Modal,
	ModalBody,
	ModalFooter,
	Container,
	Row,
	Col,
	FormGroup,
	Form,
} from 'reactstrap'
// core components
import Cards from 'react-credit-cards'
import Loader from 'react-loader-spinner'
import { ExportCompounds } from 'componentnCompounds'
// styles
import 'react-credit-cards/lib/styles.scss'

const {
	FinalForm,
	CheckBox,
	FinalCardNumberPropedDefault,
	FinalCardHolderNamePropedDefault,
	FinalExpiryMonthPropedDefault,
	FinalExpiryYearPropedDefault,
	FinalCardCVCPropedDefault,
} = ExportCompounds

const CARD_NUMBER = 'cardNumber'
const CVC = 'cvc'
const EXPIRY_MONTH = 'expiryMonth'
const EXPIRY_YEAR = 'expiryYear'
const HOLDER_NAME = 'holderName'

const onSubmission = (
	values = {
		[CARD_NUMBER]: '',
		[CVC]: '',
		[EXPIRY_MONTH]: '',
		[EXPIRY_YEAR]: '',
		[HOLDER_NAME]: '',
	},
	onSubmit = () => {},
	onSuccessfulSubmission = () => {}
) => {
	onSubmit(values)
	onSuccessfulSubmission()
}

const FormCard = props => {
	const [cardNumber, setCardNumber] = useState('')
	const [holderName, setHolderName] = useState('')
	const [expiryMonth, setExpiryMonth] = useState('00')
	const [expiryYear, setExpiryYear] = useState('00')
	const [cvc, setCvc] = useState('')
	const [isDefault, setIsDefault] = useState(false)
	const [, forceUpdate] = useState()
	const [focus, setFocus] = useState('number')

	const submitButton = useRef(null)

	useEffect(() => {
		window.addEventListener('resize', forceUpdate)
		return () => {
			window.removeEventListener('resize', forceUpdate)
		}
	}, [])

	const { toggle, isOpen, onSubmit, onSuccessfulSubmission } = props

	return (
		<Modal
			style={window.innerWidth > 768 ? { maxWidth: 800 } : {}}
			isOpen={isOpen || true}
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
			<FinalForm
				initialValues={{
					[CARD_NUMBER]: '',
					[CVC]: '',
					[EXPIRY_MONTH]: '',
					[EXPIRY_YEAR]: '',
					[HOLDER_NAME]: '',
				}}
				// TODO display submit error with in modal alert
				// TODO create third party card processor api
				// TODO more reasonable input width for all fields
				// TODO need FORM_ERROR

				onSubmit={values => {
					onSubmission(values, onSubmit, () => {
						onSuccessfulSubmission()
						toggle() // TODO toggle only run if submit success
					})
				}}>
				{({ handleSubmit, submitting }) => (
					<>
						<ModalBody>
							<Container>
								<Row>
									<Col
										xs='12'
										md='5'
										className='d-flex align-items-center justify-content-center'>
										<FormGroup>
											<Cards
												number={cardNumber}
												name={holderName}
												expiry={`${expiryMonth}/${expiryYear}`}
												cvc={cvc}
												focused={focus}
											/>
										</FormGroup>
									</Col>
									<Col xs='12' md='7' className='d-flex align-items-center'>
										<Container>
											<Form>
												<FinalCardNumberPropedDefault
													name={CARD_NUMBER}
													onValueChange={setCardNumber}
													onFocus={() => {
														setFocus('number')
													}}
													submitRef={submitButton}
												/>
												<FinalCardHolderNamePropedDefault
													name={HOLDER_NAME}
													onValueChange={setHolderName}
													onFocus={() => {
														setFocus('name')
													}}
													submitRef={submitButton}
												/>
												<Row>
													<FinalExpiryMonthPropedDefault
														name={EXPIRY_MONTH}
														onFocus={() => {
															setFocus('expiry')
														}}
														onValueChange={setExpiryMonth}
													/>
													<FinalExpiryYearPropedDefault
														name={EXPIRY_YEAR}
														onFocus={() => {
															setFocus('expiry')
														}}
														onValueChange={setExpiryYear}
													/>
												</Row>
												<Row>
													<FinalCardCVCPropedDefault
														name={CVC}
														onFocus={() => {
															setFocus('cvc')
														}}
														onValueChange={setCvc}
														submitRef={submitButton}
													/>
													<Col xs='6'>
														<CheckBox
															checked={isDefault}
															onClick={() => {
																setIsDefault(state => !state)
															}}>
															set as default?
														</CheckBox>
													</Col>
												</Row>
											</Form>
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
								ref={submitButton}
								color='primary'
								disabled={submitting}
								onClick={handleSubmit}>
								{submitting ? (
									<>
										<Loader
											type='Watch'
											color='#00BFFF'
											height='19px'
											width='19px'
										/>
										&nbsp;&nbsp;Add Card
									</>
								) : (
									'Get Started'
								)}
							</Button>
						</ModalFooter>
					</>
				)}
			</FinalForm>
		</Modal>
	)
}

export { FormCard }
