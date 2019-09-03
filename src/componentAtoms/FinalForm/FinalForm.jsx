import React, { useCallback } from 'react'
import { Form } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import createDecorator from 'final-form-focus'

const focusOnError = createDecorator()

const FinalForm = props => {
	const { onSubmit, onSuccessfulSubmission, ...otherProps } = props
	const onSubmit_ = useCallback(async values => {
		const response = await onSubmit(values)
		const { status, data, message } = response

		if (status) {
			onSuccessfulSubmission(values)
			return undefined
		} else if (status === false) {
			const formError = { [FORM_ERROR]: message }
			return data ? { ...data, ...formError } : formError
		} else {
			return 'Unknown Unhandled Exception'
		}
	})
	return (
		<Form onSubmit={onSubmit_} decorators={[focusOnError]} {...otherProps} />
	)
}

export { FinalForm }
