import React from 'react'
import Select from 'react-select'
import { FormGroup } from 'reactstrap'
import classnames from 'classnames'
import './styles.css'

const VALUE = 'value'
const LABEL = 'label'
const DISABLE = 'isDisabled'
const COLOR = 'color'

const InputSelect = props => {
	const {
		hasDanger,
		hasSuccess,
		hasFocus,
		className,
		classNamePrefix,
		children,
		...restProps
	} = props
	return (
		<FormGroup>
			<Select
				className={classnames(
					'react-select mb-0',
					{
						'react-select-danger': hasDanger,
						'react-select-success': hasSuccess,
						'react-select-info': hasFocus,
					},
					className
				)}
				classNamePrefix={classNamePrefix || 'react-select'}
				{...restProps}
			/>
			{children}
		</FormGroup>
	)
}

export { InputSelect, VALUE, LABEL, DISABLE, COLOR }
