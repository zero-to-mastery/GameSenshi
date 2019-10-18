import React from 'react'
import { FinalSelectGender, FINAL_SELECT_GENDER } from './FinalSelectGender'

// components
import { stopUndefined } from 'utils'
import { Exports } from 'componentMolecules'

const { LabelForm } = stopUndefined(Exports)

const FinalSelectGenderPropedGeneraL = props => {
	return (
		<LabelForm label='I am...' htmlFor={FINAL_SELECT_GENDER} Inputmd='4'>
			<FinalSelectGender hideSuccess onlyShowErrorAfterSubmit {...props} />
		</LabelForm>
	)
}

export { FinalSelectGenderPropedGeneraL, FINAL_SELECT_GENDER }
