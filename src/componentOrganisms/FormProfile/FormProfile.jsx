import React from 'react'
import { Form } from 'reactstrap'
import { ExportCompounds } from 'componentnCompounds'
const {
	FinalForm,
	FinalSelectGenderPropedGeneraL,
	FINAL_SELECT_GENDER,
} = stopUndefined(ExportCompounds)
const FormProfile = props => {
	return (
		<FinalForm>
			<Form>
				<FinalSelectGenderPropedGeneraL />
			</Form>
		</FinalForm>
	)
}

export { FormProfile }
