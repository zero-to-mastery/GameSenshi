import React from 'react'
import Select from 'react-select'
import { FormGroup } from 'reactstrap'
import classnames from 'classnames'
import './styles.css'

const INPUT_SELECT_VALUE = 'value'
const INPUT_SELECT_LABEL = 'label'
const INPUT_SELECT_DISABLED = 'isDisabled'
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

export {
	InputSelect,
	INPUT_SELECT_VALUE,
	INPUT_SELECT_LABEL,
	INPUT_SELECT_DISABLED,
	COLOR,
}
