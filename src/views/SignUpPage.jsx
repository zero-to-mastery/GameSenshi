import React from 'react'
import { Link } from 'react-router-dom'
import { handleSignUp, handleIsUserExist } from 'api'

import {
	EMAIL,
	PASSWORD,
	TERM,
	EMAIL_EXTRA_HEIGHT,
	PASSWORD_EXTRA_HEIGHT,
	EMAIL_VALIDATION,
	PASSWORD_VALIDATION,
	TERM_VALIDATION,
} from 'utils/signUpConstants'

// form validation
import { Form as FinalForm } from 'react-final-form'
import { signUpValidation } from 'utils/validation'

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
	Form,
	Container,
	Row,
	Col,
	UncontrolledTooltip,
} from 'reactstrap'

// core components
import IndexNavbar from 'components/Navbars/IndexNavbar.jsx'
import Footer from 'components/Footer/Footer.jsx'
import InputField from 'components/InputField/InputField'

const {
	[EMAIL_VALIDATION]: emailValidation,
	[PASSWORD_VALIDATION]: passwordValidation,
	[TERM_VALIDATION]: termValidation,
} = signUpValidation

class SignUpPage extends React.Component {
	state = {
		squares1to6: '',
		squares7and8: '',
		maxHeight: 999,
	}
	componentDidMount() {
		document.body.classList.toggle('register-page')
		document.documentElement.addEventListener('mousemove', this.followCursor)
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
		} = this
		const {
			state: {
				[EMAIL_EXTRA_HEIGHT]: emailExtraHeight,
				[PASSWORD_EXTRA_HEIGHT]: passwordExtraHeight,
			},
		} = signUp

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
										(emailExtraHeight || 0) +
										(passwordExtraHeight || 0) +
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
															[EMAIL]: '',
															[PASSWORD]: '',
															[TERM]: false,
														}}
														onSubmit={values => {}}>
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
																		<InputField
																			type={EMAIL}
																			name={EMAIL}
																			placeholder='Email Address'
																			icon='tim-icons icon-email-85'
																			validation={value =>
																				emailValidation(value)
																			}
																			asyncValidation={() =>
																				handleIsUserExist(signUp.state)
																			}
																		/>
																		<InputField
																			type={PASSWORD}
																			name={PASSWORD}
																			placeholder='Password'
																			icon='tim-icons icon-lock-circle'
																			validation={value =>
																				passwordValidation(value)
																			}
																		/>
																		<InputField
																			type='checkbox'
																			name={TERM}
																			validation={value =>
																				termValidation(value)
																			}
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
																				onClick={e => {
																					handleSignUp(signUp.state)
																					handleSubmit(e)
																				}}>
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
													</FinalForm>
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
