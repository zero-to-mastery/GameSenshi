import React, { useCallback } from 'react'
import { FinalInput } from './FinalInput'
import { Exports } from 'component_b_Atoms'
import { stopUndefined } from '1_utils'

const { InputText, InputSelect, InputDate } = stopUndefined(Exports)

const emptyPromise = () => Promise.resolve()

const FinalInputText = props => {
	const { onChange, onValueChange, ...restProps } = props

	const onChange_ = useCallback(
		e => {
			// https://github.com/zero-to-mastery/GameSenshi/issues/62
			return onChange ? onChange(e, onValueChange || (() => {})) : undefined
		},
		[onChange, onValueChange]
	)
	return (
		<FinalInput Component={InputText} onChange={onChange_} {...restProps} />
	)
}

const FinalInputDate = props => {
	const onChange = useCallback(e => e, [])
	return (
		<FinalInput
			Component={InputDate}
			onChange={onChange}
			validation={emptyPromise}
			{...props}
		/>
	)
}

const FinalInputSelect = props => {
	const { onValueChange, validation, options, ...restProps } = props
	const onChange = useCallback(
		e => {
			onValueChange && onValueChange(e)
			return e
		},
		[onValueChange]
	)
	const validation_ = useCallback(
		value => (validation ? validation(value, options) : emptyPromise()),
		[validation]
	)
	return (
		<FinalInput
			Component={InputSelect}
			defaultValue={options[0]}
			validation={validation_}
			hideSuccess
			onChange={onChange}
			options={options}
			{...restProps}
		/>
	)
}

export { FinalInputText, FinalInputSelect, FinalInputDate }
