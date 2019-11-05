import React from 'react'
import { stopUndefined } from 'utils'
//components
import { Exports } from 'componentMolecules'

const { FinalInputText } = stopUndefined(Exports)

const FINAL_TEXT_DISCOUNT = 'Discount'

const FinalTextDiscount = props => {
	const { ...otherProps } = props
	return (
		<FinalInputText
			name={FINAL_TEXT_DISCOUNT}
			placeholder='Discount Code'
			{...otherProps}
		/>
	)
}

export { FinalTextDiscount, FINAL_TEXT_DISCOUNT }
