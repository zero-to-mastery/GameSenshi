import React from 'react'

import {
	FinalSelectCountry,
	FINAL_SELECT_COUNTRY,
} from 'componentnCompounds/FinalSelectCountry/FinalSelectCountry'

// components
import { stopUndefined, emptyPromise } from 'utils'
import { ExportMolecules } from 'componentMolecules'

const { LabelForm } = stopUndefined(ExportMolecules)

const FinalSelectCountryPropedGeneraL = props => {
	return (
		<LabelForm label='Country' htmlFor={FINAL_SELECT_COUNTRY} md='4'>
			<FinalSelectCountry
				validation={emptyPromise}
				hideSuccess
				onlyShowErrorAfterSubmit
				{...props}
			/>
		</LabelForm>
	)
}

export { FinalSelectCountryPropedGeneraL, FINAL_SELECT_COUNTRY }
