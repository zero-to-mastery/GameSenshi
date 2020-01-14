import React, { useMemo, useRef, Fragment } from 'react'
import { stopUndefined } from 'utils'
import {
	Input,
	InputGroupText,
	InputGroup,
	InputGroupAddon,
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
import { Exports } from 'componentnCompounds'
const {
	ButtonsCommonPropedAuth,
	FinalForm,
	ButtonSubmit,
	FinalTextEmailPropedSignIn,
	FINAL_TEXT_EMAIL,
	FinalTextPasswordPropedSignIn,
	FINAL_TEXT_PASSWORD,
	Link,
	ModalSimple,
} = stopUndefined(Exports)

const SIGN_IN_FORM_STATE_EMAIL = 'email'
const SIGN_IN_FORM_STATE_IS_OPEN = 'isOPne'
const SIGN_IN_FORM_TOGGLE = 'toggle'
const SIGN_IN_FORM_ON_SUCCESSFUL_SUBMISSION = 'onSuccessfulSubmission'

const Fragment_ = props => <Fragment>{props.children}</Fragment>

const FormSignIn = props => {
	const submitButton = useRef(null) //submit button reference

	const {
		[SIGN_IN_FORM_STATE_EMAIL]: predefinedEmail,
		[SIGN_IN_FORM_STATE_IS_OPEN]: isOpen,
		modal,
		createAccountLink,
		forgotPasswordLink,
		[SIGN_IN_FORM_TOGGLE]: toggle,
		onSubmit,
		[SIGN_IN_FORM_ON_SUCCESSFUL_SUBMISSION]: onSuccessfulSubmission,
	} = props

	const TopElement = useMemo(() => {
		return modal ? ModalSimple : Fragment_
	}, [modal])

	return (
		<TopElement toggle={toggle} isOpen={isOpen}>
			<Card className='card-login'>
				<CardHeader>
					<CardImg alt='...' src={require('assets/img/square-purple-1.png')} />
					<CardTitle tag='h4'>Login</CardTitle>
					{predefinedEmail && (
						<button
							aria-label='Close'
							className='close'
							data-dismiss='modal'
							type='button'
							onClick={toggle}
						>
							<i className='tim-icons icon-simple-remove' />
						</button>
					)}
				</CardHeader>
				<CardBody>
					<div className='text-muted text-center ml-auto mr-auto'>
						<h3 className='mb-0'>
							{predefinedEmail
								? 'Sign In With Existing Account'
								: 'Sign in with'}
						</h3>
					</div>
				</CardBody>
				<FinalForm
					initialValues={{
						[FINAL_TEXT_EMAIL]: predefinedEmail || '',
						[FINAL_TEXT_PASSWORD]: '',
					}}
					onSubmit={onSubmit}
					onSuccessfulSubmission={onSuccessfulSubmission}
				>
					{({ submitError, handleSubmit, submitting }) => (
						<Form action='' className='form' method=''>
							<CardBody>
								{predefinedEmail ? (
									<InputGroup>
										<InputGroupAddon addonType='prepend'>
											<InputGroupText
												style={{
													backgroundColor: '#1d253b',
													cursor: 'not-allowed',
												}}
											>
												<i className='tim-icons icon-email-85' />
											</InputGroupText>
										</InputGroupAddon>
										<Input disabled placeholder={predefinedEmail} type='text' />
									</InputGroup>
								) : (
									<>
										<ButtonsCommonPropedAuth />
										<Row>
											<Col className='text-center text-muted mb-4 mt-3' xs='12'>
												<small>Or Classically</small>
											</Col>
										</Row>
										<FinalTextEmailPropedSignIn submitRef={submitButton} />
									</>
								)}
								<FinalTextPasswordPropedSignIn submitRef={submitButton} />
							</CardBody>
							<CardFooter>
								<Row className='d-flex text-center text-white'>
									<Col>
										{submitError && !submitting && `Error: ${submitError}`}
									</Col>
								</Row>
								<Row className='d-flex'>
									<Col xs='2' />
									<Col className='px-0 d-flex justify-content-center'>
										<ButtonSubmit
											ref={submitButton}
											block
											submitting={submitting}
											onClick={handleSubmit}
											size='lg'
											color='primary'
											className='btn-round'
										>
											{submitting ? 'Signing In' : 'Sign In'}
										</ButtonSubmit>
									</Col>
									<Col xs='2' />
								</Row>
							</CardFooter>
							<div className='pull-left ml-3 mb-3'>
								<h6>
									<Link
										className='link footer-link'
										style={{ color: '#ba54f5', fontSize: 12 }}
										to={createAccountLink}
									>
										Create Account
									</Link>
								</h6>
							</div>
							<div className='pull-right mr-3 mb-3'>
								<h6>
									<Link
										className='link footer-link'
										style={{ color: '#ba54f5', fontSize: 12 }}
										to={forgotPasswordLink}
									>
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
	SIGN_IN_FORM_STATE_EMAIL,
	SIGN_IN_FORM_STATE_IS_OPEN,
	SIGN_IN_FORM_TOGGLE,
	SIGN_IN_FORM_ON_SUCCESSFUL_SUBMISSION,
	FINAL_TEXT_EMAIL,
	FINAL_TEXT_PASSWORD,
}
