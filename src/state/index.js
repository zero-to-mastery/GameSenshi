import { Subscribe, Provider } from 'unstated'
import { StateContainer } from 'state/StateContainer'
import SignUpContainer from 'state/SignUpContainer'
import CardContainer from 'state/CardContainer'
import UserContainer from 'state/UserContainer'
import {
	alertStore,
	alertStoreShow,
	alertStoreToggle,
	alertStoreSetState,
	ALERT_STATE_BODY,
	ALERT_STATE_ICON,
	ALERT_STATE_OPEN,
	ALERT_STATE_COLOR,
	ALERT_SHOW,
	ALERT_TOGGLE,
} from 'state/Alert'
import AuthModalContainer from 'state/AuthModalContainer'
import SignInContainer from 'state/SignInContainer'
import {
	progressStore,
	progressStoreShow,
	progressStoreClose,
	progressStoreSetState,
	PROGRESS_STATE_VALUE,
	PROGRESS_STATE_COLOR,
	PROGRESS_STATE_OPEN,
	PROGRESS_SHOW,
	PROGRESS_CLOSE,
} from 'state/Progress'

const signUpStore = new SignUpContainer()
const cardStore = new CardContainer()
const userStore = new UserContainer()
const authModalStore = new AuthModalContainer()
const signInStore = new SignInContainer()

export {
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
	ALERT_STATE_BODY,
	ALERT_STATE_ICON,
	ALERT_STATE_OPEN,
	ALERT_STATE_COLOR,
	ALERT_SHOW,
	ALERT_TOGGLE,
	progressStore,
	progressStoreShow,
	progressStoreClose,
	progressStoreSetState,
	PROGRESS_STATE_VALUE,
	PROGRESS_STATE_COLOR,
	PROGRESS_STATE_OPEN,
	PROGRESS_SHOW,
	PROGRESS_CLOSE,
}
