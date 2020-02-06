import React from 'react'
import clsx from 'clsx'
import { FormGroup } from 'reactstrap'
import ReactDatetime from 'react-datetime'

const InputDate = props => {
	const {
		className,
		hasFocus,
		hasDanger,
		hasSuccess,
		children,
		placeholder,
		...restProps
	} = props

	return (
		<FormGroup>
			<ReactDatetime
				inputProps={{
					className: clsx(className, {
						'has-danger': hasDanger,
						'has-success': hasSuccess,
						'input-group-focus': hasFocus,
						'mb-0': true,
						'form-control': true,
					}),
					placeholder: { placeholder },
				}}
				{...restProps}
			/>
			{children}
		</FormGroup>
	)
}

export { InputDate }
