import React from 'react'
import { stopUndefined } from 'utils'
//components
import { ExportMolecules } from 'componentMolecules'

const { FinalInputSelect, VALUE, LABEL, DISABLE } = stopUndefined(
	ExportMolecules
)

const genderOptions = [
	{
		[VALUE]: '',
		[LABEL]: 'Gender',
		[DISABLE]: true,
	},
	{ [VALUE]: '0', [LABEL]: 'Male' },
	{ [VALUE]: '1', [LABEL]: 'Female' },
	{
		[VALUE]: '2',
		[LABEL]: 'Feeling Lucky',
	},
]

const FINAL_SELECT_GENDER = 'Gender'

const FinalSelectGender = props => {
	return (
		<FinalInputSelect
			name={FINAL_SELECT_GENDER}
			placeholder='Gender'
			options={genderOptions}
			{...props}
		/>
	)
}

export { FinalSelectGender, FINAL_SELECT_GENDER }
