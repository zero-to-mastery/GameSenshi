import AuthContainer from 'state/AuthContainer'
import AlertContainer from 'state/AlertContainer'

const authStore = new AuthContainer()
const alertStore = new AlertContainer()

export { authStore, alertStore }
