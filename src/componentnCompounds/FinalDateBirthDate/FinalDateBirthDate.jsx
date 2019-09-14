import React from 'react'
import moment from 'moment'
import { stopUndefined } from 'utils'
//components
import { ExportMolecules } from 'componentMolecules'

const { FinalInputDate } = stopUndefined(ExportMolecules)

const FINAL_DATE_BIRTH_DATE = 'birthDate'

const upperLimit = moment().subtract(7, 'y')
const lowerLimit = moment().subtract(90, 'y')

const valid = current => {
	return current.isAfter(lowerLimit) && current.isBefore(upperLimit)
}

const defaultValue = moment()
	.subtract(20, 'y')
	.month(0)
	.date(1)

const FinalDateBirthDate = props => {
	const { value, ...restProps } = props
	return (
		<FinalInputDate
			name={FINAL_DATE_BIRTH_DATE}
			value={value || defaultValue}
			hideSuccess
			isValidDate={valid}
			timeFormat={false}
			placeholder='BirthDate'
			{...restProps}
		/>
	)
}

export { FinalDateBirthDate, FINAL_DATE_BIRTH_DATE }
