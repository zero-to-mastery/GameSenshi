import AuthContainer from 'state/AuthContainer'
import UserContainer from 'state/UserContainer'
import AlertContainer from 'state/AlertContainer'
import SocialAuthModalContainer from 'state/SocialAuthModalContainer'

import { Subscribe, Provider } from 'unstated'

const authStore = new AuthContainer()
const userStore = new UserContainer()
const alertStore = new AlertContainer()
const socialAuthModalStore = new SocialAuthModalContainer()

export {
	authStore,
	alertStore,
	userStore,
	socialAuthModalStore,
	Subscribe,
	Provider,
}
