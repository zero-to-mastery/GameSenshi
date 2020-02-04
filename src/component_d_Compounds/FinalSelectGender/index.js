import React from 'react'
import { FinalSelectGender, FINAL_SELECT_GENDER } from './FinalSelectGender'

// components
import { stopUndefined } from '1_utils'
import { Exports } from 'component_c_Molecules'

const { LabelForm } = stopUndefined(Exports)

const FinalSelectGenderPropedGeneraL = props => {
	return (
		<LabelForm label='I am...' htmlFor={FINAL_SELECT_GENDER} Inputmd='4'>
			<FinalSelectGender hideSuccess onlyShowErrorAfterSubmit {...props} />
		</LabelForm>
	)
}

export { FinalSelectGenderPropedGeneraL, FINAL_SELECT_GENDER }
