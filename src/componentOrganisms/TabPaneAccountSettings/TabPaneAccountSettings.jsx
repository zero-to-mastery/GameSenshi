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

const EMAIL = 'email'
const PASSWORD = 'password'

const TabPaneAccountSettings = props => {
	const submitButton = useRef(null)
	const submitButton2 = useRef(null)
	return (
		<>
			<TabPaneContainer>
				<HeaderLined>Change Email</HeaderLined>
				<hr className='line-info' />
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
									<ButtonSubmit
										color='info'
										type='button'
										submitRef={submitButton}
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
				<hr className='line-info' />
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
									<ButtonSubmit
										color='info'
										type='button'
										submitRef={submitButton2}
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
