import React from 'react'
import { stopUndefined } from 'utils'
//components
import { ExportMolecules } from 'componentMolecules'

const { FinalInputSelect, VALUE, LABEL, IS_DISABLED } = stopUndefined(
	ExportMolecules
)

const genderOptions = [
	{
		[VALUE]: '',
		[LABEL]: 'Gender',
		[IS_DISABLED]: true,
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
	const { validation, ...restProps } = props
	return (
		<FinalInputSelect
			name={FINAL_SELECT_GENDER}
			placeholder='Year'
			hideSuccess
			validation={value => validation(value, genderOptions)}
			options={genderOptions}
			defaultValue={genderOptions[0]}
			{...restProps}
		/>
	)
}

export { FinalSelectGender, FINAL_SELECT_GENDER }
