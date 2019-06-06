import AuthContainer from 'state/AuthContainer'
import AlertContainer from 'state/AlertContainer'
import SocialAuthModalContainer from 'state/SocialAuthModalContainer'

import { Subscribe } from 'unstated'

const authStore = new AuthContainer()
const alertStore = new AlertContainer()
const modalStore = new SocialAuthModalContainer()

export { authStore, alertStore, modalStore, Subscribe }
