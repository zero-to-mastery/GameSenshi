import React from 'react'
import { stopUndefined } from 'utils'
//components
import { ExportMolecules } from 'componentMolecules'

const { FinalInputText } = stopUndefined(ExportMolecules)

const FINAL_TEXT_CARD_CVC = 'cvc'

const onChange = (e, onValueChange = () => {}) => {
	const {
		target: { value },
	} = e
	if (!isNaN(value) && value.length < 5) {
		onValueChange(value)
		return e.target.value
	}
	return false
}

const FinalCardCVC = props => {
	const { onValueChange, ...restProps } = props
	return (
		<FinalInputText
			name={FINAL_TEXT_CARD_CVC}
			autoComplete='cc-csc'
			placeholder='CVC'
			hideSuccess
			onChange={e => {
				return onChange(e, onValueChange)
			}}
			icon='tim-icons icon-lock-circle'
			{...restProps}
		/>
	)
}

export { FinalCardCVC, FINAL_TEXT_CARD_CVC }
