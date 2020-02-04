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

const FINAL_SELECT_EXPIRY_MONTH = 'expiryMonth'

const monthOptions = [
	{
		[INPUT_SELECT_VALUE]: '',
		[INPUT_SELECT_LABEL]: 'Month',
		[INPUT_SELECT_DISABLED]: true,
	},
	{ [INPUT_SELECT_VALUE]: '01', [INPUT_SELECT_LABEL]: 'Jan 01' },
	{ [INPUT_SELECT_VALUE]: '02', [INPUT_SELECT_LABEL]: 'Feb 02' },
	{ [INPUT_SELECT_VALUE]: '03', [INPUT_SELECT_LABEL]: 'Mar 03' },
	{ [INPUT_SELECT_VALUE]: '04', [INPUT_SELECT_LABEL]: 'Apr 04' },
	{ [INPUT_SELECT_VALUE]: '05', [INPUT_SELECT_LABEL]: 'May 05' },
	{ [INPUT_SELECT_VALUE]: '06', [INPUT_SELECT_LABEL]: 'Jun 06' },
	{ [INPUT_SELECT_VALUE]: '07', [INPUT_SELECT_LABEL]: 'Jul 07' },
	{ [INPUT_SELECT_VALUE]: '08', [INPUT_SELECT_LABEL]: 'Aug 08' },
	{ [INPUT_SELECT_VALUE]: '09', [INPUT_SELECT_LABEL]: 'Sep 09' },
	{ [INPUT_SELECT_VALUE]: '10', [INPUT_SELECT_LABEL]: 'Oct 10' },
	{ [INPUT_SELECT_VALUE]: '11', [INPUT_SELECT_LABEL]: 'Nov 11' },
	{ [INPUT_SELECT_VALUE]: '12', [INPUT_SELECT_LABEL]: 'Dec 12' },
]

const FinalSelectExpiryMonth = props => {
	return (
		<FinalInputSelect
			name={FINAL_SELECT_EXPIRY_MONTH}
			placeholder='Month'
			options={monthOptions}
			{...props}
		/>
	)
}

export { FinalSelectExpiryMonth, FINAL_SELECT_EXPIRY_MONTH }
