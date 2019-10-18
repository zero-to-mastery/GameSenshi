import React from 'react'
import { stopUndefined } from 'utils'
//components
import { Exports } from 'componentMolecules'

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
	const { ...restProps } = props
	return (
		<FinalInputText
			name={FINAL_TEXT_CARD_HOLDER_NAME}
			autoComplete='cc-name'
			placeholder='Card Holder Name'
			hideSuccess
			onChange={onChange}
			icon='tim-icons icon-single-02'
			{...restProps}
		/>
	)
}

export { FinalTextCardHolderName, FINAL_TEXT_CARD_HOLDER_NAME }
