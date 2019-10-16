import React from 'react'
import { FinalSelectGame, FINAL_SELECT_GAME } from './FinalSelectGame'

// components
import { stopUndefined } from 'utils'
import { ExportMolecules } from 'componentMolecules'

const { LabelForm } = stopUndefined(ExportMolecules)

const FinalSelectGamePropedGeneraL = props => {
	return (
		<LabelForm label='Games' htmlFor={FINAL_SELECT_GAME}>
			<FinalSelectGame hideSuccess onlyShowErrorAfterSubmit {...props} />
		</LabelForm>
	)
}

export { FinalSelectGamePropedGeneraL, FINAL_SELECT_GAME }
