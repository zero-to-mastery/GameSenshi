import AuthContainer from 'state/AuthContainer'
import AlertContainer from 'state/AlertContainer'
import { Subscribe } from 'unstated'

const authStore = new AuthContainer()
const alertStore = new AlertContainer()

export { authStore, alertStore, Subscribe }
