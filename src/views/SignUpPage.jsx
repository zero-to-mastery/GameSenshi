import React from 'react'

// routing and api
import { Link } from 'react-router-dom'
import { handleSignUp, handleIsUserExist } from 'api'

// constants
import {
	EMAIL,
	PASSWORD,
	TERM,
	EMAIL_EXTRA_HEIGHT,
	PASSWORD_EXTRA_HEIGHT,
	EMAIL_VALIDATION,
	PASSWORD_VALIDATION,
	TERM_VALIDATION,
	SUBMIT_ERRORS,
	VALID,
} from 'utils/signUpConstants'
import { WILL_UNMOUNT } from 'utils/commonConstants'

// form validation
import { Form as FinalForm } from 'react-final-form'
import { signUpValidation } from 'utils/validation'
import createDecorator from 'final-form-focus'

// state management
import { Subscribe } from 'unstated'
import { signUp } from 'state'

// reactstrap components
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

// core components
import IndexNavbar from 'components/Navbars/IndexNavbar.jsx'
import Footer from 'components/Footers/Footer.jsx'
import InputField from 'components/InputField/InputField'
import MessageList from 'components/InputField/MessageList'

const {
	[EMAIL_VALIDATION]: emailValidation,
	[PASSWORD_VALIDATION]: passwordValidation,
	[TERM_VALIDATION]: termValidation,
} = signUpValidation

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
		document.documentElement.addEventListener('mousemove', this.followCursor)
		signUp.state[WILL_UNMOUNT] = false
	}
	componentWillUnmount() {
		document.body.classList.remove('register-page')
		document.documentElement.removeEventListener('mousemove', this.followCursor)
		signUp.state[WILL_UNMOUNT] = true
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
	render() {
		return (
			<>
				<IndexNavbar />
				<div className='wrapper' ref='wrapper'>
					<Subscribe to={[signUp]}>
						{signUp => (
							<div
								className='page-header'
								style={{
									display: 'block',
									maxHeight:
										this.state.maxHeight +
										(signUp.state[EMAIL_EXTRA_HEIGHT] || 0) +
										(signUp.state[PASSWORD_EXTRA_HEIGHT] || 0) +
										'px',
								}}
								ref={divElement => (this.divElement = divElement)}>
								<div className='page-header-image' />
								{/* <Container>
									<Row>
										<Col className='mx-auto' lg='5' md='12'> */}
								<div className='content' style={{ marginTop: '5%' }}>
									<Container className='container-fluid'>
										<Row>
											<Col className='offset-lg-0 offset-md-3' lg='5' md='6'>
												<div
													className='square square-7'
													id='square7'
													style={{ transform: this.state.squares7and8 }}
												/>
												<div
													className='square square-8'
													id='square8'
													style={{ transform: this.state.squares7and8 }}
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
															[EMAIL]: '',
															[PASSWORD]: '',
															[TERM]: false,
														}}
														decorators={[focusOnError]}
														onSubmit={async values => {
															const data = await handleSignUp(values)
															for (let property in data) {
																signUp.state[
																	property + SUBMIT_ERRORS
																] = MessageList({
																	validationResult: data[property],
																	type: undefined,
																})
																signUp.state[property + VALID] = !data[property]
															}
															if (!data) {
																signUp.state[EMAIL] = data[EMAIL]
																// do redirection here
																return // if undefined mean no error and the page will redirect
															}
															return data
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
																			target='_blank'>
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
																			target='_blank'>
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
																			target='_blank'>
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
																		// ! seem like problem of react final form
																		// * implement life cycle method of parent component to solve these issue
																		// * tested, above solution works, trace WILL_UNMOUNT in didComponentMount and willComponentUnmount method to get further insight
																		*/}
																		<InputField
																			type={EMAIL}
																			name={EMAIL}
																			container={signUp}
																			placeholder='Email Address'
																			icon='tim-icons icon-email-85'
																			validation={value =>
																				emailValidation(value)
																			}
																			asyncValidation={handleIsUserExist}
																		/>
																		<InputField
																			type={PASSWORD}
																			name={PASSWORD}
																			container={signUp}
																			placeholder='Password'
																			icon='tim-icons icon-lock-circle'
																			validation={value =>
																				passwordValidation(value)
																			}
																		/>
																		<InputField
																			type='checkbox'
																			name={TERM}
																			container={signUp}
																			validation={value =>
																				termValidation(value)
																			}
																		/>
																	</Form>
																</CardBody>
																<CardFooter>
																	<Row className='d-flex'>
																		<Col className='col-3' />
																		<Col className='pl-0 pr-0 d-flex justify-content-center'>
																			<Button
																				className='btn-round'
																				color='primary'
																				size='lg'
																				disabled={submitting}
																				onClick={handleSubmit}>
																				Sign Up
																			</Button>
																		</Col>
																		<Col className='col-3' />
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
										style={{ transform: this.state.squares1to6 }}
									/>
									<div
										className='square square-2'
										id='square2'
										style={{ transform: this.state.squares1to6 }}
									/>
									<div
										className='square square-3'
										id='square3'
										style={{ transform: this.state.squares1to6 }}
									/>
									<div
										className='square square-4'
										id='square4'
										style={{ transform: this.state.squares1to6 }}
									/>
									<div
										className='square square-5'
										id='square5'
										style={{ transform: this.state.squares1to6 }}
									/>
									<div
										className='square square-6'
										id='square6'
										style={{ transform: this.state.squares1to6 }}
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

export default RegisterPage
