import React from 'react'
import { FinalDateBirthDate, FINAL_DATE_BIRTH_DATE } from './FinalDateBirthDate'

import { stopUndefined } from 'utils'

// components
import { Exports } from 'component_c_Molecules'

const { LabelForm } = stopUndefined(Exports)

const FinalDateBirthDatePropedGeneraL = props => {
	return (
		<LabelForm label='Birth Date' htmlFor={FINAL_DATE_BIRTH_DATE} Inputmd='4'>
			<FinalDateBirthDate {...props} />
		</LabelForm>
	)
}

export { FinalDateBirthDatePropedGeneraL, FINAL_DATE_BIRTH_DATE }
