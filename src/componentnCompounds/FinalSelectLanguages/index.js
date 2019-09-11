import React from 'react'
import {
	FinalSelectLanguages,
	FINAL_SELECT_LANGUAGES,
} from 'componentnCompounds/FinalSelectLanguages/FinalSelectLanguages'

// components
import { stopUndefined, emptyPromise } from 'utils'
import { ExportMolecules } from 'componentMolecules'

const { LabelForm } = stopUndefined(ExportMolecules)

const FinalSelectLanguagesPropedGeneraL = props => {
	return (
		<LabelForm label='I am...' htmlFor={FINAL_SELECT_LANGUAGES} Inputmd='4'>
			<FinalSelectLanguages
				validation={emptyPromise}
				hideSuccess
				onlyShowErrorAfterSubmit
				{...props}
			/>
		</LabelForm>
	)
}

export { FinalSelectLanguagesPropedGeneraL, FINAL_SELECT_LANGUAGES }
