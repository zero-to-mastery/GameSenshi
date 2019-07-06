import React, { useState, useEffect, useRef } from 'react'

// api
import {
	handleSignUpWithEmailAndPassword,
	handleIsEmailExist,
	handleSignInWithEmailAndPassword,
} from 'api'

// routing
import { Link } from 'react-router-dom'
import { withLastLocation } from 'react-router-last-location'
import { onSignedInRouting } from 'routes'

// constants
import {
	DATA,
	STATUS,
	SIGN_UP_EMAIL,
	SIGN_UP_EMAIL_EXTRA_HEIGHT,
	SIGN_UP_USERNAME,
	SIGN_UP_USERNAME_EXTRA_HEIGHT,
	SIGN_UP_PASSWORD,
	SIGN_UP_PASSWORD_EXTRA_HEIGHT,
} from 'constantValues'

// form validation
import { Form as FinalForm } from 'react-final-form'
import createDecorator from 'final-form-focus'
import { FORM_ERROR } from 'final-form'

// validation
import {
	signUpEmailValidation,
	signUpPasswordValidation,
	signUpUsernameValidation,
	emailPopoverMessages,
	usernamePopoverMessages,
	passwordPopoverMessages,
} from 'utils/validation'

// state management
import { signUpStore, alertStore, userStore, Subscribe } from 'state'

// react libraries components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	CardImg,
	CardTitle,
	Label,
	Form,
	Container,
	Row,
	Col,
} from 'reactstrap'
import Loader from 'react-loader-spinner'

// core components
import {
	Footer,
	InputField,
	IndexNavbar,
	SocialAuthButtonGroup,
} from 'components'

const focusOnError = createDecorator()

const SignUpPage = props => {
	const [squares1to6, setSquares1to6] = useState('')
	const [squares7and8, setSquares7and8] = useState('')
	const [maxHeight] = useState(999)

	const submitButton = useRef(null)
	const wrapper = useRef(null)

	const followCursor = event => {
		let posX = event.clientX - window.innerWidth / 2
		let posY = event.clientY - window.innerWidth / 6
		setSquares1to6(
			'perspective(500px) rotateY(' +
				posX * 0.05 +
				'deg) rotateX(' +
				posY * -0.05 +
				'deg)'
		)
		setSquares7and8(
			'perspective(500px) rotateY(' +
				posX * 0.02 +
				'deg) rotateX(' +
				posY * -0.02 +
				'deg)'
		)
	}

	useEffect(() => {
		signUpStore.resetState()
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		wrapper.current.scrollTop = 0
		document.body.classList.add('register-page')
		// stop this listener in dev mode to ease development
		// in dev mode, it setState a LOT! and causing lag (but not lag in class component
		if (process.env.REACT_APP_FOLLOW_CURSOR) {
			document.documentElement.addEventListener('mousemove', followCursor)
		}
		return () => {
			document.body.classList.remove('register-page')
			document.documentElement.removeEventListener('mousemove', followCursor)
		}
	}, [])

	const onSubmit = async (values, history, lastLocation) => {
		const {
			[SIGN_UP_EMAIL]: email,
			[SIGN_UP_PASSWORD]: password,
			[SIGN_UP_USERNAME]: username,
		} = values
		const result = await handleSignUpWithEmailAndPassword(values)

		if (typeof result === 'string') {
			return { [FORM_ERROR]: result }
		} else {
			const { [STATUS]: status, [DATA]: data } = result

			signUpStore.processSignUpErrors(data)

			if (status) {
				const alertBody = (
					<>
						Registration successful, an verification email has been sent to{' '}
						<a
							href={'https://' + email}
							target='_blank'
							rel='noopener noreferrer'
							className='alert-link'>
							{email}
						</a>
					</>
				)
				alertStore.show(alertBody, 'success')
				userStore.onSignUpWithPassword(username, email)

				onSignedInRouting(history, lastLocation)
				handleSignInWithEmailAndPassword(email, password)
				// if undefined mean no error
				// but this not much point since it will redirect and unmount soon
				return
			} else {
				return data
			}
		}
	}
	const { history, lastLocation } = props
	return (
		<>
			<IndexNavbar />
			<div className='wrapper' ref={wrapper}>
				<Subscribe to={[signUpStore]}>
					{signUpStore => {
						const {
							[SIGN_UP_EMAIL_EXTRA_HEIGHT]: emailExtraHeight,
							[SIGN_UP_PASSWORD_EXTRA_HEIGHT]: passwordExtraHeight,
							[SIGN_UP_USERNAME_EXTRA_HEIGHT]: usernameExtraHeight,
						} = signUpStore.state
						return (
							<div
								className='page-header'
								style={{
									display: 'block',
									maxHeight:
										maxHeight +
										emailExtraHeight +
										passwordExtraHeight +
										usernameExtraHeight +
										'px',
								}}>
								<div className='page-header-image' />
								<div className='content' style={{ marginTop: '5%' }}>
									<Container className='container-fluid'>
										<Row>
											<Col className='mx-auto' lg='5' md='8'>
												<div
													className='square square-7'
													id='square7'
													style={{ transform: squares7and8 }}
												/>
												<div
													className='square square-8'
													id='square8'
													style={{ transform: squares7and8 }}
												/>
												<Card
													className='card-register'
													style={{ zIndex: 1000 }}>
													<CardHeader>
														<CardImg
															alt='...'
															src={require('assets/img/square1.png')}
															style={{ top: '-8%' }}
														/>
														<CardTitle tag='h4'>Sign Up</CardTitle>
													</CardHeader>
													<CardBody>
														<div className='text-muted text-center ml-auto mr-auto'>
															<h3 className='mb-0'>Sign up with</h3>
														</div>
													</CardBody>
													<FinalForm
														initialValues={{
															[SIGN_UP_USERNAME]: '',
															[SIGN_UP_EMAIL]: '',
															[SIGN_UP_PASSWORD]: '',
														}}
														decorators={[focusOnError]}
														onSubmit={values => {
															return onSubmit(values, history, lastLocation)
														}}>
														{({ handleSubmit, submitting, submitError }) => (
															<>
																<CardBody>
																	<SocialAuthButtonGroup />
																	<Row>
																		<Col />
																		<Col className='text-center text-muted mb-4 mt-3 col-auto'>
																			<small>Or Classically</small>
																		</Col>
																		<Col />
																	</Row>
																	<Form className='form'>
																		{/** 
																		// ! bug?
																		// ! whenever any of these two field components is render
																		// ! and whenever component going to unmount (route to other page) the field components will run validation
																		// ! these is not good as the validation process invoking steState in a promise and cause memory leak issue
																		// ! step to reproduce: go to any page that has InputField, then redirect to website other than gamesenshi
																		// * implement useEffect component will unmount of Input Field component is not working
																		// * set signUpStore willUnmount state directly when parent component going to unmount and use it to stop setState work
																		// * set parent willUnmount state directly when parent component going to unmount and use it to stop setState does not work
																		// TODO research knowledge needed to deal with this issue
																				
																		*/}
																		<InputField
																			type={SIGN_UP_USERNAME}
																			name={SIGN_UP_USERNAME}
																			container={signUpStore}
																			placeholder='Username'
																			icon='tim-icons icon-single-02'
																			validation={value =>
																				signUpUsernameValidation(value)
																			}
																			popoverMessages={usernamePopoverMessages}
																			submitRef={submitButton}
																		/>
																		<div className='w-100 mb-3' />
																		<InputField
																			type={SIGN_UP_EMAIL}
																			name={SIGN_UP_EMAIL}
																			container={signUpStore}
																			placeholder='Email'
																			icon='tim-icons icon-email-85'
																			validation={value =>
																				signUpEmailValidation(value)
																			}
																			serverValidation={handleIsEmailExist}
																			popoverMessages={emailPopoverMessages}
																			submitRef={submitButton}
																		/>
																		<div className='w-100 mb-3' />
																		<InputField
																			type={SIGN_UP_PASSWORD}
																			name={SIGN_UP_PASSWORD}
																			container={signUpStore}
																			placeholder='Password'
																			icon='tim-icons icon-lock-circle'
																			validation={value =>
																				signUpPasswordValidation(value)
																			}
																			popoverMessages={passwordPopoverMessages}
																			submitRef={submitButton}
																		/>
																	</Form>
																</CardBody>
																<CardFooter>
																	<Row className='d-flex text-center'>
																		<Col>
																			{submitError &&
																				!submitting &&
																				`Error: ${submitError}`}
																		</Col>
																	</Row>
																	<Row className='d-flex'>
																		<Col className='col-2' />
																		<Col className='pl-0 pr-0 d-flex justify-content-center'>
																			<Button
																				ref={submitButton}
																				className='btn-round'
																				color='primary'
																				size='lg'
																				disabled={submitting}
																				onClick={() => {
																					handleSubmit()
																				}}>
																				{submitting ? (
																					<>
																						<Loader
																							type='Watch'
																							color='#00BFFF'
																							height='19px'
																							width='19px'
																						/>
																						&nbsp;&nbsp;Signing Up
																					</>
																				) : (
																					'Sign Up'
																				)}
																			</Button>
																		</Col>
																		<Col className='col-2' />
																	</Row>
																	<Row className='d-flex'>
																		<Col />
																		<Col className='col-auto'>
																			<Label check>
																				<span className='form-check-sign' />
																				{`Already a member? `}
																				<Link
																					to='/signIn'
																					className='font-weight-bold'>
																					Sign In
																				</Link>
																			</Label>
																		</Col>
																		<Col />
																	</Row>
																</CardFooter>
															</>
														)}
													</FinalForm>
													<Label check className='mb-3 text-center'>
														By creating account, you agree to our
														<Link
															className='link footer-link'
															style={{ color: '#ba54f5', fontSize: 12 }}
															to='/term'>
															&nbsp;Terms of Service.
														</Link>
													</Label>
												</Card>
											</Col>
										</Row>
									</Container>
									<div className='register-bg' />
									<div
										className='square square-1'
										id='square1'
										style={{ transform: squares1to6 }}
									/>
									<div
										className='square square-2'
										id='square2'
										style={{ transform: squares1to6 }}
									/>
									<div
										className='square square-3'
										id='square3'
										style={{ transform: squares1to6 }}
									/>
									<div
										className='square square-4'
										id='square4'
										style={{ transform: squares1to6 }}
									/>
									<div
										className='square square-5'
										id='square5'
										style={{ transform: squares1to6 }}
									/>
									<div
										className='square square-6'
										id='square6'
										style={{ transform: squares1to6 }}
									/>
								</div>
							</div>
						)
					}}
				</Subscribe>
				<Footer />
			</div>
		</>
	)
}

export default withLastLocation(SignUpPage)
