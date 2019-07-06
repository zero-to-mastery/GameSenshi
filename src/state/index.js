import { Subscribe, Provider } from 'unstated'

import SignUpContainer from 'state/SignUpContainer'
import CardContainer from 'state/CardContainer'
import UserContainer from 'state/UserContainer'
import AlertContainer from 'state/AlertContainer'
import AuthModalContainer from 'state/AuthModalContainer'
import SignInContainer from 'state/SignInContainer'

const signUpStore = new SignUpContainer()
const cardStore = new CardContainer()
const userStore = new UserContainer()
const alertStore = new AlertContainer()
const authModalStore = new AuthModalContainer()
const signInStore = new SignInContainer()

export {
	Provider,
	Subscribe,
	signUpStore,
	cardStore,
	userStore,
	alertStore,
	authModalStore,
	signInStore,
}
