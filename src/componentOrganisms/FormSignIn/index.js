import React from 'react'
import { withLastLocation } from 'react-router-last-location'
// validation
import {
	signInEmailValidation,
	signInPasswordValidation,
} from 'utils/validation'
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
	signInStore,
	StateContainer,
	signInStoreToggle,
	signInStoreOnSuccessfulSubmission,
	SIGN_IN_STORE_STATE_EMAIL,
	SIGN_IN_STORE_STATE_IS_OPEN,
} from 'state'

// inject staple props that suitable for this app
const FormSignInProped = withLastLocation(props => {
	const { history, lastLocation } = props
	return (
		<FormSignIn
			emailValidation={signInEmailValidation}
			passwordValidation={signInPasswordValidation}
			forgotPasswordLink={ROUTE_PAGE_PASSWORD_RESET}
			onSubmit={handleSignInWithEmailAndPassword}
			onSuccessfulSubmission={() => {
				onSignedInRouting(history, lastLocation)
			}}
			{...props}
		/>
	)
})

const signInStoreStateToPropsMap = {
	[SIGN_IN_FROM_STATE_EMAIL]: SIGN_IN_STORE_STATE_EMAIL,
	[SIGN_IN_FROM_STATE_IS_OPEN]: SIGN_IN_STORE_STATE_IS_OPEN,
}

const signInStoreMethodToPropsMap = {
	[SIGN_IN_FROM_TOGGLE]: signInStoreToggle,
	[SIGN_IN_FROM_ON_SUCCESSFUL_SUBMISSION]: signInStoreOnSuccessfulSubmission,
}

const FormSignInPropedStoreSignIn = StateContainer(
	FormSignInProped,
	[signInStore],
	[signInStoreStateToPropsMap],
	[signInStoreMethodToPropsMap]
)

export { FormSignIn, FormSignInProped, FormSignInPropedStoreSignIn }
