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
	Input,
	Label,
	Form,
} from 'reactstrap'

// core components
import Cards from 'react-credit-cards'
import Loader from 'react-loader-spinner'
import { InputField, FinalForm } from 'components/FinalForm'

// styles
import 'react-credit-cards/lib/styles.scss'

// constants
import {
	MONTH_ABVS_SELECT,
	YEARS,
	CARD_CVC,
	CARD_NUMBER,
	CARD_EXPIRY_YEAR,
	CARD_HOLDER_NAME,
	CARD_EXPIRY_MONTH,
	CARD_IS_DEFAULT,
	CARD_IS_OPEN,
} from 'constantValues'

// state
import { cardStore, Subscribe } from 'state'

// utils
import { string } from 'yup'
import {
	cardNumberValidation,
	cardCvcValidation,
	cardExpiryValidation,
	cardNameValidation,
} from 'utils/validation'

const CardModal = props => {
	const [, forceUpdate] = useState()
	const [focus, setFocus] = useState('number')

	const submitButton = useRef(null)

	const onChangeNumber = e => {
		let {
			target: { value },
		} = e

		let validate = false

		try {
			validate = string()
				.matches(/^(?:[0-9 ]*)$/, 'only number and space allowed')
				.isValidSync(value)
		} catch (e) {
			//
		}

		value = value.replace(/ /g, '')
		if (validate && value.length < 17) {
			const indexes = [4, 9, 14]
			indexes.forEach(element => {
				if (value.length > element) {
					value = value.substr(0, element) + ' ' + value.substr(element)
				}
			})
			return value
		} else {
			// return false to stop changing it
			return false
		}
	}

	useEffect(() => {
		window.addEventListener('resize', forceUpdate)
		return () => {
			window.removeEventListener('resize', forceUpdate)
		}
	}, [])

	return (
		<Subscribe to={[cardStore]}>
			{cardStore => {
				const {
					state: {
						[CARD_NUMBER]: cardNumber,
						[CARD_HOLDER_NAME]: cardHolderName,
						[CARD_CVC]: cvc,
						[CARD_EXPIRY_MONTH]: { value: expiryMonth },
						[CARD_EXPIRY_YEAR]: { value: expiryYear },
						[CARD_IS_DEFAULT]: isDefault,
						[CARD_IS_OPEN]: open,
					},
					toggle,
					toggleIsDefault,
				} = cardStore
				return (
					<Modal
						style={window.innerWidth > 768 ? { maxWidth: 800 } : {}}
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
						<FinalForm
							initialValues={{
								[CARD_NUMBER]: '',
								[CARD_CVC]: '',
								[CARD_EXPIRY_MONTH]: '',
								[CARD_EXPIRY_YEAR]: '',
								[CARD_HOLDER_NAME]: '',
							}}
							onSubmit={async () => {
								// TODO display submit error with in modal alert
								// TODO create third party card processor api
								// TODO more reasonable input width for all fields
								// TODO need FORM_ERROR
								cardStore.setState(state => {
									toggle() // TODO this should only run if submit success
									cardStore.onSubmit()
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
															name={cardHolderName}
															expiry={`${expiryMonth}/${expiryYear}`}
															cvc={cvc}
															focused={focus}
														/>
													</FormGroup>
												</Col>
												<Col
													xs='12'
													md='7'
													className='d-flex align-items-center'>
													<Container>
														<Form>
															<Row>
																<Col>
																	<FormGroup>
																		<InputField
																			placeholder='Card Number'
																			name={CARD_NUMBER}
																			type='text'
																			hideSuccess
																			container={cardStore}
																			onChange={onChangeNumber}
																			onFocus={() => {
																				setFocus('number')
																			}}
																			icon='tim-icons icon-credit-card'
																			validation={value =>
																				cardNumberValidation(
																					value.replace(/ /g, '')
																				)
																			}
																			submitRef={submitButton}
																		/>
																	</FormGroup>
																</Col>
															</Row>
															<Row>
																<Col>
																	<FormGroup>
																		<InputField
																			placeholder='Card Holder Name'
																			name={CARD_HOLDER_NAME}
																			type='text'
																			hideSuccess
																			container={cardStore}
																			onChange={e => {
																				const {
																					target: { value },
																				} = e
																				if (value.length < 100) {
																					return e.target.value
																				}
																				return false
																			}}
																			onFocus={() => {
																				setFocus('name')
																			}}
																			icon='tim-icons icon-single-02'
																			validation={cardNameValidation}
																			submitRef={submitButton}
																		/>
																	</FormGroup>
																</Col>
															</Row>
															<Row>
																<Col xs='6' className='pr-0'>
																	<FormGroup>
																		<InputField
																			className='react-select react-select-info'
																			classNamePrefix='react-select'
																			isSearchable={false}
																			name={CARD_EXPIRY_MONTH}
																			component='select'
																			validation={value =>
																				cardExpiryValidation(
																					value,
																					MONTH_ABVS_SELECT.slice(1)
																				)
																			}
																			onFocus={() => {
																				setFocus('expiry')
																			}}
																			options={MONTH_ABVS_SELECT}
																			container={cardStore}
																		/>
																	</FormGroup>
																</Col>
																<Col xs='6'>
																	<FormGroup>
																		<InputField
																			className='react-select react-select-info'
																			classNamePrefix='react-select'
																			isSearchable={false}
																			name={CARD_EXPIRY_YEAR}
																			component='select'
																			onFocus={() => {
																				setFocus('expiry')
																			}}
																			validation={value =>
																				cardExpiryValidation(
																					value,
																					YEARS.slice(1)
																				)
																			}
																			options={YEARS}
																			container={cardStore}
																		/>
																	</FormGroup>
																</Col>
															</Row>
															<Row>
																<Col xs='6'>
																	<FormGroup>
																		<InputField
																			placeholder='CVC'
																			name={CARD_CVC}
																			type='text'
																			hideSuccess
																			container={cardStore}
																			onChange={e => {
																				const {
																					target: { value },
																				} = e
																				if (!isNaN(value) && value.length < 5) {
																					return e.target.value
																				}
																				return false
																			}}
																			onFocus={() => {
																				setFocus('cvc')
																			}}
																			icon='tim-icons icon-lock-circle'
																			validation={value =>
																				cardCvcValidation(value)
																			}
																			submitRef={submitButton}
																		/>
																	</FormGroup>
																</Col>
																<Col xs='6'>
																	<FormGroup check className='text-left'>
																		<Label check>
																			<Input
																				type='checkbox'
																				checked={isDefault}
																				onClick={() => {
																					toggleIsDefault()
																				}}
																				onChange={() => {}}
																			/>
																			<span className='form-check-sign' />
																			set as default?
																		</Label>
																	</FormGroup>
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
			}}
		</Subscribe>
	)
}

export default CardModal
