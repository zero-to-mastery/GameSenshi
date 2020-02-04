import React from 'react'

import { FinalSelectCountry, FINAL_SELECT_COUNTRY } from './FinalSelectCountry'

// components
import { stopUndefined } from '1_utils'
import { Exports } from '5_comp_2'

const { LabelForm } = stopUndefined(Exports)

const FinalSelectCountryPropedGeneraL = props => {
	return (
		<LabelForm label='Country' htmlFor={FINAL_SELECT_COUNTRY} Inputmd='4'>
			<FinalSelectCountry hideSuccess onlyShowErrorAfterSubmit {...props} />
		</LabelForm>
	)
}

export { FinalSelectCountryPropedGeneraL, FINAL_SELECT_COUNTRY }
