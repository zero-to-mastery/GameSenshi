import React, { useRef } from 'react'
import { ApolloConsumer } from 'react-apollo'
// api
import {
	handleSignUpWithEmailAndPassword,
	handleIsEmailNotExist,
	handleSignInWithEmailAndPassword,
} from 'api'
// routing
import { Link } from 'react-router-dom'
// constants
import {
	DATA,
	STATUS,
	MESSAGE,
	SIGN_UP_EMAIL,
	SIGN_UP_USERNAME,
	SIGN_UP_PASSWORD,
	ROUTE_PAGE_SIGN_IN,
} from 'constantValues'
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
	Row,
	Col,
} from 'reactstrap'
// core components
import Loader from 'react-loader-spinner'
import {
	FinalInput,
	FinalForm,
	FORM_ERROR,
	SocialAuthButtonGroup,
} from 'components'

const onSubmit = async (values, apolloClient, callback = () => {}) => {
	const {
		[SIGN_UP_EMAIL]: email,
		[SIGN_UP_PASSWORD]: password,
		[SIGN_UP_USERNAME]: username,
	} = values
	const isSignUpFailed = await handleSignUpWithEmailAndPassword(
		values,
		apolloClient
	)

	if (typeof isSignUpFailed === 'string') {
		// respond is not res obj mean the error is on client side
		return { [FORM_ERROR]: isSignUpFailed }
	} else {
		const {
			[STATUS]: status,
			[DATA]: data,
			[MESSAGE]: message,
		} = isSignUpFailed

		signUpStore.processSignUpErrors(data)

		if (status) {
			userStore.onSignUpWithPassword(username, email)
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
			handleSignInWithEmailAndPassword(email, password)
			callback()
			// if undefined mean no error
			// but this not much point since it will redirect and unmount soon
			return
		} else {
			return { ...data, [FORM_ERROR]: message }
		}
	}
}

const SignUpForm = props => {
	const submitButton = useRef(null)
	const { onSignUpSuccessCallback } = props
	return (
		<ApolloConsumer>
			{apolloClient => {
				return (
					<Subscribe to={[signUpStore]}>
						{signUpStore => {
							return (
								<Card className='card-register' style={{ zIndex: 1000 }}>
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
										onSubmit={values => {
											return onSubmit(
												values,
												apolloClient,
												onSignUpSuccessCallback
											)
										}}>
										{({ handleSubmit, submitting, submitError }) => (
											<Form className='form'>
												<CardBody>
													<SocialAuthButtonGroup />
													<Row>
														<Col />
														<Col className='text-center text-muted mb-4 mt-3 col-auto'>
															<small>Or Classically</small>
														</Col>
														<Col />
													</Row>
													{/** 
											// ! bug?
											// ! whenever any of these two field components is render
											// ! and whenever component going to unmount (route to other page) the field components will run validation
											// ! these is not good as the validation process invoking steState in a promise and cause memory leak issue
											// ! step to reproduce: go to any page that has FinalInput, then redirect to website other than gamesenshi
											// * implement useEffect component will unmount of Input Field component is not working
											// * set signUpStore willUnmount state directly when parent component going to unmount and use it to stop setState work
											// * set parent willUnmount state directly when parent component going to unmount and use it to stop setState does not work
											// TODO research knowledge needed to deal with this issue
										*/}
													<FinalInput
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
													<FinalInput
														type={SIGN_UP_EMAIL}
														name={SIGN_UP_EMAIL}
														container={signUpStore}
														placeholder='Email'
														icon='tim-icons icon-email-85'
														validation={value => signUpEmailValidation(value)}
														serverValidation={handleIsEmailNotExist}
														popoverMessages={emailPopoverMessages}
														submitRef={submitButton}
													/>
													<div className='w-100 mb-3' />
													<FinalInput
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
																	to={ROUTE_PAGE_SIGN_IN}
																	className='font-weight-bold'>
																	Sign In
																</Link>
															</Label>
														</Col>
														<Col />
													</Row>
												</CardFooter>
											</Form>
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
							)
						}}
					</Subscribe>
				)
			}}
		</ApolloConsumer>
	)
}

export default SignUpForm
