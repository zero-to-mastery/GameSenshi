import React from 'react'
import { Quantity, INPUT_QUANTITY_NAME } from './Quantity'

import { LabelForm } from 'componentAtoms/LabelForm'

const QuantityProfile = props => {
	return (
		<LabelForm label='Quantity' htmlFor={INPUT_QUANTITY_NAME}>
			<Quantity {...props} />
		</LabelForm>
	)
}

export { QuantityProfile }
