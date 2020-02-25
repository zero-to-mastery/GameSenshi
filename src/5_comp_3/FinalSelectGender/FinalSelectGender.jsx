import React from 'react'
import { stopUndefined } from '1_utils'
import { Exports } from '5_comp_2'

const {
	FinalInputSelect,
	INPUT_SELECT_VALUE,
	INPUT_SELECT_LABEL,
	INPUT_SELECT_DISABLED,
} = stopUndefined(Exports)

const genderOptions = [
	{
		[INPUT_SELECT_VALUE]: '',
		[INPUT_SELECT_LABEL]: 'Gender',
		[INPUT_SELECT_DISABLED]: true,
	},
	{ [INPUT_SELECT_VALUE]: '0', [INPUT_SELECT_LABEL]: 'Male' },
	{ [INPUT_SELECT_VALUE]: '1', [INPUT_SELECT_LABEL]: 'Female' },
	{
		[INPUT_SELECT_VALUE]: '2',
		[INPUT_SELECT_LABEL]: 'Feeling Lucky',
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
