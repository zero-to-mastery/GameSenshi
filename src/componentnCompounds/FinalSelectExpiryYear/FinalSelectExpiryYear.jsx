import React from 'react'
import { stopUndefined } from 'utils'
//components
import { ExportMolecules } from 'componentMolecules'

const { FinalInputSelect } = stopUndefined(ExportMolecules)

const VALUE = 'value'
const LABEL = 'label'
const IS_DISABLED = 'isDisabled'

const FINAL_SELECT_EXPIRY_YEAR = 'expiryYear'

const year = new Date().getFullYear()

const yearOptions = Array.from(new Array(30), (e, i) => {
	const yearString = (year + i).toString()
	return { [VALUE]: yearString, [LABEL]: yearString }
})

yearOptions.unshift({ [VALUE]: '', [LABEL]: 'Year', [IS_DISABLED]: true })

const FinalSelectExpiryYear = props => {
	const { validation, ...restProps } = props
	return (
		<FinalInputSelect
			name={FINAL_SELECT_EXPIRY_YEAR}
			placeholder='Year'
			hideSuccess
			validation={value => validation(value, yearOptions)}
			options={yearOptions}
			defaultValue={yearOptions[0]}
			{...restProps}
		/>
	)
}

export { FinalSelectExpiryYear, FINAL_SELECT_EXPIRY_YEAR }
