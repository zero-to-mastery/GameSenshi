import React from 'react'
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
	return (
		<ApolloConsumer>
			{apolloClient => (
				<FormSignUp
					signInLink={ROUTE_PAGE_SIGN_IN}
					onSubmit={(email = '', password = '', username = '') => {
						return handleSignUpWithEmailAndPassword(
							email,
							password,
							username,
							apolloClient
						)
					}}
					onSuccessfulSubmission={(
						email = '',
						password = '',
						username = ''
					) => {
						onSuccessfulSubmission(email, password, username, lastLocation)
					}}
					{...restProps}
				/>
			)}
		</ApolloConsumer>
	)
})

export { FormSignUp, FormSignUpPropedDefault }
