import React, { useCallback } from 'react'
import { Form } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import createDecorator from 'final-form-focus'

const focusOnError = createDecorator()

const FinalForm = props => {
	const { onSubmit, onSuccessfulSubmission, ...otherProps } = props

	const onSubmit_ = useCallback(
		async values => {
			const response = await onSubmit(values)
			const { status, data, message } = response

			const onSuccessfulSubmission_ = onSuccessfulSubmission || (() => {})

			if (status) {
				onSuccessfulSubmission_(values)
				return undefined
			} else if (status === false) {
				const formError = { [FORM_ERROR]: message }
				return data ? { ...data, ...formError } : formError
			} else {
				return 'Unknown Unhandled Exception'
			}
		},
		[onSubmit, onSuccessfulSubmission]
	)
	return (
		<Form onSubmit={onSubmit_} decorators={[focusOnError]} {...otherProps} />
	)
}

export { FinalForm }
