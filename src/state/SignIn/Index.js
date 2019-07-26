import {
	StoreSignIn,
	SIGN_IN_STORE_STATE_EMAIL,
	SIGN_IN_STORE_STATE_IS_OPEN,
	SIGN_IN_STORE_STATE_SUBMITTED_CALLBACK,
	SIGN_IN_STORE_SHOW,
	SIGN_IN_STORE_CLOSE,
	SIGN_IN_STORE_TOGGLE,
	SIGN_IN_STORE_ON_SUCCESSFUL_SUBMISSION,
	SET_STATE,
	RESET_STATE,
} from 'state/SignIn/StoreSignIn'

const storeSignIn = new StoreSignIn()
const storeSignInShow = storeSignIn[SIGN_IN_STORE_SHOW]
const storeSignInClose = storeSignIn[SIGN_IN_STORE_CLOSE]
const storeSignInToggle = storeSignIn[SIGN_IN_STORE_TOGGLE]
const storeSignInSetState = storeSignIn[SET_STATE]
const storeSignInResetState = storeSignIn[RESET_STATE]
const storeSignInOnSuccessfulSubmission =
	storeSignIn[SIGN_IN_STORE_ON_SUCCESSFUL_SUBMISSION]

export {
	storeSignIn,
	storeSignInShow,
	storeSignInClose,
	storeSignInToggle,
	storeSignInSetState,
	storeSignInResetState,
	storeSignInOnSuccessfulSubmission,
	SIGN_IN_STORE_STATE_EMAIL,
	SIGN_IN_STORE_STATE_IS_OPEN,
	SIGN_IN_STORE_STATE_SUBMITTED_CALLBACK,
}
