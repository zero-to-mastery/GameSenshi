import { Subscribe, Provider } from 'unstated'
import { STATE } from 'state/constants'
import { StateContainer } from 'state/StateContainer'
import SignUpContainer from 'state/SignUpContainer'
import CardContainer from 'state/CardContainer'
import UserContainer from 'state/UserContainer'
import {
	alertStore,
	alertStoreShow,
	alertStoreToggle,
	alertStoreSetState,
	alertStoreResetState,
	ALERT_STORE_STATE_BODY,
	ALERT_STORE_STATE_IS_OPEN,
	ALERT_STORE_STATE_COLOR,
	ALERT_STORE_STATE_ICON,
} from 'state/Alert'
import AuthModalContainer from 'state/AuthModalContainer'
import {
	signInStore,
	signInStoreShow,
	signInStoreClose,
	signInStoreToggle,
	signInStoreSetState,
	signInStoreResetState,
	signInStoreOnSuccessfulSubmission,
	SIGN_IN_STORE_STATE_EMAIL,
	SIGN_IN_STORE_STATE_IS_OPEN,
	SIGN_IN_STORE_STATE_SIGNED_IN_CALLBACK,
} from 'state/SignIn'
import {
	progressStore,
	progressStoreShow,
	progressStoreClose,
	progressStoreSetState,
	progressStoreResetState,
	PROGRESS_STORE_STATE_VALUE,
	PROGRESS_STORE_STATE_COLOR,
	PROGRESS_STORE_STATE_IS_OPEN,
} from 'state/Progress'

const signUpStore = new SignUpContainer()
const cardStore = new CardContainer()
const userStore = new UserContainer()
const authModalStore = new AuthModalContainer()

export {
	STATE,
	Provider,
	Subscribe,
	StateContainer,
	signUpStore,
	cardStore,
	userStore,
	authModalStore,
	alertStore,
	alertStoreShow,
	alertStoreToggle,
	alertStoreSetState,
	alertStoreResetState,
	ALERT_STORE_STATE_BODY,
	ALERT_STORE_STATE_IS_OPEN,
	ALERT_STORE_STATE_COLOR,
	ALERT_STORE_STATE_ICON,
	progressStore,
	progressStoreShow,
	progressStoreClose,
	progressStoreSetState,
	progressStoreResetState,
	PROGRESS_STORE_STATE_VALUE,
	PROGRESS_STORE_STATE_COLOR,
	PROGRESS_STORE_STATE_IS_OPEN,
	signInStore,
	signInStoreShow,
	signInStoreClose,
	signInStoreToggle,
	signInStoreSetState,
	signInStoreResetState,
	signInStoreOnSuccessfulSubmission,
	SIGN_IN_STORE_STATE_EMAIL,
	SIGN_IN_STORE_STATE_IS_OPEN,
	SIGN_IN_STORE_STATE_SIGNED_IN_CALLBACK,
}
