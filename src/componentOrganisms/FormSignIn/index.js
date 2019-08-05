import React from 'react'
// routing
import { withLastLocation } from 'routes'
// constants
import { ROUTE_PAGE_PASSWORD_RESET, onSignedInRouting } from 'routes'
// api
import { handleSignInWithEmailAndPassword } from 'api'
// component
import {
	FormSignIn,
	SIGN_IN_FROM_STATE_EMAIL,
	SIGN_IN_FROM_STATE_IS_OPEN,
	SIGN_IN_FROM_TOGGLE,
	SIGN_IN_FROM_ON_SUCCESSFUL_SUBMISSION,
} from 'componentOrganisms/FormSignIn/FormSignIn'
// store
import {
	storeSignIn,
	StateContainer,
	storeSignInToggle,
	storeSignInOnSuccessfulSubmission,
	STORE_SIGN_IN_STATE_EMAIL,
	STORE_SIGN_IN_STATE_IS_OPEN,
} from 'state'

// inject staple props that suitable for this app
const FormSignInPropedDefault = withLastLocation(props => {
	const { history, lastLocation, ...restProps } = props
	return (
		<FormSignIn
			forgotPasswordLink={ROUTE_PAGE_PASSWORD_RESET}
			onSubmit={handleSignInWithEmailAndPassword}
			onSuccessfulSubmission={() => {
				onSignedInRouting(lastLocation)
			}}
			{...restProps}
		/>
	)
})

const mapStoreSignInStateToProp = {
	[SIGN_IN_FROM_STATE_EMAIL]: STORE_SIGN_IN_STATE_EMAIL,
	[SIGN_IN_FROM_STATE_IS_OPEN]: STORE_SIGN_IN_STATE_IS_OPEN,
}

const mapStoreSignInMethodToProp = {
	[SIGN_IN_FROM_TOGGLE]: storeSignInToggle,
	[SIGN_IN_FROM_ON_SUCCESSFUL_SUBMISSION]: storeSignInOnSuccessfulSubmission,
}

const FormSignInPropedDefaultStoreSignIn = StateContainer(
	FormSignInPropedDefault,
	[storeSignIn],
	[mapStoreSignInStateToProp],
	[mapStoreSignInMethodToProp]
)

export {
	FormSignIn,
	FormSignInPropedDefault,
	FormSignInPropedDefaultStoreSignIn,
}
