import {
	SignInStore,
	SIGN_IN_STORE_STATE_EMAIL,
	SIGN_IN_STORE_STATE_IS_OPEN,
	SIGN_IN_STORE_STATE_SUBMITTED_CALLBACK,
	SIGN_IN_STORE_SHOW,
	SIGN_IN_STORE_CLOSE,
	SIGN_IN_STORE_TOGGLE,
	SIGN_IN_STORE_ON_SUCCESSFUL_SUBMISSION,
	SET_STATE,
	RESET_STATE,
} from 'state/SignIn/SignInStore'

const signInStore = new SignInStore()
const signInStoreShow = signInStore[SIGN_IN_STORE_SHOW]
const signInStoreClose = signInStore[SIGN_IN_STORE_CLOSE]
const signInStoreToggle = signInStore[SIGN_IN_STORE_TOGGLE]
const signInStoreSetState = signInStore[SET_STATE]
const signInStoreResetState = signInStore[RESET_STATE]
const signInStoreOnSuccessfulSubmission =
	signInStore[SIGN_IN_STORE_ON_SUCCESSFUL_SUBMISSION]

export {
	signInStore,
	signInStoreShow,
	signInStoreClose,
	signInStoreToggle,
	signInStoreSetState,
	signInStoreResetState,
	signInStoreOnSuccessfulSubmission,
	SIGN_IN_STORE_STATE_EMAIL,
	SIGN_IN_STORE_STATE_IS_OPEN,
	SIGN_IN_STORE_STATE_SUBMITTED_CALLBACK,
}
