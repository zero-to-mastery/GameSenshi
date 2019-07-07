import React from 'react'
import { Form } from 'react-final-form'
import createDecorator from 'final-form-focus'

const focusOnError = createDecorator()

const FinalForm = props => {
	return <Form {...props} decorators={[focusOnError]} />
}

export default FinalForm
