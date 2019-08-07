import React, { useState, useEffect, useRef } from 'react'
import { stopUndefined } from 'utils'
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
import { ExportCompounds } from 'componentnCompounds'
// styles
import 'react-credit-cards/lib/styles.scss'

const {
	FinalForm,
	CheckBox,
	FinalCardNumberPropedDefault,
	FINAL_TEXT_CARD_NUMBER,
	FinalTextCardHolderNamePropedDefault,
	FINAL_TEXT_CARD_HOLDER_NAME,
	FinalExpiryMonthPropedDefault,
	FinalExpiryYearPropedDefault,
	FinalTextCardCVCPropedDefault,
	FINAL_TEXT_CARD_CVC,
	ButtonSubmit,
} = stopUndefined(ExportCompounds)

const EXPIRY_MONTH = 'expiryMonth'
const EXPIRY_YEAR = 'expiryYear'

const onSubmission = async (
	formError,
	values,
	onSubmit = () => {},
	onSuccessfulSubmission = () => {}
) => {
	const isSuccess = await onSubmit(values)
	if (isSuccess) {
		onSuccessfulSubmission()
		return
	} else {
		return { [formError]: 'card is rejected, please try again later' }
	}
}

// TODO more reasonable input width for all fields
const FormCard = props => {
	const [cardNumber, setCardNumber] = useState('')
	const [holderName, setHolderName] = useState('')
	const [expiryMonth, setExpiryMonth] = useState({ value: '' })
	const [expiryYear, setExpiryYear] = useState({ value: '' })
	const [isDefault, setIsDefault] = useState(false)
	const [focus, setFocus] = useState('number')
	const [cvc, setCvc] = useState('')
	const [, forceUpdate] = useState()

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
			isOpen={isOpen}
			toggle={toggle}
			onExit={() => {
				setCardNumber('')
				setHolderName('')
				setExpiryMonth({ value: '' })
				setExpiryYear({ value: '' })
				setCvc('')
				setIsDefault(false)
				setFocus('number')
			}}
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
					[FINAL_TEXT_CARD_NUMBER]: '',
					[FINAL_TEXT_CARD_CVC]: '',
					[EXPIRY_MONTH]: '',
					[EXPIRY_YEAR]: '',
					[FINAL_TEXT_CARD_HOLDER_NAME]: '',
				}}
				onSubmit={values => {
					onSubmission(values, onSubmit, () => {
						onSuccessfulSubmission({
							isDefault,
							cardNumber,
							expiryMonth,
							expiryYear,
							holderName,
						})
						toggle()
					})
				}}>
				{({ handleSubmit, submitting, submitError }) => (
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
												expiry={`${expiryMonth.value}/${expiryYear.value}`}
												cvc={cvc}
												focused={focus}
											/>
										</FormGroup>
									</Col>
									<Col xs='12' md='7' className='d-flex align-items-center'>
										<Container>
											<Form>
												<FinalCardNumberPropedDefault
													onValueChange={values => {
														setCardNumber(values)
													}}
													onFocus={() => {
														setFocus('number')
													}}
													submitRef={submitButton}
												/>
												<FinalTextCardHolderNamePropedDefault
													name={FINAL_TEXT_CARD_HOLDER_NAME}
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
													<FinalTextCardCVCPropedDefault
														name={FINAL_TEXT_CARD_CVC}
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
															<span className='text-success'>
																set as default?
															</span>
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
							{submitError && !submitting && `Error: ${submitError}`}
							<ButtonSubmit
								submitRef={submitButton}
								disabled={submitting}
								onClick={handleSubmit}
								color='primary'>
								{submitting ? 'Saving' : 'Save'}
							</ButtonSubmit>
						</ModalFooter>
					</>
				)}
			</FinalForm>
		</Modal>
	)
}

export { FormCard }
