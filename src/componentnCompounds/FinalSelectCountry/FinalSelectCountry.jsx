import React from 'react'
import { stopUndefined } from 'utils'
import { getCodes, getNames } from 'country-list'
//components
import { ExportMolecules } from 'componentMolecules'

const { FinalInputSelect, VALUE, LABEL, DISABLE } = stopUndefined(
	ExportMolecules
)
const FINAL_SELECT_COUNTRY = 'expiryMonth'

const countries = getNames()
const countryCodes = getCodes()

const countriesAndCodes = countries.reduce((acc, country, i) => {
	acc.push({ [VALUE]: countryCodes[i], [LABEL]: country })
	return acc
}, [])

const countryOptions = [
	{
		[VALUE]: '',
		[LABEL]: 'Country',
		[DISABLE]: true,
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
