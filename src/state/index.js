import { Subscribe, Provider } from 'unstated'

import AuthContainer from 'state/AuthContainer'
import CardContainer from 'state/CardContainer'
import UserContainer from 'state/UserContainer'
import AlertContainer from 'state/AlertContainer'
import ModalContainer from 'state/ModalContainer'
import SignInContainer from 'state/SignInContainer'

const authStore = new AuthContainer()
const cardStore = new CardContainer()
const userStore = new UserContainer()
const alertStore = new AlertContainer()
const modalStore = new ModalContainer()
const signInStore = new SignInContainer()

export {
	Provider,
	Subscribe,
	authStore,
	cardStore,
	userStore,
	alertStore,
	modalStore,
	signInStore,
}
