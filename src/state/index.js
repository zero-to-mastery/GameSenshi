import { Subscribe, Provider } from 'unstated'

import AuthContainer from 'state/AuthContainer'
import CardContainer from 'state/CardContainer'
import UserContainer from 'state/UserContainer'
import AlertContainer from 'state/AlertContainer'
import AuthModalContainer from 'state/AuthModalContainer'
import SignInModalContainer from 'state/SignInModalContainer'

const authStore = new AuthContainer()
const cardStore = new CardContainer()
const userStore = new UserContainer()
const alertStore = new AlertContainer()
const authModalStore = new AuthModalContainer()
const signInModalStore = new SignInModalContainer()

export {
	Provider,
	Subscribe,
	authStore,
	cardStore,
	userStore,
	alertStore,
	authModalStore,
	signInModalStore,
}
