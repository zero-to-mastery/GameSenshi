import React from 'react'
import { Form } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import createDecorator from 'final-form-focus'

const focusOnError = createDecorator()

const FinalForm = props => {
	const { onSubmit, ...otherProps } = props
	return (
		<Form
			{...otherProps}
			onSubmit={(...args) => {
				return onSubmit(FORM_ERROR, ...args)
			}}
			decorators={[focusOnError]}
		/>
	)
}

export { FinalForm }
