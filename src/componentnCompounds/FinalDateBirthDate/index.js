import React from 'react'
import {
	FinalDateBirthDate,
	FINAL_DATE_BIRTH_DATE,
} from 'componentnCompounds/FinalDateBirthDate/FinalDateBirthDate'

import { stopUndefined } from 'utils'

// components
import { ExportMolecules } from 'componentMolecules'

const { LabelForm } = stopUndefined(ExportMolecules)

const FinalDateBirthDatePropedGeneraL = props => {
	return (
		<LabelForm label='Birth Date' htmlFor={FINAL_DATE_BIRTH_DATE} Inputmd='4'>
			<FinalDateBirthDate {...props} />
		</LabelForm>
	)
}

export { FinalDateBirthDatePropedGeneraL, FINAL_DATE_BIRTH_DATE }
