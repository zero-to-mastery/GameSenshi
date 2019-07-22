import {
	FormSignIn,
	SIGN_IN_FROM_STATE_EMAIL,
	SIGN_IN_FROM_STATE_IS_OPEN,
	SIGN_IN_FROM_TOGGLE,
	SIGN_IN_FROM_ON_SUCCESSFUL_SUBMISSION,
} from 'componentOrganisms/FormSignIn'

import {
	signInStore,
	StateContainer,
	signInStoreToggle,
	signInStoreOnSuccessfulSubmission,
	SIGN_IN_STORE_STATE_EMAIL,
	SIGN_IN_STORE_STATE_IS_OPEN,
} from 'state'

const signInStoreStateToPropsMap = {
	[SIGN_IN_FROM_STATE_EMAIL]: SIGN_IN_STORE_STATE_EMAIL,
	[SIGN_IN_FROM_STATE_IS_OPEN]: SIGN_IN_STORE_STATE_IS_OPEN,
}

const signInStoreMethodToPropsMap = {
	[SIGN_IN_FROM_TOGGLE]: signInStoreToggle,
	[SIGN_IN_FROM_ON_SUCCESSFUL_SUBMISSION]: signInStoreOnSuccessfulSubmission,
}

const FormSignInStoreAlert = StateContainer(
	FormSignIn,
	signInStore,
	signInStoreStateToPropsMap,
	signInStoreMethodToPropsMap
)

export { FormSignIn, FormSignInStoreAlert }
