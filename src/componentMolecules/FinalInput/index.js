import React, { useCallback } from 'react'
import { FinalInput } from 'componentMolecules/FinalInput/FinalInput'
import { ExportAtoms } from 'componentAtoms'
import { stopUndefined } from 'utils'

const { InputText, InputSelect } = stopUndefined(ExportAtoms)

const defaultProps = { onChange: () => {}, onValueChange: () => {} }

const FinalInputText = props => {
	const { onChange, onValueChange, ...restProps } = {
		...defaultProps,
		...props,
	}
	const onChange_ = useCallback(e => {
		return onChange(e, onValueChange)
	}, [])
	return (
		<FinalInput Component={InputText} onChange={onChange_} {...restProps} />
	)
}

const FinalInputSelect = props => {
	const { onValueChange, ...restProps } = { ...defaultProps, ...props }
	const { validation, options } = props
	const onChange = useCallback(e => {
		onValueChange(e)
		return e
	}, [])
	const validation_ = useCallback(value => validation(value, options), [])
	return (
		<FinalInput
			Component={InputSelect}
			defaultValue={options[0]}
			validation={validation_}
			hideSuccess
			onChange={onChange}
			{...restProps}
		/>
	)
}

export { FinalInputText, FinalInputSelect }
