import React from 'react'
// utils
import { stopUndefined } from 'utils'
import { string } from 'yup'
//components
import { ExportMolecules } from 'componentMolecules'

const { FinalInputText } = stopUndefined(ExportMolecules)

const onChangeNumber = (e, onValueChange = () => {}) => {
	let {
		target: { value },
	} = e

	try {
		string()
			.matches(/^(?:[0-9 ]*)$/, 'only number and space allowed')
			.isValidSync(value)
		value = value.replace(/ /g, '')
		if (value.length < 17) {
			onValueChange(value)
			const indexes = [4, 9, 14]
			indexes.forEach(element => {
				if (value.length > element) {
					value = value.substr(0, element) + ' ' + value.substr(element)
				}
			})
			return value
		} else {
			return false
		}
	} catch (e) {
		return false
	}
}

const FinalCardNumber = props => {
	const { name, onFocus, submitRef, onValueChange, validation } = props
	return (
		<FinalInputText
			placeholder='Card Number'
			name={name}
			hideSuccess
			onChange={e => {
				onChangeNumber(e, onValueChange)
			}}
			onFocus={onFocus}
			icon='tim-icons icon-credit-card'
			validation={value => validation(value.replace(/ /g, ''))}
			submitRef={submitRef}
		/>
	)
}

export { FinalCardNumber }
