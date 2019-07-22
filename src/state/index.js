import { Subscribe, Provider } from 'unstated'
import { STATE } from 'constantValues'
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
	ALERT_STORE_SHOW,
	ALERT_STORE_TOGGLE,
} from 'state/Alert'
import AuthModalContainer from 'state/AuthModalContainer'
import SignInContainer from 'state/SignInContainer'
import {
	progressStore,
	progressStoreShow,
	progressStoreClose,
	progressStoreSetState,
	progressStoreResetState,
	PROGRESS_STORE_STATE_VALUE,
	PROGRESS_STORE_STATE_COLOR,
	PROGRESS_STORE_STATE_IS_OPEN,
	PROGRESS_STORE_SHOW,
	PROGRESS_STORE_CLOSE,
} from 'state/Progress'

const signUpStore = new SignUpContainer()
const cardStore = new CardContainer()
const userStore = new UserContainer()
const authModalStore = new AuthModalContainer()
const signInStore = new SignInContainer()

export {
	STATE,
	Provider,
	Subscribe,
	StateContainer,
	signUpStore,
	cardStore,
	userStore,
	authModalStore,
	signInStore,
	alertStore,
	alertStoreShow,
	alertStoreToggle,
	alertStoreSetState,
	alertStoreResetState,
	ALERT_STORE_STATE_BODY,
	ALERT_STORE_STATE_IS_OPEN,
	ALERT_STORE_STATE_COLOR,
	ALERT_STORE_STATE_ICON,
	ALERT_STORE_SHOW,
	ALERT_STORE_TOGGLE,
	progressStore,
	progressStoreShow,
	progressStoreClose,
	progressStoreSetState,
	progressStoreResetState,
	PROGRESS_STORE_STATE_VALUE,
	PROGRESS_STORE_STATE_COLOR,
	PROGRESS_STORE_STATE_IS_OPEN,
	PROGRESS_STORE_SHOW,
	PROGRESS_STORE_CLOSE,
}
