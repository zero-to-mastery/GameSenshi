import React from 'react'
import { FinalInput } from 'componentMolecules/FinalInput/FinalInput'
import { ExportAtoms } from 'componentAtoms'
import { stopUndefined } from 'utils'

const { InputText, InputSelect } = stopUndefined(ExportAtoms)

const FinalInputText = props => {
	const defaultProps = { onChange: () => {}, onValueChange: () => {} }
	const { onChange, onValueChange, ...restProps } = {
		...defaultProps,
		...props,
	}
	return (
		<FinalInput
			Component={InputText}
			onChange={e => {
				return onChange(e, onValueChange)
			}}
			{...restProps}
		/>
	)
}

const FinalInputSelect = props => {
	const defaultProps = { onValueChange: () => {} }
	const { onValueChange, ...restProps } = { ...defaultProps, ...props }
	return (
		<FinalInput
			Component={InputSelect}
			onChange={e => {
				onValueChange(e)
				return e
			}}
			{...restProps}
		/>
	)
}

export { FinalInputText, FinalInputSelect }
