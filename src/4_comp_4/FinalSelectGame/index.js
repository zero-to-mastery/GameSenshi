import React from 'react'
import { FinalSelectGame, FINAL_SELECT_GAME } from './FinalSelectGame'

// components
import { stopUndefined } from '1_utils'
import { Exports } from '4_comp_3_Molecules'

const { LabelForm } = stopUndefined(Exports)

const FinalSelectGamePropedGeneraL = props => {
	return (
		<LabelForm label='Select a game' htmlFor={FINAL_SELECT_GAME}>
			<FinalSelectGame hideSuccess onlyShowErrorAfterSubmit {...props} />
		</LabelForm>
	)
}

export { FinalSelectGamePropedGeneraL, FINAL_SELECT_GAME }
