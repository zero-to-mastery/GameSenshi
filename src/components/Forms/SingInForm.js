import React from 'react'

// routing
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

// form validation
import { Form as FinalForm } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import createDecorator from 'final-form-focus'

// constants
import {
	EMAIL,
	USERNAME,
	PASSWORD,
	USER_EMAIL,
	USER_SIGNED_IN,
	USER_DISPLAY_NAME,
} from 'constantValues'

// core components
import SocialAuthButtonGroup from 'components/Buttons/SocialAuthButtonGroup'
import InputField from 'components/Inputs/InputField'

// state management
import { authStore, userStore } from 'state'

const focusOnError = createDecorator()

class SignInForm extends React.Component {
	onSubmit = async (values, history, lastLocation) => {
		const signInFailed = await handleSignInWithEmailAndPassword(
			authStore.state[EMAIL],
			authStore.state[PASSWORD]
		)
		if (signInFailed) {
			return { [FORM_ERROR]: signInFailed }
		}
		onSignedInRouting(history, lastLocation)
		userStore.setState({
			[USER_DISPLAY_NAME]: authStore.state[USERNAME],
			[USER_EMAIL]: authStore.state[EMAIL],
			[USER_SIGNED_IN]: true,
		})
		// if undefined mean no error
		// but this not much point since it will redirect and unmount soon
		return
	}
	render() {
		const {
			props: { history, lastLocation },
			onSubmit,
		} = this
		return (
			<Card className='card-login'>
				<Form action='' className='form' method=''>
					<CardHeader>
						<CardImg
							alt='...'
							src={require('assets/img/square-purple-1.png')}
						/>
						<CardTitle tag='h4'>Login</CardTitle>
					</CardHeader>
					<CardBody>
						<div className='text-muted text-center ml-auto mr-auto'>
							<h3 className='mb-0'>Sign in with</h3>
						</div>
					</CardBody>
					<FinalForm
						initialValues={{
							[EMAIL]: '',
							[PASSWORD]: '',
						}}
						decorators={[focusOnError]}
						onSubmit={values => {
							return onSubmit(values, history, lastLocation)
						}}>
						{({ submitError, handleSubmit, submitting }) => (
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
									<InputField
										type={EMAIL}
										name={EMAIL}
										hideSuccess
										container={authStore}
										placeholder='Email'
										icon='tim-icons icon-email-85'
										validation={value => signInEmailValidation(value)}
									/>
									<InputField
										type={PASSWORD}
										name={PASSWORD}
										hideSuccess
										container={authStore}
										placeholder='Password'
										icon='tim-icons icon-lock-circle'
										validation={value => signInPasswordValidation(value)}
									/>
								</CardBody>
								<CardFooter className='text-center'>
									{submitError && !submitting && `Error: ${submitError}`}
									<Button
										block
										className='btn-round'
										color='primary'
										href='#pablo'
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
							</>
						)}
					</FinalForm>
					<div className='pull-left ml-3 mb-3'>
						<h6>
							<a
								className='link footer-link'
								href='#pablo'
								onClick={() => {
									history.push('/signUp')
								}}>
								Create Account
							</a>
						</h6>
					</div>
					<div className='pull-right mr-3 mb-3'>
						<h6>
							<a
								className='link footer-link'
								href='#pablo'
								onClick={e => e.preventDefault()}>
								Forgot Password?
							</a>
						</h6>
					</div>
				</Form>
			</Card>
		)
	}
}

export default withLastLocation(SignInForm)
