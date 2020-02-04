import React from 'react'
import { stopUndefined } from '1_utils'
import { getCodes, getNames } from 'country-list'
//components
import { Exports } from '5_comp_2'

const {
	FinalInputSelect,
	INPUT_SELECT_VALUE,
	INPUT_SELECT_LABEL,
	INPUT_SELECT_DISABLED,
} = stopUndefined(Exports)
const FINAL_SELECT_COUNTRY = 'expiryMonth'

const countries = getNames()
const countryCodes = getCodes()

const countriesAndCodes = countries.reduce((acc, country, i) => {
	acc.push({
		[INPUT_SELECT_VALUE]: countryCodes[i],
		[INPUT_SELECT_LABEL]: country,
	})
	return acc
}, [])

const countryOptions = [
	{
		[INPUT_SELECT_VALUE]: '',
		[INPUT_SELECT_LABEL]: 'Country',
		[INPUT_SELECT_DISABLED]: true,
	},
	...countriesAndCodes,
]

const FinalSelectCountry = props => {
	return (
		<FinalInputSelect
			name={FINAL_SELECT_COUNTRY}
			placeholder='Country'
			options={countryOptions}
			{...props}
		/>
	)
}

export { FinalSelectCountry, FINAL_SELECT_COUNTRY }
