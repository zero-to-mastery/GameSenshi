import React, { useState } from 'react'
//state
import { Subscribe, userStore } from 'state'
// constants
import { USER_DISPLAY_NAME } from 'constantValues'
// core components
import { FinalInput, FinalForm, FORM_ERROR } from 'componentsAtom'
import { Form, Col, Row, Container } from 'reactstrap'
// validation
import { signUpUsernameValidation, usernameLength } from 'utils/validation'

//this comp is not in use
const UsernameForm = props => {
	return (
		<Subscribe to={[userStore]}>
			{userStore => {
				const {
					state: { [USER_DISPLAY_NAME]: name },
				} = userStore
				return (
					<FinalForm
						initialValues={{
							[USER_DISPLAY_NAME]: '',
						}}
						onSubmit={values => {
							//
						}}>
						{({ handleSubmit, submitting, submitError, form }) => (
							<Form className='form'>
								<FinalInput
									type='username'
									name={USER_DISPLAY_NAME}
									hideSuccess
									onlyShowErrorOnSubmit
									placeholder={name}
									maxLength={usernameLength}
									icon='tim-icons tim-icons icon-single-02'
									validation={value => signUpUsernameValidation(value)}
									onBlur={() => {
										form.reset()
									}}
								/>
							</Form>
						)}
					</FinalForm>
				)
			}}
		</Subscribe>
	)
}

export default UsernameForm
