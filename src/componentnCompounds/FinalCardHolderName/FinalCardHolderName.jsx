import React from 'react'
import { stopUndefined } from 'utils'
//components
import { ExportMolecules } from 'componentMolecules'

const { FinalInputText } = stopUndefined(ExportMolecules)

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

const FinalCardHolderName = props => {
	const { name, onFocus, submitRef, onValueChange, validation } = props
	return (
		<FinalInputText
			placeholder='Card Holder Name'
			name={name}
			hideSuccess
			onChange={e => {
				onChange(e, onValueChange)
			}}
			onFocus={onFocus}
			icon='tim-icons icon-single-02'
			validation={validation}
			submitRef={submitRef}
		/>
	)
}

export { FinalCardHolderName }
