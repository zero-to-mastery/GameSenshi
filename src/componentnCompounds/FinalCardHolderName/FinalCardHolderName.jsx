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
	const { onValueChange, ...restProps } = props
	return (
		<FinalInputText
			placeholder='Card Holder Name'
			hideSuccess
			onChange={e => {
				return onChange(e, onValueChange)
			}}
			icon='tim-icons icon-single-02'
			{...restProps}
		/>
	)
}

export { FinalCardHolderName }
