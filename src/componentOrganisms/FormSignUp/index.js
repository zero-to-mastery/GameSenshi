import React, { useCallback } from 'react'
import { FormSignUp } from 'componentOrganisms/FormSignUp/FormSignUp'
// routing
import { withLastLocation, ROUTE_PAGE_SIGN_IN } from 'routes'
// api
import { handleSignUpWithEmailAndPassword } from 'api'
// apollo
import { getClient } from 'apolloInit'
// utils
import { onSuccessfulSubmission } from 'componentOrganisms/FormSignUp/utils'

const FormSignUpPropedDefault = withLastLocation(props => {
	const { lastLocation, ...restProps } = props
	const onSubmit = useCallback(
		(values = { email: '', password: '', username: '' }) => {
			return handleSignUpWithEmailAndPassword(values, getClient())
		},
		[]
	)
	const onSuccessfulSubmission_ = useCallback(values => {
		onSuccessfulSubmission(values, lastLocation)
	})
	return (
		<FormSignUp
			signInLink={ROUTE_PAGE_SIGN_IN}
			onSubmit={onSubmit}
			onSuccessfulSubmission={onSuccessfulSubmission_}
			{...restProps}
		/>
	)
})

export { FormSignUp, FormSignUpPropedDefault }
