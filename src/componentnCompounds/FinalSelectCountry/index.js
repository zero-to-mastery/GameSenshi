import React from 'react'

import { FinalSelectCountry, FINAL_SELECT_COUNTRY } from './FinalSelectCountry'

// components
import { stopUndefined } from 'utils'
import { Exports } from 'componentMolecules'

const { LabelForm } = stopUndefined(Exports)

const FinalSelectCountryPropedGeneraL = props => {
	return (
		<LabelForm label='Country' htmlFor={FINAL_SELECT_COUNTRY} Inputmd='4'>
			<FinalSelectCountry hideSuccess onlyShowErrorAfterSubmit {...props} />
		</LabelForm>
	)
}

export { FinalSelectCountryPropedGeneraL, FINAL_SELECT_COUNTRY }
