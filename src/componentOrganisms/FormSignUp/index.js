import React, { useCallback } from 'react'
import { FormSignUp } from 'componentOrganisms/FormSignUp/FormSignUp'
// routing
import { withLastLocation, ROUTE_PAGE_SIGN_IN } from 'routes'
// api
import { handleSignUpWithEmailAndPassword } from 'api'
// apollo
import { ApolloConsumer } from 'react-apollo'
// utils
import { onSuccessfulSubmission } from 'componentOrganisms/FormSignUp/utils'

const FormSignUpPropedDefault = withLastLocation(props => {
	const { lastLocation, ...restProps } = props
	// const onSubmit = useCallback(
	// 	(values = { email: '', password: '', username: '' }) => {
	// 		return handleSignUpWithEmailAndPassword(values, apolloClient)
	// 	},
	// 	[]
	// )
	const onSuccessfulSubmission_ = useCallback(values => {
		onSuccessfulSubmission(values, lastLocation)
	})
	return (
		<ApolloConsumer>
			{apolloClient => (
				<FormSignUp
					signInLink={ROUTE_PAGE_SIGN_IN}
					onSubmit={values => {
						return handleSignUpWithEmailAndPassword(values, apolloClient)
					}}
					onSuccessfulSubmission={onSuccessfulSubmission_}
					{...restProps}
				/>
			)}
		</ApolloConsumer>
	)
})

export { FormSignUp, FormSignUpPropedDefault }
