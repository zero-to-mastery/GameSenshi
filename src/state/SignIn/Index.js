import {
	StoreSignIn,
	STORE_SIGN_IN_STATE_EMAIL,
	STORE_SIGN_IN_STATE_IS_OPEN,
	STORE_SIGN_IN_STATE_SUBMITTED_CALLBACK,
	STORE_SIGN_IN_SHOW,
	STORE_SIGN_IN_CLOSE,
	STORE_SIGN_IN_TOGGLE,
	STORE_SIGN_IN_ON_SUCCESSFUL_SUBMISSION,
	SET_STATE,
	RESET_STATE,
} from 'state/SignIn/StoreSignIn'

const storeSignIn = new StoreSignIn()
const storeSignInShow = storeSignIn[STORE_SIGN_IN_SHOW]
const storeSignInClose = storeSignIn[STORE_SIGN_IN_CLOSE]
const storeSignInToggle = storeSignIn[STORE_SIGN_IN_TOGGLE]
const storeSignInSetState = storeSignIn[SET_STATE]
const storeSignInResetState = storeSignIn[RESET_STATE]
const storeSignInOnSuccessfulSubmission =
	storeSignIn[STORE_SIGN_IN_ON_SUCCESSFUL_SUBMISSION]

export {
	storeSignIn,
	storeSignInShow,
	storeSignInClose,
	storeSignInToggle,
	storeSignInSetState,
	storeSignInResetState,
	storeSignInOnSuccessfulSubmission,
	STORE_SIGN_IN_STATE_EMAIL,
	STORE_SIGN_IN_STATE_IS_OPEN,
	STORE_SIGN_IN_STATE_SUBMITTED_CALLBACK,
}
