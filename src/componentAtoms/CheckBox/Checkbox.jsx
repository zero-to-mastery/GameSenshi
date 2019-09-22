import React, { useState, useCallback } from 'react'

// reactstrap components
import { Label, FormGroup, Input } from 'reactstrap'

const CheckBox = props => {
	const { initialValue, onChange, className, children, ...otherProps } = props

	const [value, setValue] = useState(initialValue)
	const onChange_ = useCallback(
		e => {
			setValue(value => !value)
			onChange && onChange(e)
		},
		[onChange]
	)
	return (
		<FormGroup check className={className}>
			<Label check>
				<Input
					type='checkbox'
					value={value}
					onChange={onChange_}
					{...otherProps}
				/>
				<span className='form-check-sign' />
				{children}
			</Label>
		</FormGroup>
	)
}

export { CheckBox }
