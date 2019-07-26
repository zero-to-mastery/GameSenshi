import React, { useState, useEffect, useRef } from 'react'

// routing
import { Link } from 'react-router-dom'

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
	Container,
	Col,
} from 'reactstrap'

// core components
import { Footer, IndexNavbar, FinalForm, FORM_ERROR } from 'componentAtoms'

import { FinalInputText } from 'componentMolecules'

import Loader from 'react-loader-spinner'

// validation
import { signInEmailValidation } from 'utils/validation'

// api
import { handleIsEmailExist, handlePasswordReset } from 'api'

//constants
import { ROUTE_PAGE_SIGN_IN } from 'routes'

const EMAIL = 'email'

const PasswordResetPage = props => {
	const [sent, setSent] = useState(false)
	const [email, setEmail] = useState('')
	const wrapper = useRef(null)
	const submitButton = useRef(null)

	useEffect(() => {
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		wrapper.current.scrollTop = 0
		document.body.classList.add('reset-page')
		return () => {
			document.body.classList.remove('reset-page')
		}
	}, [])

	return (
		<>
			<IndexNavbar />
			<div className='wrapper' ref={wrapper}>
				<div className='page-header'>
					<div className='squares square1' />
					<div className='squares square2' />
					<div className='squares square3' />
					<div className='squares square4' />
					<div className='squares square5' />
					<div className='squares square6' />
					<div className='page-header-image' />
					<Container>
						<Col className='mx-auto' lg='5' md='8'>
							<Card className='card-login'>
								<FinalForm
									initialValues={{
										[EMAIL]: '',
									}}
									onSubmit={async values => {
										const isPasswordResetFailed = await handlePasswordReset(
											values.email
										)
										if (isPasswordResetFailed) {
											return { [FORM_ERROR]: isPasswordResetFailed }
										} else {
											setSent(true)
											return
										}
									}}>
									{({ submitError, handleSubmit, submitting }) => {
										return (
											<Form action='' className='form' method=''>
												<CardHeader>
													<CardImg
														alt='...'
														src={require('assets/img/shape.png')}
													/>
													<CardTitle tag='h4'>Reset Password</CardTitle>
												</CardHeader>
												{sent ? (
													<CardBody>
														<h4 className='description text-center'>
															Check your{' '}
															<a
																href={'https://' + email}
																target='_blank'
																rel='noopener noreferrer'
																className='link footer-link text-warning font-weight-bold'>
																<strong>email</strong>
															</a>{' '}
															for a link to reset your password. If it doesn’t
															appear within a few minutes, check your spam
															folder.
														</h4>
													</CardBody>
												) : (
													<>
														<CardBody>
															<h4 className='description text-center'>
																Enter email address to reset password
															</h4>
															<FinalInputText
																valid={false}
																invalid={false}
																type={EMAIL}
																name={EMAIL}
																hideSuccess
																placeholder='Email'
																icon='tim-icons icon-email-85'
																validation={signInEmailValidation}
																serverValidation={handleIsEmailExist}
																submitRef={submitButton}
																onChange={e => {
																	setEmail(e.target.value)
																}}
															/>
														</CardBody>
														<CardFooter className='text-center'>
															{submitError &&
																!submitting &&
																`Error: ${submitError}`}
															<Button
																ref={submitButton}
																block
																className='btn-round'
																color='warning'
																disabled={submitting}
																onClick={handleSubmit}
																size='lg'>
																{submitting ? (
																	<>
																		<Loader
																			type='Watch'
																			color='#00BFFF'
																			height='19px'
																			width='19px'
																		/>
																		&nbsp;&nbsp; Request Reset
																	</>
																) : (
																	'	Request Reset'
																)}
															</Button>
														</CardFooter>
													</>
												)}
												<div className='pull-left ml-3 mb-3'>
													<h6>
														<Link
															className='link footer-link'
															to={ROUTE_PAGE_SIGN_IN}>
															Back to Sign in
														</Link>
													</h6>
												</div>
												<div className='pull-right mr-3 mb-3'>
													<h6>
														<a
															className='link footer-link'
															href='#pablo'
															onClick={e => e.preventDefault()}>
															Need Help?
														</a>
													</h6>
												</div>
											</Form>
										)
									}}
								</FinalForm>
							</Card>
						</Col>
					</Container>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default PasswordResetPage
