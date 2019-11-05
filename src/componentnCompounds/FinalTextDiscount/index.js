import React from 'react'
import { FinalTextDiscount, FINAL_TEXT_DISCOUNT } from './FinalTextDiscount'
import { stopUndefined } from 'utils'
// components
import { Exports } from 'componentMolecules'

const { LabelForm } = stopUndefined(Exports)

const FinalTextDiscountPropedCheckout = props => {
	return (
		<LabelForm label='Discount' htmlFor={FINAL_TEXT_DISCOUNT}>
			<FinalTextDiscount {...props} />
		</LabelForm>
	)
}

export { FinalTextDiscountPropedCheckout }
