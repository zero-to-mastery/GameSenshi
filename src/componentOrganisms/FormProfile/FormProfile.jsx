import React, { useState } from 'react'
import { Form } from 'reactstrap'
import { stopUndefined } from 'utils'
import { Exports } from 'componentnCompounds'
const {
	FinalForm,
	FinalSelectGamePropedGeneraL,
	FINAL_SELECT_GENDER,
} = stopUndefined(Exports)
const FormProfile = props => {
	const [game, setGame] = useState('')
	const { onSubmit, onSuccessfulSubmission } = props

	return (
		<FinalForm
			initialValues={{
				[FINAL_SELECT_GENDER]: '',
			}}
			onSubmit={onSubmit}
			onSuccessfulSubmission={onSuccessfulSubmission}>
			{({ handleSubmit, submitting, submitError, form }) => {
				return (
					<Form>
						<FinalSelectGamePropedGeneraL onValueChange={setGame} />
					</Form>
				)
			}}
		</FinalForm>
	)
}

export { FormProfile }
