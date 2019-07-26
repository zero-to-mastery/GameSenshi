import React from 'react'
// routing
import { withLastLocation } from 'routes'
// validation
import {
	signInEmailValidation,
	signInPasswordValidation,
} from 'utils/validation'
// constants
import { ROUTE_PAGE_PASSWORD_RESET, onSignedInRouting } from 'routes'
// api
import { handleSignInWithEmailAndPassword } from 'api'
// utils
import { buttonSocialAuthOnClicks } from 'componentAtoms'
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
	SIGN_IN_STORE_STATE_EMAIL,
	SIGN_IN_STORE_STATE_IS_OPEN,
} from 'state'

// inject staple props that suitable for this app
const FormSignInPropedDefault = withLastLocation(props => {
	const { history, lastLocation, ...restProps } = props
	return (
		<FormSignIn
			emailValidation={signInEmailValidation}
			passwordValidation={signInPasswordValidation}
			forgotPasswordLink={ROUTE_PAGE_PASSWORD_RESET}
			onSubmit={handleSignInWithEmailAndPassword}
			onSuccessfulSubmission={() => {
				onSignedInRouting(lastLocation)
			}}
			socialAuthOnClicks={buttonSocialAuthOnClicks(lastLocation)}
			{...restProps}
		/>
	)
})

const storeSignInStateToPropsMap = {
	[SIGN_IN_FROM_STATE_EMAIL]: SIGN_IN_STORE_STATE_EMAIL,
	[SIGN_IN_FROM_STATE_IS_OPEN]: SIGN_IN_STORE_STATE_IS_OPEN,
}

const storeSignInMethodToPropsMap = {
	[SIGN_IN_FROM_TOGGLE]: storeSignInToggle,
	[SIGN_IN_FROM_ON_SUCCESSFUL_SUBMISSION]: storeSignInOnSuccessfulSubmission,
}

const FormSignInPropedDefaultStoreSignIn = StateContainer(
	FormSignInPropedDefault,
	[storeSignIn],
	[storeSignInStateToPropsMap],
	[storeSignInMethodToPropsMap]
)

export {
	FormSignIn,
	FormSignInPropedDefault,
	FormSignInPropedDefaultStoreSignIn,
}
