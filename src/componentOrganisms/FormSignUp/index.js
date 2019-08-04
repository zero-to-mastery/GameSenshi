import React from 'react'
import { FormSignUp } from 'componentOrganisms/FormSignUp/FormSignUp'
// routing
import { withLastLocation, ROUTE_PAGE_SIGN_IN } from 'routes'
// api
import { handleIsEmailNotExist, handleSignUpWithEmailAndPassword } from 'api'
// apollo
import { ApolloConsumer } from 'react-apollo'
// validation
import {
	signUpEmailValidation,
	signUpPasswordValidation,
	signUpUsernameValidation,
	emailPopoverMessages,
	usernamePopoverMessages,
	passwordPopoverMessages,
} from 'utils'
// utils
import { onSuccessfulSubmission } from 'componentOrganisms/FormSignUp/utils'

const FormSignUpPropedDefault = withLastLocation(props => {
	const { lastLocation, ...restProps } = props
	return (
		<ApolloConsumer>
			{apolloClient => (
				<FormSignUp
					signInLink={ROUTE_PAGE_SIGN_IN}
					emailPopoverMessages={emailPopoverMessages}
					passwordPopoverMessages={passwordPopoverMessages}
					usernamePopoverMessages={usernamePopoverMessages}
					onEmailValidation={signUpEmailValidation}
					onEmailServerValidation={handleIsEmailNotExist}
					onPasswordValidation={signUpPasswordValidation}
					onUsernameValidation={signUpUsernameValidation}
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
