import React, { useRef } from 'react'
// reactstrap components
import { Button, FormGroup, Row, Col, Form } from 'reactstrap'
// loader
import Loader from 'react-loader-spinner'
// form validation
import { FinalForm, FORM_ERROR } from 'componentAtoms/FinalForm'
import { InputTextFinal } from 'componentAtoms/InputText'
// validation
import {
	signInEmailValidation,
	signInPasswordValidation,
} from 'utils/validation'

const EMAIL = 'email'
const PASSWORD = 'password'

const AccountSettingsTabPane = props => {
	const submitButton = useRef(null)
	const submitButton2 = useRef(null)
	return (
		<>
			<div className='g-pos-rel h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-30--md'>
				<header>
					<h2 className='text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0'>
						Change Email
					</h2>
				</header>
				<hr className='line-info' />
				<FinalForm
					initialValues={{
						email: '',
					}}
					onSubmit={values => {
						return { [FORM_ERROR]: 'updateFailed' }
					}}>
					{({ submitError, handleSubmit, submitting, form }) => (
						<>
							<Form>
								<Row>
									<Col className='align-self-center' md='3'>
										<label className='labels' htmlFor='#email'>
											Email
										</label>
									</Col>
									<Col className='align-self-center' md='9'>
										<FormGroup>
											<InputTextFinal
												type={EMAIL}
												name={EMAIL}
												hideSuccess
												onlyShowErrorOnSubmit
												placeholder='email'
												icon='tim-icons icon-email-85'
												validation={signInEmailValidation}
												submitRef={submitButton}
												onBlur={() => {
													form.reset()
												}}
											/>
										</FormGroup>
									</Col>
								</Row>
							</Form>
							<Row className='mt-4'>
								<Col className='d-flex justify-content-center'>
									{submitError && !submitting && `Error: ${submitError}`}
									<Button
										color='info'
										type='button'
										ref={submitButton}
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
												&nbsp;&nbsp;Change Email
											</>
										) : (
											'Change Email'
										)}
									</Button>
								</Col>
							</Row>
						</>
					)}
				</FinalForm>
			</div>
			<hr />
			<hr />
			<div className='g-pos-rel h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-30--md'>
				<header>
					<h2 className='text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0'>
						Change Password
					</h2>
				</header>
				<hr className='line-info' />
				<FinalForm
					initialValues={{
						password: '',
					}}
					onSubmit={values => {
						return { [FORM_ERROR]: 'updateFailed' }
					}}>
					{({ submitError, handleSubmit, submitting, form }) => (
						<>
							<Form>
								<Row>
									<Col className='align-self-center' md='3'>
										<label className='labels' htmlFor='#email'>
											Password
										</label>
									</Col>
									<Col className='align-self-center' md='9'>
										<FormGroup>
											<InputTextFinal
												type={PASSWORD}
												name={PASSWORD}
												onlyShowErrorOnSubmit
												hideSuccess
												placeholder='password'
												icon='tim-icons icon-lock-circle'
												validation={signInPasswordValidation}
												submitRef={submitButton2}
												onBlur={() => {
													form.reset()
												}}
											/>
										</FormGroup>
									</Col>
								</Row>
							</Form>
							<Row className='mt-4'>
								<Col className='d-flex justify-content-center'>
									{submitError && !submitting && `Error: ${submitError}`}
									<Button
										color='info'
										type='button'
										ref={submitButton2}
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
												&nbsp;&nbsp;Change Password
											</>
										) : (
											'Change Password'
										)}
									</Button>
								</Col>
							</Row>
						</>
					)}
				</FinalForm>
			</div>
		</>
	)
}

export default AccountSettingsTabPane
