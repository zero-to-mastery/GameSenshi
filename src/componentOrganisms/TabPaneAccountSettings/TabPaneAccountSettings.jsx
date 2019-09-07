import React, { useRef, useCallback } from 'react'
import { stopUndefined } from 'utils'
// reactstrap components
import { Row, Col, Form } from 'reactstrap'

import { ExportCompounds } from 'componentnCompounds'

const {
	FinalForm,
	ButtonSubmit,
	HeaderLined,
	TabPaneContainer,
	FinalTextEmailPropedAccount,
	FINAL_TEXT_EMAIL,
	FinalTextPasswordPropedAccount,
	FINAL_TEXT_PASSWORD,
} = stopUndefined(ExportCompounds)

const TabPaneAccountSettings = props => {
	const {
		onSubmitEmail,
		onSuccessfulSubmissionEmail,
		onSubmitPassword,
		onSuccessfulSubmissionPassword,
	} = props

	const submitButtonEmail = useRef(null)
	const submitButtonPassWord = useRef(null)
	return (
		<>
			<TabPaneContainer>
				<HeaderLined>Change Email</HeaderLined>
				<FinalForm
					initialValues={{
						[FINAL_TEXT_EMAIL]: '',
					}}
					onSubmit={onSubmitEmail}
					onSuccessfulSubmission={onSuccessfulSubmissionEmail}>
					{({ submitError, handleSubmit, submitting, form }) => {
						const formReset = useCallback(() => {
							form.reset()
						}, [])
						return (
							<Form>
								<FinalTextEmailPropedAccount
									submitRef={submitButtonEmail}
									onBlur={formReset}
								/>
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
							</Form>
						)
					}}
				</FinalForm>
			</TabPaneContainer>
			<hr />
			<hr />
			<TabPaneContainer>
				<HeaderLined>Change Password</HeaderLined>
				<FinalForm
					initialValues={{
						[FINAL_TEXT_PASSWORD]: '',
					}}
					onSubmit={onSubmitPassword}
					onSuccessfulSubmission={onSuccessfulSubmissionPassword}>
					>
					{({ submitError, handleSubmit, submitting, form }) => {
						const formReset = useCallback(() => {
							form.reset()
						}, [])
						return (
							<Form>
								<FinalTextPasswordPropedAccount
									submitRef={submitButtonPassWord}
									onBlur={formReset}
								/>
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
							</Form>
						)
					}}
				</FinalForm>
			</TabPaneContainer>
		</>
	)
}

export { TabPaneAccountSettings }
