import React from 'react'
import { stopUndefined } from 'utils'
//components
import { ExportMolecules } from 'componentMolecules'

const { FinalInputSelect, VALUE, LABEL } = stopUndefined(ExportMolecules)

const gameOptions = [
	{ [VALUE]: '', [LABEL]: 'Select a game' },
	{ [VALUE]: '1', [LABEL]: 'Fifa 20' },
	{ [VALUE]: '2', [LABEL]: 'Counter-Strike Global Offensive' },
	{ [VALUE]: '3', [LABEL]: 'League of Legends' },
	{ [VALUE]: '4', [LABEL]: 'Tekken' },
	{ [VALUE]: '5', [LABEL]: 'Warcraft III' },
]

const FINAL_SELECT_GAME = 'Games'

const FinalSelectGame = props => {
	return (
		<FinalInputSelect
			name={FINAL_SELECT_GAME}
			placeholder='Games'
			options={gameOptions}
			{...props}
		/>
	)
}

export { FinalSelectGame, FINAL_SELECT_GAME }
