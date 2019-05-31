import React from 'react'

// routing and api
import { Link } from 'react-router-dom'
import {
	handleSignUpWithEmailAndPassword,
	handleIsEmailExist,
	handleSignInWithGoogle,
	handleSignInWithFacebook,
	handleSignInWithEmailAndPassword,
	handleSignInWithTwitter,
} from 'api'
import { withLastLocation } from 'react-router-last-location'

// constants
import {
	WILL_UNMOUNT,
	DATA,
	STATUS,
	EMAIL,
	EMAIL_VALIDATION,
	EMAIL_EXTRA_HEIGHT,
	USERNAME,
	USERNAME_EXTRA_HEIGHT,
	USERNAME_VALIDATION,
	PASSWORD,
	PASSWORD_VALIDATION,
	PASSWORD_EXTRA_HEIGHT,
	TERM,
	TERM_VALIDATION,
	SUBMIT_ERRORS,
	IS_VALID,
	SIGNED_IN,
	SIGNED_UP,
} from 'constantValues'

// form validation
import { Form as FinalForm } from 'react-final-form'
import { authValidation } from 'utils/validation'
import createDecorator from 'final-form-focus'

// state management
import { Subscribe } from 'unstated'
import { authStore } from 'state'

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
	UncontrolledTooltip,
	Form,
	Container,
	Row,
	Col,
} from 'reactstrap'
import Loader from 'react-loader-spinner'

// core components
import { Footer, InputField, MessageList } from 'components'

const {
	[EMAIL_VALIDATION]: emailValidation,
	[PASSWORD_VALIDATION]: passwordValidation,
	[TERM_VALIDATION]: termValidation,
	[USERNAME_VALIDATION]: usernameValidation,
} = authValidation

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
		authStore.state[WILL_UNMOUNT] = false
	}
	componentWillUnmount() {
		document.body.classList.remove('register-page')
		document.documentElement.removeEventListener('mousemove', this.followCursor)
		authStore.state[WILL_UNMOUNT] = true
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
		} = await handleSignUpWithEmailAndPassword(values)
		for (let property in data) {
			authStore.state[property + SUBMIT_ERRORS] = MessageList({
				validationResult: data[property],
				type: undefined,
			})
			authStore.state[property + IS_VALID] = !data[property]
		}
		if (status) {
			if (lastLocation) {
				history.goBack()
			} else {
				history.push('/index')
			}
			authStore.setState({
				[SIGNED_IN]: true,
				[SIGNED_UP]: true,
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
				<div className='wrapper' ref='wrapper'>
					<Subscribe to={[authStore]}>
						{authStore => (
							<div
								className='page-header'
								style={{
									display: 'block',
									maxHeight:
										maxHeight +
										authStore.state[EMAIL_EXTRA_HEIGHT] +
										authStore.state[PASSWORD_EXTRA_HEIGHT] +
										authStore.state[USERNAME_EXTRA_HEIGHT] +
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
												<Card className='card-register'>
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
																	<div className='btn-wrapper text-center'>
																		<Button
																			size='lg'
																			className='btn-icon btn-round'
																			color='facebook'
																			href=''
																			id='facebook'
																			target='_blank'
																			onClick={e => {
																				e.preventDefault()
																				if (lastLocation) {
																					history.goBack()
																				} else {
																					history.push('/index')
																				}
																				handleSignInWithFacebook()
																			}}>
																			<i className='fab fa-facebook-square' />
																		</Button>
																		<UncontrolledTooltip
																			delay={0}
																			target='facebook'>
																			Sign up with Facebook!
																		</UncontrolledTooltip>
																		<Button
																			size='lg'
																			className='btn-icon btn-round'
																			color='warning'
																			href=''
																			id='google'
																			target='_blank'
																			onClick={e => {
																				e.preventDefault()
																				if (lastLocation) {
																					history.goBack()
																				} else {
																					history.push('/index')
																				}
																				handleSignInWithGoogle()
																			}}>
																			<i className='fab fa-google' />
																		</Button>
																		<UncontrolledTooltip
																			delay={0}
																			target='google'>
																			Sign up with Google!
																		</UncontrolledTooltip>
																		<Button
																			size='lg'
																			className='btn-icon btn-round'
																			color='twitter'
																			href=''
																			id='twitter'
																			target='_blank'
																			onClick={e => {
																				e.preventDefault()
																				if (lastLocation) {
																					history.goBack()
																				} else {
																					history.push('/index')
																				}
																				handleSignInWithTwitter()
																			}}>
																			<i className='fab fa-twitter' />
																		</Button>
																		<UncontrolledTooltip
																			delay={0}
																			target='twitter'>
																			Sign up with Twitter!
																		</UncontrolledTooltip>
																	</div>
																	<Row>
																		<Col />
																		<Col className='text-center text-muted mb-4 mt-3 col-auto'>
																			<small>Or Classically</small>
																		</Col>
																		<Col />
																	</Row>
																	<Form className='form'>
																		{/** 
																		// ! bug
																		// ! whenever any of these two field components is render
																		// ! and whenever component going to unmount (route to other page)
																		// ! the field components will run validation
																		// ! these is not good as the validation process involving steState in a promise
																		// ! there will be memory leak warning if you try to setState on unmounted component
																		// ! seem like problem of either react final form or react router
																		// * implement life cycle method of parent component to solve these issue
																		// * tested, above solution works, trace WILL_UNMOUNT in didComponentMount and willComponentUnmount method to get further insight
																		*/}
																		<InputField
																			type={USERNAME}
																			name={USERNAME}
																			container={authStore}
																			placeholder='Username'
																			icon='tim-icons icon-single-02'
																			validation={value =>
																				usernameValidation(value)
																			}
																		/>
																		<InputField
																			type={EMAIL}
																			name={EMAIL}
																			container={authStore}
																			placeholder='Email'
																			icon='tim-icons icon-email-85'
																			validation={value =>
																				emailValidation(value)
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
																				passwordValidation(value)
																			}
																		/>
																		<InputField
																			type='checkbox'
																			name={TERM}
																			container={authStore}
																			validation={value =>
																				termValidation(value)
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
						)}
					</Subscribe>
					<Footer />
				</div>
			</>
		)
	}
}

export default withLastLocation(RegisterPage)
