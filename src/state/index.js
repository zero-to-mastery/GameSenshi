import AuthContainer from 'state/AuthContainer'
import AlertContainer from 'state/AlertContainer'
import SocialAuthSignUpModalContainer from 'state/SocialAuthSignUpModalContainer'

import { Subscribe } from 'unstated'

const authStore = new AuthContainer()
const alertStore = new AlertContainer()
const modalStore = new SocialAuthSignUpModalContainer()

export { authStore, alertStore, modalStore, Subscribe }
