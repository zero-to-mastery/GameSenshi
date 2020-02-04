import React from 'react'
import { stopUndefined } from '1_utils'
//components
import { Exports } from 'component_c_Molecules'

const {
	FinalInputSelect,
	INPUT_SELECT_VALUE,
	INPUT_SELECT_LABEL,
	COLOR,
} = stopUndefined(Exports)

const languageOptions = [
	{
		[INPUT_SELECT_VALUE]: '0',
		[INPUT_SELECT_LABEL]: 'Languages',
		[COLOR]: '#9a9a9a',
	},
	{
		[INPUT_SELECT_VALUE]: '1',
		[INPUT_SELECT_LABEL]: 'English',
		[COLOR]: '#00B8D9',
	},
	{
		[INPUT_SELECT_VALUE]: '2',
		[INPUT_SELECT_LABEL]: 'French',
		[COLOR]: '#0052CC',
	},
	{
		[INPUT_SELECT_VALUE]: '3',
		[INPUT_SELECT_LABEL]: 'Spanish',
		[COLOR]: '#5243AA',
	},
	{
		[INPUT_SELECT_VALUE]: '4',
		[INPUT_SELECT_LABEL]: 'Deutsche',
		[COLOR]: '#FF5630',
	},
	{
		[INPUT_SELECT_VALUE]: '5',
		[INPUT_SELECT_LABEL]: 'Russian',
		[COLOR]: '#FF8B00',
	},
]

const FINAL_SELECT_LANGUAGES = 'Languages'

const FinalSelectLanguages = props => {
	return (
		<FinalInputSelect
			name={FINAL_SELECT_LANGUAGES}
			placeholder='Languages'
			options={languageOptions}
			{...props}
		/>
	)
}

export { FinalSelectLanguages, FINAL_SELECT_LANGUAGES }
