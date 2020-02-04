import React from 'react'
import {
	FinalSelectLanguages,
	FINAL_SELECT_LANGUAGES,
} from './FinalSelectLanguages'

// components
import { stopUndefined } from '1_utils'
import { Exports } from 'component_c_Molecules'

const { LabelForm } = stopUndefined(Exports)

const FinalSelectLanguagesPropedGeneraL = props => {
	return (
		<LabelForm label='Languages' htmlFor={FINAL_SELECT_LANGUAGES}>
			<FinalSelectLanguages hideSuccess onlyShowErrorAfterSubmit {...props} />
		</LabelForm>
	)
}

export { FinalSelectLanguagesPropedGeneraL, FINAL_SELECT_LANGUAGES }
