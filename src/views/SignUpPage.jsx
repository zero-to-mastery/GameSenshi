import React from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import { Form as FinalForm, Field } from 'react-final-form'
import { string, boolean } from 'yup'

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
	FormGroup,
	Form,
	Input,
	Container,
	Row,
	Col,
	UncontrolledTooltip,
} from 'reactstrap'

// core components
import IndexNavbar from 'components/Navbars/IndexNavbar.jsx'
import Footer from 'components/Footer/Footer.jsx'
import TextInputField from 'components/TextInputField/TextInputField'

class SignUpPage extends React.Component {
	state = {
		squares1to6: '',
		squares7and8: '',
		maxHeight: 999,
	}
	componentDidMount() {
		document.body.classList.toggle('register-page')
		// document.documentElement.addEventListener('mousemove', this.followCursor)
		this.setState({ maxHeight: this.divElement.clientHeight })
	}
	componentWillUnmount() {
		document.body.classList.toggle('register-page')
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

	render() {
		const {
			state: { squares7and8, squares1to6, maxHeight },
			setState,
		} = this
		return (
			<>
				<IndexNavbar />
				<div className='wrapper'>
					<Subscribe to={[signUp]}>
						{signUp => (
							<div
								className='page-header'
								style={{
									maxHeight:
										maxHeight +
										(signUp.state.emailExtraHeight || 0) +
										(signUp.state.passwordExtraHeight || 0) +
										'px',
								}}
								ref={divElement => (this.divElement = divElement)}>
								<div className='page-header-image' />
								<div className='content'>
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
															src={require('assets/img/square-purple-1.png')}
															style={{ top: '-8%' }}
														/>
														<CardTitle tag='h4'>Sign up</CardTitle>
													</CardHeader>
													<CardBody>
														<div className='text-muted text-center ml-auto mr-auto'>
															<h3 className='mb-0'>Sign up with</h3>
														</div>
													</CardBody>
													<FinalForm
														initialValues={{
															email: '',
															password: '',
															term: false,
														}}
														onSubmit={(values, actions) => {
															firebase
																.auth()
																.createUserWithEmailAndPassword(
																	values.email,
																	values.password
																)
																.then(credential => {
																	actions.setSubmitting(false)
																	if (
																		credential.user &&
																		credential.user.emailVerified === false
																	) {
																		credential.user
																			.sendEmailVerification()
																			.then(function() {
																				console.log(
																					'email verification sent to user'
																				)
																			})
																	}
																})
																.catch(error => {
																	console.log(error)
																})
														}}
														render={({ handleSubmit, submitting }) => (
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
																		<TextInputField
																			name='email'
																			placeholder='Email Address'
																			icon='tim-icons icon-email-85'
																			asyncValidation={value =>
																				string()
																					.required('Email is required')
																					.email('Email not valid')
																					.min(
																						8,
																						'Password must be 8 characters or longer'
																					)
																					.validate(value, {
																						abortEarly: false,
																					})
																			}
																		/>
																		{/* <TextInputField
																	name='password'
																	placeholder='Password'
																	icon='tim-icons icon-lock-circle'
																	asyncValidation={value =>
																		string()
																			.required('Password is required')
																			.min(
																				8,
																				'Password must be 8 characters or longer'
																			)
																			.validate(value, {
																				abortEarly: false,
																			})
																	}
																/> */}
																		<Field
																			type='checkbox'
																			name='term'
																			validate={value =>
																				boolean()
																					.oneOf(
																						[true],
																						'Must Accept Terms and Conditions'
																					)
																					.validate(value)
																					.catch(err => err.errors)
																			}
																			render={({ input, meta }) => (
																				<>
																					<FormGroup
																						check
																						className='text-left'>
																						<Label check>
																							<Input
																								type='checkbox'
																								name='term'
																								{...input}
																								onChange={e => {
																									// ! bug, workaround https://github.com/final-form/react-final-form/issues/134
																									input.onBlur(e)
																									input.onChange(e)
																								}}
																							/>
																							<span className='form-check-sign' />
																							{`I agree
																		to the `}
																							<a
																								href='#pablo'
																								onClick={e =>
																									e.preventDefault()
																								}>
																								terms and conditions
																							</a>
																						</Label>
																					</FormGroup>
																					{meta.touched && meta.error && (
																						<p className='text-danger'>
																							{meta.error}
																						</p>
																					)}
																				</>
																			)}
																		/>
																	</Form>
																</CardBody>
																<CardFooter>
																	<Row>
																		<Col />
																		<Col>
																			<Button
																				className='btn-round'
																				color='primary'
																				size='lg'
																				disabled={submitting}
																				onClick={handleSubmit}>
																				Sign Up
																			</Button>
																		</Col>
																		<Col />
																	</Row>
																	<Row>
																		<Col />
																		<Col className='col-auto'>
																			<Label check>
																				<span className='form-check-sign' />
																				{`Already a member? `}
																				<Link to='/signIn'>Sign in</Link>
																			</Label>
																		</Col>
																		<Col />
																	</Row>
																</CardFooter>
															</>
														)}
													/>
												</Card>
											</Col>
										</Row>
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
									</Container>
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

export default SignUpPage
