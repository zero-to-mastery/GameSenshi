import React from 'react'
import { LabelForm } from 'componentAtoms/LabelForm/LabelForm'
// reactstrap components
import { FormGroup } from 'reactstrap'

const LabelFormSimple = props => {
	const { htmlFor, children, ...restProps } = props
	return (
		<LabelForm htmlFor={htmlFor} {...restProps}>
			<FormGroup>
				<label className='labels' id={htmlFor} name={htmlFor}>
					{children}
				</label>
			</FormGroup>
		</LabelForm>
	)
}

export { LabelForm, LabelFormSimple }
