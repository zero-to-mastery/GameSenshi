import React, { useRef } from 'react'
import { stopUndefined } from 'utils'
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
import { Exports } from 'componentnCompounds'

const {
	ButtonsIconPropedAuth,
	FinalForm,
	ButtonSubmit,
	FinalTextEmailPropedSignUp,
	FINAL_TEXT_EMAIL,
	FinalTextPasswordPropedSignUp,
	FINAL_TEXT_PASSWORD,
	FinalTextNamePropedSignUp,
	FINAL_TEXT_NAME,
	Link,
} = stopUndefined(Exports)

const FormSignUp = props => {
	const submitButton = useRef(null)
	const { signInLink, onSuccessfulSubmission, onSubmit, terms, privacy } = props

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
					[FINAL_TEXT_EMAIL]: '',
					[FINAL_TEXT_PASSWORD]: '',
					[FINAL_TEXT_NAME]: '',
				}}
				onSubmit={onSubmit}
				onSuccessfulSubmission={onSuccessfulSubmission}>
				{({ handleSubmit, submitting, submitError }) => (
					<Form className='form'>
						<CardBody>
							<ButtonsIconPropedAuth />
							<Row>
								<Col />
								<Col className='text-center text-muted mb-4 mt-3 col-auto'>
									<small>Or Classically</small>
								</Col>
								<Col />
							</Row>
							<FinalTextNamePropedSignUp submitRef={submitButton} />
							<FinalTextEmailPropedSignUp submitRef={submitButton} />
							<FinalTextPasswordPropedSignUp submitRef={submitButton} />
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
			<Row className='justify-content-center'>
				<Label className='mb-3 text-center text-wrap w-75 '>
					By creating account, you agree to our{' '}
					<Link
						className='link footer-link'
						style={{ color: '#ba54f5', fontSize: 12 }}
						to={privacy}
						target='_blank'>
						Privacy Policy
					</Link>{' '}
					and{' '}
					<Link
						className='link footer-link'
						style={{ color: '#ba54f5', fontSize: 12 }}
						to={terms}
						target='_blank'>
						Terms & Conditions
					</Link>{' '}
				</Label>
			</Row>
		</Card>
	)
}

export { FormSignUp, FINAL_TEXT_EMAIL, FINAL_TEXT_PASSWORD, FINAL_TEXT_NAME }
