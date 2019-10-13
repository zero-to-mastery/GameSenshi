import React from 'react'
import {
	FinalSelectLanguages,
	FINAL_SELECT_LANGUAGES,
} from './FinalSelectLanguages'

// components
import { stopUndefined } from 'utils'
import { ExportMolecules } from 'componentMolecules'

const { LabelForm } = stopUndefined(ExportMolecules)

const FinalSelectLanguagesPropedGeneraL = props => {
	return (
		<LabelForm label='Languages' htmlFor={FINAL_SELECT_LANGUAGES}>
			<FinalSelectLanguages hideSuccess onlyShowErrorAfterSubmit {...props} />
		</LabelForm>
	)
}

export { FinalSelectLanguagesPropedGeneraL, FINAL_SELECT_LANGUAGES }
