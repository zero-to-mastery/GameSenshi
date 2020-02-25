import React from 'react'
import { stopUndefined } from '1_utils'
import { Exports } from '5_comp_2'

const { FinalInputText } = stopUndefined(Exports)

const onChange = (e, onValueChange = () => {}) => {
	const {
		target: { value },
	} = e
	if (value.length < 100) {
		onValueChange(value)
		return e.target.value
	}
	return false
}

const FINAL_TEXT_CARD_HOLDER_NAME = 'ccname'

const FinalTextCardHolderName = props => {
	return (
		<FinalInputText
			name={FINAL_TEXT_CARD_HOLDER_NAME}
			autoComplete='cc-name'
			placeholder='Card Holder Name'
			hideSuccess
			onChange={onChange}
			icon='tim-icons icon-single-02'
			{...props}
		/>
	)
}

export { FinalTextCardHolderName, FINAL_TEXT_CARD_HOLDER_NAME }
