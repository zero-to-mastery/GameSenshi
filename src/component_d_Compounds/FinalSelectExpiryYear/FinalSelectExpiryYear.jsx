import React from 'react'
import { stopUndefined } from '1_utils'
//components
import { Exports } from 'component_c_Molecules'

const {
	FinalInputSelect,
	INPUT_SELECT_VALUE,
	INPUT_SELECT_LABEL,
	INPUT_SELECT_DISABLED,
} = stopUndefined(Exports)

const FINAL_SELECT_EXPIRY_YEAR = 'expiryYear'

const year = new Date().getFullYear()

const yearOptions = Array.from(new Array(30), (e, i) => {
	const yearString = (year + i).toString()
	return { [INPUT_SELECT_VALUE]: yearString, [INPUT_SELECT_LABEL]: yearString }
})

yearOptions.unshift({
	[INPUT_SELECT_VALUE]: '',
	[INPUT_SELECT_LABEL]: 'Year',
	[INPUT_SELECT_DISABLED]: true,
})

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
