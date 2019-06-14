import { Subscribe, Provider } from 'unstated'

import AuthContainer from 'state/AuthContainer'
import UserContainer from 'state/UserContainer'
import AlertContainer from 'state/AlertContainer'
import SocialAuthModalContainer from 'state/SocialAuthModalContainer'
import SignInModalContainer from 'state/SignInModalContainer'

const authStore = new AuthContainer()
const userStore = new UserContainer()
const alertStore = new AlertContainer()
const socialAuthModalStore = new SocialAuthModalContainer()
const signInModalStore = new SignInModalContainer()

export {
	Subscribe,
	Provider,
	authStore,
	alertStore,
	userStore,
	socialAuthModalStore,
	signInModalStore,
}
