import React from 'react'
import { stopUndefined } from 'utils'
//components
import { Exports } from 'componentMolecules'

const { FinalInputSelect, VALUE, LABEL, COLOR } = stopUndefined(Exports)

const languageOptions = [
	{ [VALUE]: '0', [LABEL]: 'Languages', [COLOR]: '#9a9a9a' },
	{ [VALUE]: '1', [LABEL]: 'English', [COLOR]: '#00B8D9' },
	{ [VALUE]: '2', [LABEL]: 'French', [COLOR]: '#0052CC' },
	{ [VALUE]: '3', [LABEL]: 'Spanish', [COLOR]: '#5243AA' },
	{ [VALUE]: '4', [LABEL]: 'Deutsche', [COLOR]: '#FF5630' },
	{ [VALUE]: '5', [LABEL]: 'Russian', [COLOR]: '#FF8B00' },
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
