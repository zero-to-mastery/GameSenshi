import React, { useRef } from 'react'

// routing
import { Link } from 'react-router-dom'
import { withLastLocation } from 'react-router-last-location'
import { onSignedInRouting } from 'routes'

// api
import { handleSignInWithEmailAndPassword } from 'api'

// validation
import {
	signInEmailValidation,
	signInPasswordValidation,
} from 'utils/validation'

// reactstrap components
import {
	Input,
	InputGroupText,
	InputGroup,
	InputGroupAddon,
	Button,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	CardImg,
	CardTitle,
	Form,
	Col,
	Row,
} from 'reactstrap'
import Loader from 'react-loader-spinner'

// constants
import {
	SIGN_IN_EMAIL,
	SIGN_IN_CALLBACK,
	ROUTE_PASSWORD_RESET,
} from 'constantValues'

// core components
import SocialAuthButtonGroup from 'components/Buttons/SocialAuthButtonGroup'
import { FinalInput, FinalForm, FORM_ERROR } from 'components/FinalForm'

// state management
import { signInStore, Subscribe } from 'state'

// local constant
const EMAIL = 'email'
const PASSWORD = 'password'

const SignInForm = props => {
	const submitButton = useRef(null) //submit button reference

	const onSubmit = async (
		values = { [EMAIL]: '', [PASSWORD]: '' },
		callback = () => {}
	) => {
		const { [EMAIL]: email, [PASSWORD]: password } = values
		const isSignInFailed = await handleSignInWithEmailAndPassword(
			email,
			password
		)
		if (isSignInFailed) {
			return { [FORM_ERROR]: isSignInFailed }
		} else {
			callback()
			return
			// if undefined mean no error
		}
	}

	const { history, lastLocation, passwordOnly } = props
	return (
		<Subscribe to={[signInStore]}>
			{signInStore => {
				const {
					toggle,
					state: { [SIGN_IN_EMAIL]: email },
				} = signInStore
				return (
					<Card className='card-login'>
						<CardHeader>
							<CardImg
								alt='...'
								src={require('assets/img/square-purple-1.png')}
							/>
							<CardTitle tag='h4'>Login</CardTitle>
							{passwordOnly && (
								<button
									aria-label='Close'
									className='close'
									data-dismiss='modal'
									type='button'
									onClick={toggle}>
									<i className='tim-icons icon-simple-remove' />
								</button>
							)}
						</CardHeader>
						<CardBody>
							<div className='text-muted text-center ml-auto mr-auto'>
								<h3 className='mb-0'>
									{passwordOnly
										? 'Sign In With Existing Account'
										: 'Sign in with'}
								</h3>
							</div>
						</CardBody>
						<FinalForm
							initialValues={{
								[EMAIL]: passwordOnly ? email : '',
								[PASSWORD]: '',
							}}
							onSubmit={values => {
								return onSubmit(values, () => {
									onSignedInRouting(history, lastLocation)
									signInStore.state[SIGN_IN_CALLBACK]()
								})
							}}>
							{({ submitError, handleSubmit, submitting }) => (
								<Form action='' className='form' method=''>
									<CardBody>
										{passwordOnly ? (
											<InputGroup>
												<InputGroupAddon addonType='prepend'>
													<InputGroupText
														style={{
															backgroundColor: '#1d253b',
															cursor: 'not-allowed',
														}}>
														<i className='tim-icons icon-email-85' />
													</InputGroupText>
												</InputGroupAddon>
												<Input
													disabled
													placeholder={passwordOnly ? email : 'Email'}
													type='text'
												/>
											</InputGroup>
										) : (
											<>
												<SocialAuthButtonGroup />
												<Row>
													<Col />
													<Col className='text-center text-muted mb-4 mt-3 col-auto'>
														<small>Or Classically</small>
													</Col>
													<Col />
												</Row>
												<FinalInput
													type={EMAIL}
													name={EMAIL}
													hideSuccess
													placeholder='Email'
													icon='tim-icons icon-email-85'
													validation={value => signInEmailValidation(value)}
													submitRef={submitButton}
												/>
											</>
										)}
										<div className='w-100 mb-3' />
										<FinalInput
											type={PASSWORD}
											name={PASSWORD}
											hideSuccess
											placeholder='Password'
											icon='tim-icons icon-lock-circle'
											validation={value => signInPasswordValidation(value)}
											submitRef={submitButton}
										/>
									</CardBody>
									<CardFooter className='text-center'>
										{submitError && !submitting && `Error: ${submitError}`}
										<Button
											ref={submitButton}
											block
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
													&nbsp;&nbsp;Signing In
												</>
											) : (
												'Get Started'
											)}
										</Button>
									</CardFooter>

									<div className='pull-left ml-3 mb-3'>
										<h6>
											<Link
												className='link footer-link'
												style={{ color: '#ba54f5', fontSize: 12 }}
												to='signUp'>
												Create Account
											</Link>
										</h6>
									</div>
									<div className='pull-right mr-3 mb-3'>
										<h6>
											<Link
												className='link footer-link'
												style={{ color: '#ba54f5', fontSize: 12 }}
												to={ROUTE_PASSWORD_RESET}>
												Forgot Password?
											</Link>
										</h6>
									</div>
								</Form>
							)}
						</FinalForm>
					</Card>
				)
			}}
		</Subscribe>
	)
}

export default withLastLocation(SignInForm)
