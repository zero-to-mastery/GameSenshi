import React, { useState } from 'react'
//state
import { Subscribe, userStore } from 'state'
// constants
import { USER_DISPLAY_NAME } from 'constantValues'
// core components
import { FinalInput, FinalForm, FORM_ERROR } from 'components'
import { Form } from 'reactstrap'
// validation
import { signUpUsernameValidation } from 'utils/validation'
const UsernameForm = props => {
	const [editMode, setEditMode] = useState(false)
	return (
		<Subscribe to={[userStore]}>
			{userStore => {
				const {
					state: { [USER_DISPLAY_NAME]: name },
				} = userStore
				return editMode ? (
					<FinalForm
						initialValues={{
							[USER_DISPLAY_NAME]: '',
						}}
						onSubmit={values => {
							//
						}}>
						{({ handleSubmit, submitting, submitError }) => (
							<Form className='form'>
								<FinalInput
									type='text'
									name={USER_DISPLAY_NAME}
									hideSuccess
									placeholder='Email'
									icon='tim-icons icon-email-85'
									validation={value => signUpUsernameValidation(value)}
								/>
							</Form>
						)}
					</FinalForm>
				) : (
					<h3
						className='title'
						onDoubleClick={() => {
							setEditMode(prev => !prev)
						}}>
						{name}{' '}
						<i
							className='tim-icons icon-pencil editable'
							onClick={() => {
								setEditMode(prev => !prev)
							}}
						/>
					</h3>
				)
			}}
		</Subscribe>
	)
}

export default UsernameForm
