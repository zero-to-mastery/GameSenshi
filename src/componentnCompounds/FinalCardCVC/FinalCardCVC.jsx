import React from 'react'
//components
import { ExportMolecules } from 'componentMolecules'

const { FinalInputText } = ExportMolecules

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

const FinalCardNumber = props => {
	const { name, onFocus, submitRef, onValueChange, validation } = props
	return (
		<FinalInputText
			placeholder='CVC'
			name={name}
			hideSuccess
			onChange={e => {
				onChange(e, onValueChange)
			}}
			onFocus={onFocus}
			icon='tim-icons icon-lock-circle'
			validation={value => validation(value)}
			submitRef={submitRef}
		/>
	)
}

export { FinalCardNumber }
