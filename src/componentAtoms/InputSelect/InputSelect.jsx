import React from 'react'
import Select from 'react-select'
import { FormGroup } from 'reactstrap'
import classnames from 'classnames'

const VALUE = 'value'
const LABEL = 'label'
const IS_DISABLED = 'isDisabled'

const InputSelect = props => {
	const {
		hasDanger,
		hasSuccess,
		hasFocus,
		className,
		classNamePrefix,
		value,
		children,
		...restProps
	} = props
	return (
		<FormGroup>
			<Select
				className={classnames(className, {
					'react-select-danger': hasDanger,
					'react-select-success': hasSuccess,
					'react-select-info': hasFocus,
					'react-select mb-0': true,
				})}
				classNamePrefix={classNamePrefix || 'react-select'}
				{...restProps}
			/>
			{children}
		</FormGroup>
	)
}

export { InputSelect, VALUE, LABEL, IS_DISABLED }
