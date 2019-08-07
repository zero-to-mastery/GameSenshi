import React from 'react'
import Select from 'react-select'
import { FormGroup } from 'reactstrap'

const InputSelect = props => {
	const { className, classNamePrefix, value, children, ...restProps } = props
	return (
		<FormGroup>
			<Select
				className={className || 'react-select react-select-info'}
				classNamePrefix={classNamePrefix || 'react-select'}
				value={value.value || props.options[0]}
				{...restProps}
			/>
			{children}
		</FormGroup>
	)
}

export { InputSelect }
