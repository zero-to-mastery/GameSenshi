import React, { useRef, useState } from 'react'
import { stopUndefined } from 'utils'
// routing
import { Link } from 'react-router-dom'
// react libraries components
import {
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
import { ExportCompounds } from 'componentnCompounds'

const {
	ButtonsSocialAuthPropedDefault,
	FinalForm,
	FinalInputText,
	ButtonSubmit,
} = stopUndefined(ExportCompounds)

const EMAIL = 'email'
const PASSWORD = 'password'
const USERNAME = 'username'
const FORM_SIGN_UP_PROP_SIGN_IN_LINK = 'signInLink'
const FORM_SIGN_UP_PROP_EMAIL_POPOVER_MESSAGES = 'emailPopoverMessages'
const FORM_SIGN_UP_PROP_PASSWORD_POPOVER_MESSAGES = 'passwordPopoverMessages'
const FORM_SIGN_UP_PROP_USERNAME_POPOVER_MESSAGES = 'usernamePopoverMessages'

const FormSignUp = props => {
	const submitButton = useRef(null)
	const [emailIsValid, setEmailIsValid] = useState(undefined)
	const [passwordIsValid, setPasswordIsValid] = useState(undefined)
	const [usernameIsValid, setUsernameIsValid] = useState(undefined)
	const [emailSubmitErrors, setEmailSubmitErrors] = useState(undefined)
	const [passwordSubmitErrors, setPasswordSubmitErrors] = useState(undefined)
	const [usernameSubmitErrors, setUsernameSubmitErrors] = useState(undefined)
	const {
		signInLink,
		emailPopoverMessages,
		passwordPopoverMessages,
		usernamePopoverMessages,
		onEmailValidation,
		onEmailServerValidation,
		onPasswordValidation,
		onUsernameValidation,
		onSuccessfulSubmission,
		onSubmit,
	} = props

	const onSubmmission = async (
		formErrors,
		values,
		onSubmit = (email = '', password = '', username = '') => {},
		onSuccessfulSubmission = (email = '', password = '', username = '') => {}
	) => {
		const {
			[EMAIL]: email,
			[PASSWORD]: password,
			[USERNAME]: username,
		} = values
		const isSignUpFailed = await onSubmit(email, password, username)

		if (typeof isSignUpFailed === 'string') {
			// respond is not res obj mean the error is on client side
			return { [formErrors]: isSignUpFailed }
		} else {
			const { status, data, message } = isSignUpFailed

			if (status) {
				onSuccessfulSubmission(email, password, username)
				return // if return undefined mean no error
			} else {
				setEmailIsValid(!data.email)
				setEmailSubmitErrors(data.email)
				setPasswordIsValid(!data.password)
				setPasswordSubmitErrors(data.password)
				setUsernameIsValid(!data.username)
				setUsernameSubmitErrors(data.username)
				return { ...data, [formErrors]: message }
			}
		}
	}

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
					[EMAIL]: '',
					[PASSWORD]: '',
					[USERNAME]: '',
				}}
				onSubmit={(formErrors, values) => {
					return onSubmmission(
						formErrors,
						values,
						onSubmit,
						onSuccessfulSubmission
					)
				}}>
				{({ handleSubmit, submitting, submitError }) => (
					<Form className='form'>
						<CardBody>
							<ButtonsSocialAuthPropedDefault />
							<Row>
								<Col />
								<Col className='text-center text-muted mb-4 mt-3 col-auto'>
									<small>Or Classically</small>
								</Col>
								<Col />
							</Row>
							{/*
											// ! bug?
											// ! whenever any of these two field components is render
											// ! and whenever component going to unmount (route to other page) the field components will run validation
											// ! these is not good as the validation process invoking steState in a promise and cause memory leak issue
											// ! step to reproduce: go to any page that has FinalInputText, then redirect to website other than gamesenshi
											// * implement useEffect component will unmount of Input Field component is not working
											// * set signUpStore willUnmount state directly when parent component going to unmount and use it to stop setState work
											// * set parent willUnmount state directly when parent component going to unmount and use it to stop setState does not work
											// TODO research knowledge needed to deal with this issue
										*/}
							<FinalInputText
								type={USERNAME}
								name={USERNAME}
								placeholder='Username'
								icon='tim-icons icon-single-02'
								validation={onUsernameValidation}
								isValid={usernameIsValid}
								setIsValid={setUsernameIsValid}
								submitErrors={usernameSubmitErrors}
								popoverMessages={usernamePopoverMessages}
								submitRef={submitButton}
							/>
							<div className='w-100 mb-3' />
							<FinalInputText
								type={EMAIL}
								name={EMAIL}
								placeholder='Email'
								icon='tim-icons icon-email-85'
								validation={onEmailValidation}
								isValid={emailIsValid}
								setIsValid={setEmailIsValid}
								submitErrors={emailSubmitErrors}
								serverValidation={onEmailServerValidation}
								popoverMessages={emailPopoverMessages}
								submitRef={submitButton}
							/>
							<div className='w-100 mb-3' />
							<FinalInputText
								type={PASSWORD}
								name={PASSWORD}
								placeholder='Password'
								icon='tim-icons icon-lock-circle'
								validation={onPasswordValidation}
								isValid={passwordIsValid}
								setIsValid={setPasswordIsValid}
								submitErrors={passwordSubmitErrors}
								popoverMessages={passwordPopoverMessages}
								submitRef={submitButton}
							/>
						</CardBody>
						<CardFooter>
							<Row className='d-flex text-center'>
								<Col>
									{submitError && !submitting && `Error: ${submitError}`}
								</Col>
							</Row>
							<Row className='d-flex'>
								<Col xs='2' />
								<Col className='pl-0 pr-0 d-flex justify-content-center'>
									<ButtonSubmit
										submitRef={submitButton}
										disabled={submitting}
										onClick={handleSubmit}
										className='btn-round'
										size='lg'
										color='primary'>
										{submitting ? 'Signing Up' : 'Sign Up'}
									</ButtonSubmit>
								</Col>
								<Col xs='2' />
							</Row>
							<Row className='d-flex'>
								<Col />
								<Col xs='auto'>
									<Label>
										Already a member?{' '}
										<Link to={signInLink} className='font-weight-bold'>
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
			<Label className='mb-3 text-center'>
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
}

export {
	FormSignUp,
	FORM_SIGN_UP_PROP_SIGN_IN_LINK,
	FORM_SIGN_UP_PROP_EMAIL_POPOVER_MESSAGES,
	FORM_SIGN_UP_PROP_PASSWORD_POPOVER_MESSAGES,
	FORM_SIGN_UP_PROP_USERNAME_POPOVER_MESSAGES,
}
