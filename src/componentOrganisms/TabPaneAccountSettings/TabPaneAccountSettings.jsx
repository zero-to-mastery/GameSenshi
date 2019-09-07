import React, { useRef } from 'react'
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
	FinalTextPasswordPropedAccount,
	FINAL_TEXT_EMAIL,
	FINAL_TEXT_PASSWORD,
} = stopUndefined(ExportCompounds)

const TabPaneAccountSettings = props => {
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
					onSubmit={(formError, values) => {
						return { [formError]: 'updateFailed' }
					}}>
					{({ submitError, handleSubmit, submitting, form }) => (
						<Form>
							<FinalTextEmailPropedAccount
								submitRef={submitButtonEmail}
								onBlur={() => {
									form.reset()
								}}
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
					)}
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
					onSubmit={(formError, values) => {
						return { [formError]: 'updateFailed' }
					}}>
					{({ submitError, handleSubmit, submitting, form }) => (
						<>
							<Form>
								<FinalTextPasswordPropedAccount
									submitRef={submitButtonPassWord}
									onBlur={() => {
										form.reset()
									}}
								/>
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
