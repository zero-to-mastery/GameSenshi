import React from 'react'
import {
	FinalSelectGender,
	FINAL_SELECT_GENDER,
} from 'componentnCompounds/FinalSelectGender/FinalSelectGender'

// components
import { stopUndefined, emptyPromise } from 'utils'
import { ExportMolecules } from 'componentMolecules'

const { LabelForm } = stopUndefined(ExportMolecules)

const FinalSelectGenderPropedGeneraL = props => {
	return (
		<LabelForm label='I am...' htmlFor={FINAL_SELECT_GENDER} md='4'>
			<FinalSelectGender
				validation={emptyPromise}
				hideSuccess
				onlyShowErrorAfterSubmit
				{...props}
			/>
		</LabelForm>
	)
}

export { FinalSelectGenderPropedGeneraL, FINAL_SELECT_GENDER }
