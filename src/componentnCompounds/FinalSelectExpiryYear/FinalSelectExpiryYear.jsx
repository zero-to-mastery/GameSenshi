import React from 'react'
import { stopUndefined } from 'utils'
//components
import { ExportMolecules } from 'componentMolecules'

const { FinalInputSelect, VALUE, LABEL, DISABLE } = stopUndefined(
	ExportMolecules
)

const FINAL_SELECT_EXPIRY_YEAR = 'expiryYear'

const year = new Date().getFullYear()

const yearOptions = Array.from(new Array(30), (e, i) => {
	const yearString = (year + i).toString()
	return { [VALUE]: yearString, [LABEL]: yearString }
})

yearOptions.unshift({ [VALUE]: '', [LABEL]: 'Year', [DISABLE]: true })

const FinalSelectExpiryYear = props => {
	return (
		<FinalInputSelect
			name={FINAL_SELECT_EXPIRY_YEAR}
			placeholder='Year'
			options={yearOptions}
			{...props}
		/>
	)
}

export { FinalSelectExpiryYear, FINAL_SELECT_EXPIRY_YEAR }
