import React from 'react'
import Select from 'react-select'
import { FormGroup } from 'reactstrap'

const InputSelect = props => {
	const {
		className,
		classNamePrefix,
		id,
		name,
		value,
		options,
		isSearchable,
		onBlur,
		onFocus,
		onChange,
		onKeypress,
	} = props
	return (
		<FormGroup>
			<Select
				id={id}
				name={name}
				value={value}
				options={options}
				className={className || 'react-select react-select-info'}
				classNamePrefix={classNamePrefix || 'react-select'}
				isSearchable={isSearchable}
				onChange={onChange}
				onFocus={onFocus}
				onBlur={onBlur}
				onKeypress={onKeypress}
			/>
		</FormGroup>
	)
}

export { InputSelect }
