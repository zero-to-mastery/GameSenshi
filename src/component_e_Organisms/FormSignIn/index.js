import React, { useCallback } from 'react'
import {
	ROUTE_PAGE_PASSWORD_RESET,
	ROUTE_PAGE_SIGN_UP,
	useLastLocation,
} from '2_routes'
import { handleSignInWithEmailAndPassword } from 'api'
import {
	FormSignIn,
	SIGN_IN_FORM_STATE_EMAIL,
	SIGN_IN_FORM_STATE_IS_OPEN,
	SIGN_IN_FORM_TOGGLE,
	SIGN_IN_FORM_ON_SUCCESSFUL_SUBMISSION,
	FINAL_TEXT_EMAIL,
	FINAL_TEXT_PASSWORD,
} from './FormSignIn'
import {
	storeSignIn,
	StateContainer,
	storeSignInToggle,
	storeSignInOnSuccessfulSubmission,
	STORE_SIGN_IN_STATE_EMAIL,
	STORE_SIGN_IN_STATE_IS_OPEN,
} from '2_state'
import { onLogin } from 'component_0_Utils'

const FormSignInPropedSignIn = props => {
	const {
		[SIGN_IN_FORM_ON_SUCCESSFUL_SUBMISSION]: onSuccessfulSubmission,
		...otherProps
	} = props

	const onSubmit = useCallback(values => {
		return handleSignInWithEmailAndPassword(
			values[FINAL_TEXT_EMAIL],
			values[FINAL_TEXT_PASSWORD]
		)
	}, [])

	const lastLocation = useLastLocation()

	const onLogin_ = useCallback(() => {
		onLogin(lastLocation)
		onSuccessfulSubmission && onSuccessfulSubmission()
	}, [lastLocation])

	return (
		<FormSignIn
			forgotPasswordLink={ROUTE_PAGE_PASSWORD_RESET}
			createAccountLink={ROUTE_PAGE_SIGN_UP}
			onSubmit={onSubmit}
			onSuccessfulSubmission={onLogin_}
			{...otherProps}
		/>
	)
}

const mapStoreSignInStateToProp = {
	[SIGN_IN_FORM_STATE_EMAIL]: STORE_SIGN_IN_STATE_EMAIL,
	[SIGN_IN_FORM_STATE_IS_OPEN]: STORE_SIGN_IN_STATE_IS_OPEN,
}

const mapStoreSignInMethodToProp = {
	[SIGN_IN_FORM_TOGGLE]: storeSignInToggle,
	[SIGN_IN_FORM_ON_SUCCESSFUL_SUBMISSION]: storeSignInOnSuccessfulSubmission,
}

const FormSignInPropedSignInStoreSignIn = StateContainer(
	FormSignInPropedSignIn,
	[storeSignIn],
	[mapStoreSignInStateToProp],
	[mapStoreSignInMethodToProp]
)

const FormSignInStoreSignInPropedApp = props => {
	return <FormSignInPropedSignInStoreSignIn modal {...props} />
}

export { FormSignInPropedSignIn, FormSignInStoreSignInPropedApp }
