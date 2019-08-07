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
	ButtonSubmit,
	FinalTextEmailPropedSignUp,
	FinalTextPasswordPropedSignUp,
	FinalTextUsernamePropedSignUp,
} = stopUndefined(ExportCompounds)

const EMAIL = 'email'
const PASSWORD = 'password'
const USERNAME = 'username'

const FormSignUp = props => {
	const submitButton = useRef(null)
	const [emailIsValid, setEmailIsValid] = useState(undefined)
	const [passwordIsValid, setPasswordIsValid] = useState(undefined)
	const [usernameIsValid, setUsernameIsValid] = useState(undefined)
	const [emailSubmitErrors, setEmailSubmitErrors] = useState(undefined)
	const [passwordSubmitErrors, setPasswordSubmitErrors] = useState(undefined)
	const [usernameSubmitErrors, setUsernameSubmitErrors] = useState(undefined)
	const { signInLink, onSuccessfulSubmission, onSubmit } = props

	const onSubmmission = async (
		formErrors,
		values,
		onSubmit = () => {},
		onSuccessfulSubmission = () => {}
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
							<FinalTextUsernamePropedSignUp
								name={USERNAME}
								isValid={usernameIsValid}
								setIsValid={setUsernameIsValid}
								submitErrors={usernameSubmitErrors}
								submitRef={submitButton}
							/>
							<div className='w-100 mb-3' />
							<FinalTextEmailPropedSignUp
								name={EMAIL}
								isValid={emailIsValid}
								setIsValid={setEmailIsValid}
								submitErrors={emailSubmitErrors}
								submitRef={submitButton}
							/>
							<div className='w-100 mb-3' />
							<FinalTextPasswordPropedSignUp
								name={PASSWORD}
								isValid={passwordIsValid}
								setIsValid={setPasswordIsValid}
								submitErrors={passwordSubmitErrors}
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

export { FormSignUp }
