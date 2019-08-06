import React from 'react'

// reactstrap components
import { Label, FormGroup, Input } from 'reactstrap'

const CheckBox = props => {
	const { checked, onClick, onChange, className, children } = props
	return (
		<FormGroup check className={className}>
			<Label check>
				<Input
					type='checkbox'
					checked={checked}
					onClick={onClick}
					onChange={onChange || (() => {})}
				/>
				<span className='form-check-sign' />
				{children}
			</Label>
		</FormGroup>
	)
}

export { CheckBox }
