import React, { useRef, Fragment } from 'react'
import { stopUndefined } from 'utils'
// routing
import { Link } from 'react-router-dom'
// reactstrap components
import {
	Modal,
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
// core components
import { ExportCompounds } from 'componentnCompounds'
const {
	ButtonsSocialAuthPropedDefault,
	FinalForm,
	FinalInputText,
} = stopUndefined(ExportCompounds)

const EMAIL = 'email'
const PASSWORD = 'password'

const SIGN_IN_FROM_STATE_EMAIL = 'email'
const SIGN_IN_FROM_STATE_IS_OPEN = 'isOPne'
const SIGN_IN_FROM_PROP_MODAL = 'modal'
const SIGN_IN_FROM_PROP_PASSWORD_ONLY = 'passwordOnly'
const SIGN_IN_FROM_PROP_EMAIL_VALIDATION = 'emailValidation'
const SIGN_IN_FROM_PROP_PASSWORD_VALIDATION = 'passwordValidation'
const SIGN_IN_FROM_PROP_FORGOT_PASSWORD_LINK = 'forgotPasswordLink'
const SIGN_IN_FROM_TOGGLE = 'toggle'
const SIGN_IN_FORM_ON_SUBMIT = 'onSubmit'
const SIGN_IN_FORM_SOCIAL_AUTH_ON_CLICKS = 'socialAuthOnClicks'
const SIGN_IN_FROM_ON_SUCCESSFUL_SUBMISSION = 'onSuccessfulSubmission'

const onSubmission = async (
	formError,
	values = { [EMAIL]: '', [PASSWORD]: '' },
	onSubmit = (email, password) => {},
	onSuccessfulSubmission = () => {}
) => {
	const { [EMAIL]: email, [PASSWORD]: password } = values
	const isSignInFailed = await onSubmit(email, password)
	if (isSignInFailed) {
		return { [formError]: isSignInFailed }
	} else {
		onSuccessfulSubmission()
		return
		// if undefined mean no error
	}
}

const FormSignIn = props => {
	const submitButton = useRef(null) //submit button reference

	const {
		[SIGN_IN_FROM_STATE_EMAIL]: email,
		[SIGN_IN_FROM_STATE_IS_OPEN]: isOpen,
		[SIGN_IN_FROM_PROP_MODAL]: modal,
		[SIGN_IN_FROM_PROP_PASSWORD_ONLY]: passwordOnly,
		[SIGN_IN_FROM_PROP_EMAIL_VALIDATION]: emailValidation,
		[SIGN_IN_FROM_PROP_PASSWORD_VALIDATION]: passwordValidation,
		[SIGN_IN_FROM_PROP_FORGOT_PASSWORD_LINK]: forgotPasswordLink,
		[SIGN_IN_FROM_TOGGLE]: toggle,
		[SIGN_IN_FORM_ON_SUBMIT]: onSubmit,
		[SIGN_IN_FROM_ON_SUCCESSFUL_SUBMISSION]: onSuccessfulSubmission,
	} = props

	const TopElement = modal
		? props => (
				<Modal isOpen={isOpen} toggle={toggle} modalClassName='modal-login'>
					{props.children}
				</Modal>
		  )
		: props => <Fragment>{props.children}</Fragment>

	return (
		<TopElement>
			<Card className='card-login'>
				<CardHeader>
					<CardImg alt='...' src={require('assets/img/square-purple-1.png')} />
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
							{passwordOnly ? 'Sign In With Existing Account' : 'Sign in with'}
						</h3>
					</div>
				</CardBody>
				<FinalForm
					initialValues={{
						[EMAIL]: passwordOnly ? email : '',
						[PASSWORD]: '',
					}}
					onSubmit={(formError, values) => {
						return onSubmission(
							formError,
							values,
							onSubmit,
							onSuccessfulSubmission
						)
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
										<ButtonsSocialAuthPropedDefault />
										<Row>
											<Col className='text-center text-muted mb-4 mt-3' xs='12'>
												<small>Or Classically</small>
											</Col>
										</Row>
										<FinalInputText
											type={EMAIL}
											name={EMAIL}
											hideSuccess
											placeholder='Email'
											icon='tim-icons icon-email-85'
											validation={emailValidation}
											submitRef={submitButton}
										/>
									</>
								)}
								<div className='w-100 mb-3' />
								<FinalInputText
									type={PASSWORD}
									name={PASSWORD}
									hideSuccess
									placeholder='Password'
									icon='tim-icons icon-lock-circle'
									validation={passwordValidation}
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
										to={forgotPasswordLink}>
										Forgot Password?
									</Link>
								</h6>
							</div>
						</Form>
					)}
				</FinalForm>
			</Card>
		</TopElement>
	)
}

export {
	FormSignIn,
	SIGN_IN_FROM_STATE_EMAIL,
	SIGN_IN_FROM_STATE_IS_OPEN,
	SIGN_IN_FROM_TOGGLE,
	SIGN_IN_FORM_ON_SUBMIT,
	SIGN_IN_FROM_ON_SUCCESSFUL_SUBMISSION,
	SIGN_IN_FORM_SOCIAL_AUTH_ON_CLICKS,
}
