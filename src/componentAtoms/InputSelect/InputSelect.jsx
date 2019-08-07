import React from 'react'
import Select from 'react-select'
import { FormGroup } from 'reactstrap'

const InputSelect = props => {
	const { className, classNamePrefix, children, ...restProps } = props
	return (
		<FormGroup>
			<Select
				className={className || 'react-select react-select-info'}
				classNamePrefix={classNamePrefix || 'react-select'}
				{...restProps}
			/>
			{children}
		</FormGroup>
	)
}

export { InputSelect }
