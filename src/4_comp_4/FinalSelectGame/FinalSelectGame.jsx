import React from 'react'
import { stopUndefined } from '1_utils'
//components
import { Exports } from '4_comp_3_Molecules'

const {
	FinalInputSelect,
	INPUT_SELECT_VALUE,
	INPUT_SELECT_LABEL,
	INPUT_SELECT_DISABLED,
} = stopUndefined(Exports)

const gameOptions = [
	{
		[INPUT_SELECT_VALUE]: '',
		[INPUT_SELECT_LABEL]: 'Game',
		[INPUT_SELECT_DISABLED]: true,
	},
	{ [INPUT_SELECT_VALUE]: '0', [INPUT_SELECT_LABEL]: 'Fifa 20' },
	{
		[INPUT_SELECT_VALUE]: '1',
		[INPUT_SELECT_LABEL]: 'Counter-Strike Global Offensive',
	},
	{ [INPUT_SELECT_VALUE]: '2', [INPUT_SELECT_LABEL]: 'League of Legends' },
	{ [INPUT_SELECT_VALUE]: '3', [INPUT_SELECT_LABEL]: 'Tekken' },
	{ [INPUT_SELECT_VALUE]: '4', [INPUT_SELECT_LABEL]: 'Warcraft III' },
]

const FINAL_SELECT_GAME = 'Games'

const FinalSelectGame = props => {
	return (
		<FinalInputSelect
			name={FINAL_SELECT_GAME}
			placeholder='Game'
			options={gameOptions}
			{...props}
		/>
	)
}

export { FinalSelectGame, FINAL_SELECT_GAME }
