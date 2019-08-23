import React, { useRef } from 'react'
import { stopUndefined } from 'utils'
// reactstrap components
import { FormGroup, Row, Col, Form } from 'reactstrap'
// validation
import { signInEmailValidation, signInPasswordValidation } from 'utils'

import { ExportCompounds } from 'componentnCompounds'

const {
	FinalInputText,
	FinalForm,
	ButtonSubmit,
	HeaderLined,
	TabPaneContainer,
} = stopUndefined(ExportCompounds)

const FINAL_TEXT_EMAIL = 'email'
const FINAL_TEXT_PASSWORD = 'password'

const TabPaneAccountSettings = props => {
	const submitButtonEmail = useRef(null)
	const submitButtonPassWord = useRef(null)
	return (
		<>
			<TabPaneContainer>
				<HeaderLined>Change Email</HeaderLined>
				<FinalForm
					initialValues={{
						email: '',
					}}
					onSubmit={(formError, values) => {
						return { [formError]: 'updateFailed' }
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
											<FinalInputText
												type={FINAL_TEXT_EMAIL}
												name={FINAL_TEXT_EMAIL}
												hideSuccess
												onlyShowErrorAfterSubmit
												placeholder='email'
												icon='tim-icons icon-email-85'
												validation={signInEmailValidation}
												submitRef={submitButtonEmail}
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
									<ButtonSubmit
										color='info'
										type='button'
										submitRef={submitButtonEmail}
										disabled={submitting}
										onClick={handleSubmit}>
										{submitting ? 'Changing Email' : 'Change Email'}
									</ButtonSubmit>
								</Col>
							</Row>
						</>
					)}
				</FinalForm>
			</TabPaneContainer>
			<hr />
			<hr />
			<TabPaneContainer>
				<HeaderLined>Change Password</HeaderLined>
				<FinalForm
					initialValues={{
						password: '',
					}}
					onSubmit={(formError, values) => {
						return { [formError]: 'updateFailed' }
					}}>
					{({ submitError, handleSubmit, submitting, form }) => (
						<>
							<Form>
								<Row>
									<Col className='align-self-center' md='3'>
										<label className='labels' htmlFor='#password'>
											Password
										</label>
									</Col>
									<Col className='align-self-center' md='9'>
										<FormGroup>
											<FinalInputText
												type={FINAL_TEXT_PASSWORD}
												name={FINAL_TEXT_PASSWORD}
												onlyShowErrorAfterSubmit
												hideSuccess
												placeholder='password'
												icon='tim-icons icon-lock-circle'
												validation={signInPasswordValidation}
												submitRef={submitButtonPassWord}
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
									<ButtonSubmit
										color='info'
										type='button'
										submitRef={submitButtonPassWord}
										disabled={submitting}
										onClick={handleSubmit}>
										{submitting ? 'Changing Password' : 'Change Password'}
									</ButtonSubmit>
								</Col>
							</Row>
						</>
					)}
				</FinalForm>
			</TabPaneContainer>
		</>
	)
}

export { TabPaneAccountSettings }
