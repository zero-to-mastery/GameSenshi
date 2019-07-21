import { Subscribe, Provider } from 'unstated'
import { StateContainer } from 'state/StateContainer'
import SignUpContainer from 'state/SignUpContainer'
import CardContainer from 'state/CardContainer'
import UserContainer from 'state/UserContainer'
import {
	alertStore,
	alertStoreShow,
	alertStateToggle,
	alertStoreSetState,
	ALERT_STATE_BODY,
	ALERT_STATE_ICON,
	ALERT_STATE_OPEN,
	ALERT_STATE_COLOR,
} from 'state/Alert'
import AuthModalContainer from 'state/AuthModalContainer'
import SignInContainer from 'state/SignInContainer'
import ProgressContainer from 'state/ProgressContainer'

const signUpStore = new SignUpContainer()
const cardStore = new CardContainer()
const userStore = new UserContainer()
const authModalStore = new AuthModalContainer()
const signInStore = new SignInContainer()
const progressStore = new ProgressContainer()

export {
	Provider,
	Subscribe,
	StateContainer,
	signUpStore,
	cardStore,
	userStore,
	authModalStore,
	signInStore,
	progressStore,
	alertStore,
	alertStoreShow,
	alertStateToggle,
	alertStoreSetState,
	ALERT_STATE_BODY,
	ALERT_STATE_ICON,
	ALERT_STATE_OPEN,
	ALERT_STATE_COLOR,
}
