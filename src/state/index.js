import { Subscribe, Provider } from 'unstated'

import SignUpContainer from 'state/SignUpContainer'
import CardContainer from 'state/CardContainer'
import UserContainer from 'state/UserContainer'
import {
	alertStore,
	AlertContainer,
	alertStoreShow,
	alertStateToggle,
	alertStoreSetState,
	ALERT_STATE_BODY,
	ALERT_STATE_OPEN,
	ALERT_STATE_COLOR,
	ALERT_STATE_ICON,
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
	signUpStore,
	cardStore,
	userStore,
	authModalStore,
	signInStore,
	progressStore,
	alertStore,
	AlertContainer,
	alertStoreShow,
	alertStateToggle,
	alertStoreSetState,
	ALERT_STATE_BODY,
	ALERT_STATE_OPEN,
	ALERT_STATE_COLOR,
	ALERT_STATE_ICON,
}
