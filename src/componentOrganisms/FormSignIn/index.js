import React, { useCallback } from 'react'
// routing
import { withLastLocation } from 'routes'
// constants
import { ROUTE_PAGE_PASSWORD_RESET, onSignedInRouting } from 'routes'
// api
import { handleSignInWithEmailAndPassword } from 'api'
// component
import {
	FormSignIn,
	SIGN_IN_FORM_STATE_EMAIL,
	SIGN_IN_FORM_STATE_OPEN,
	SIGN_IN_FORM_TOGGLE,
	SIGN_IN_FORM_ON_SUCCESSFUL_SUBMISSION,
	FINAL_TEXT_EMAIL,
	FINAL_TEXT_PASSWORD,
} from 'componentOrganisms/FormSignIn/FormSignIn'
// store
import {
	storeSignIn,
	StateContainer,
	storeSignInToggle,
	storeSignInOnSuccessfulSubmission,
	STORE_SIGN_IN_STATE_EMAIL,
	STORE_SIGN_IN_STATE_OPEN,
} from 'state'

// inject staple props that suitable for this app
const FormSignInPropedDefault = withLastLocation(props => {
	const { history, lastLocation, ...restProps } = props

	const onSubmit = useCallback(values => {
		return handleSignInWithEmailAndPassword(
			values[FINAL_TEXT_EMAIL],
			values[FINAL_TEXT_PASSWORD]
		)
	}, [])

	const onSuccessfulSubmission = useCallback(() => {
		onSignedInRouting(lastLocation)
	}, [])
	return (
		<FormSignIn
			forgotPasswordLink={ROUTE_PAGE_PASSWORD_RESET}
			onSubmit={onSubmit}
			onSuccessfulSubmission={onSuccessfulSubmission}
			{...restProps}
		/>
	)
})

const mapStoreSignInStateToProp = {
	[SIGN_IN_FORM_STATE_EMAIL]: STORE_SIGN_IN_STATE_EMAIL,
	[SIGN_IN_FORM_STATE_OPEN]: STORE_SIGN_IN_STATE_OPEN,
}

const mapStoreSignInMethodToProp = {
	[SIGN_IN_FORM_TOGGLE]: storeSignInToggle,
	[SIGN_IN_FORM_ON_SUCCESSFUL_SUBMISSION]: storeSignInOnSuccessfulSubmission,
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
