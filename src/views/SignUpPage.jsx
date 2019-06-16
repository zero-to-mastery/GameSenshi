import React from 'react'

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
	EMAIL,
	EMAIL_EXTRA_HEIGHT,
	USERNAME,
	USERNAME_EXTRA_HEIGHT,
	PASSWORD,
	PASSWORD_EXTRA_HEIGHT,
	TERM,
	SUBMIT_ERRORS,
	IS_VALID,
	ALERT_BODY,
	ALERT_OPEN,
	ALERT_COLOR,
	USER_EMAIL,
	USER_SIGNED_IN,
	USER_DISPLAY_NAME,
} from 'constantValues'

// form validation
import { Form as FinalForm } from 'react-final-form'
import createDecorator from 'final-form-focus'

// validation
import {
	signUpEmailValidation,
	signUpPasswordValidation,
	signUpTermValidation,
	signUpUsernameValidation,
} from 'utils/validation'

// state management
import { authStore, alertStore, userStore, Subscribe } from 'state'

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
	MessageList,
	IndexNavbar,
	SocialAuthButtonGroup,
} from 'components'

const focusOnError = createDecorator()

class RegisterPage extends React.Component {
	state = {
		squares1to6: '',
		squares7and8: '',
		maxHeight: 1200,
	}
	componentDidMount() {
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		this.refs.wrapper.scrollTop = 0
		document.body.classList.add('register-page')
		// stop this listener in dev mode to ease development (it setState a LOT!)
		process.env.REACT_APP_FOLLOW_CURSOR &&
			document.documentElement.addEventListener('mousemove', this.followCursor)
	}
	componentWillUnmount() {
		document.body.classList.remove('register-page')
		document.documentElement.removeEventListener('mousemove', this.followCursor)
	}
	followCursor = event => {
		let posX = event.clientX - window.innerWidth / 2
		let posY = event.clientY - window.innerWidth / 6
		this.setState({
			squares1to6:
				'perspective(500px) rotateY(' +
				posX * 0.05 +
				'deg) rotateX(' +
				posY * -0.05 +
				'deg)',
			squares7and8:
				'perspective(500px) rotateY(' +
				posX * 0.02 +
				'deg) rotateX(' +
				posY * -0.02 +
				'deg)',
		})
	}

	onSubmit = async (values, history, lastLocation) => {
		const {
			[STATUS]: status,
			[DATA]: data,
		} = await handleSignUpWithEmailAndPassword(values, () => {
			onSignedInRouting(history, lastLocation)
		})
		for (let property in data) {
			authStore.state[property + SUBMIT_ERRORS] = MessageList({
				validationResult: data[property],
				type: undefined,
			})
			authStore.state[property + IS_VALID] = !data[property]
		}
		if (status) {
			onSignedInRouting(history, lastLocation)
			userStore.setState({
				[USER_DISPLAY_NAME]: authStore.state[USERNAME],
				[USER_EMAIL]: authStore.state[EMAIL],
				[USER_SIGNED_IN]: true,
			})
			alertStore.setState({
				[ALERT_BODY]: (
					<>
						Registration successful, an verification email has been sent to{' '}
						<a
							href={'https://' + authStore.state[EMAIL]}
							target='_blank'
							rel='noopener noreferrer'
							className='alert-link'>
							{authStore.state[EMAIL]}
						</a>
					</>
				),
				[ALERT_COLOR]: 'success',
				[ALERT_OPEN]: true,
			})
			handleSignInWithEmailAndPassword(
				authStore.state[EMAIL],
				authStore.state[PASSWORD]
			)
			// if undefined mean no error
			// but this not much point since it will redirect and unmount soon
			return
		}
		return data
	}
	render() {
		const {
			state: { maxHeight, squares7and8, squares1to6 },
			props: { history, lastLocation },
			onSubmit,
		} = this
		return (
			<>
				<IndexNavbar />
				<div className='wrapper' ref='wrapper'>
					<Subscribe to={[authStore]}>
						{authStore => {
							const {
								[EMAIL_EXTRA_HEIGHT]: emailExtraHeight,
								[PASSWORD_EXTRA_HEIGHT]: passwordExtraHeight,
								[USERNAME_EXTRA_HEIGHT]: usernameExtraHeight,
							} = authStore.state
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
												<Col className='offset-lg-0 offset-md-3' lg='5' md='6'>
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
																[USERNAME]: '',
																[EMAIL]: '',
																[PASSWORD]: '',
																[TERM]: false,
															}}
															decorators={[focusOnError]}
															onSubmit={values => {
																return onSubmit(values, history, lastLocation)
															}}>
															{({ handleSubmit, submitting }) => (
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
																		// ! and whenever component going to unmount (route to other page)
																		// ! the field components will run validation
																		// ! these is not good as the validation process invoking steState in a promise
																		// ! there will be memory leak warning if you try to setState on unmounted component
																		// ! seem like problem of either react final form or react router
																		// * implement useEffect component will unmount of Input Field component to solve these issue
																		*/}
																			<InputField
																				type={USERNAME}
																				name={USERNAME}
																				container={authStore}
																				placeholder='Username'
																				icon='tim-icons icon-single-02'
																				validation={value =>
																					signUpUsernameValidation(value)
																				}
																			/>
																			<InputField
																				type={EMAIL}
																				name={EMAIL}
																				container={authStore}
																				placeholder='Email'
																				icon='tim-icons icon-email-85'
																				validation={value =>
																					signUpEmailValidation(value)
																				}
																				serverValidation={handleIsEmailExist}
																			/>
																			<InputField
																				type={PASSWORD}
																				name={PASSWORD}
																				container={authStore}
																				placeholder='Password'
																				icon='tim-icons icon-lock-circle'
																				validation={value =>
																					signUpPasswordValidation(value)
																				}
																			/>
																			<InputField
																				type='checkbox'
																				name={TERM}
																				container={authStore}
																				validation={value =>
																					signUpTermValidation(value)
																				}
																			/>
																		</Form>
																	</CardBody>
																	<CardFooter>
																		<Row className='d-flex'>
																			<Col className='col-2' />
																			<Col className='pl-0 pr-0 d-flex justify-content-center'>
																				<Button
																					className='btn-round'
																					color='primary'
																					size='lg'
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
																							&nbsp;&nbsp;Creating Account
																						</>
																					) : (
																						'Creat Account'
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
}

export default withLastLocation(RegisterPage)
