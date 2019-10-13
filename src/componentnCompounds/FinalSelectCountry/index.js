import React from 'react'

import { FinalSelectCountry, FINAL_SELECT_COUNTRY } from './FinalSelectCountry'

// components
import { stopUndefined } from 'utils'
import { ExportMolecules } from 'componentMolecules'

const { LabelForm } = stopUndefined(ExportMolecules)

const FinalSelectCountryPropedGeneraL = props => {
	return (
		<LabelForm label='Country' htmlFor={FINAL_SELECT_COUNTRY} Inputmd='4'>
			<FinalSelectCountry hideSuccess onlyShowErrorAfterSubmit {...props} />
		</LabelForm>
	)
}

export { FinalSelectCountryPropedGeneraL, FINAL_SELECT_COUNTRY }
