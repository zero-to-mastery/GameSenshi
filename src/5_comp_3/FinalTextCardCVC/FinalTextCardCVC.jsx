import React from 'react'
import { stopUndefined } from '1_utils'
import { Exports } from '5_comp_2'

const { FinalInputText } = stopUndefined(Exports)

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

const FinalTextCardCVC = props => {
	return (
		<FinalInputText
			name={FINAL_TEXT_CARD_CVC}
			autoComplete='cc-csc'
			placeholder='CVC'
			hideSuccess
			onChange={onChange}
			icon='tim-icons icon-lock-circle'
			{...props}
		/>
	)
}

export { FinalTextCardCVC, FINAL_TEXT_CARD_CVC }
