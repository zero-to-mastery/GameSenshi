import React from 'react'
import ReactDOM from 'react-dom'
import App from 'App'
import * as serviceWorker from 'serviceWorker'
import {
	storeSignInClose,
	storeModalInitialize,
	storeUserInitialize,
	storeUserSetSigningIn,
	STORE_USER_STATE_SIGNING_IN,
} from '2_state'
import { history } from '2_routes'
import { goLastRoute } from '2_routes'
import { onAuthStateChange, getRedirectResult } from '3_onAppEvent'
import '0_assets/css/nucleo-icons.css'
import '0_assets/scss/blk-design-system-pro-react.scss?v1.0.0'
import '0_assets/demo/demo.css'
import '0_assets/demo/react-demo.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'slick-carousel/slick/slick-theme.css'
import '0_assets/css/App.css'

//handle auth change
onAuthStateChange()

//handle redirect
getRedirectResult()

// check if user data in local storage, pre-sign in user
storeUserInitialize()
goLastRoute()

// modal for auth
storeModalInitialize(items => {
	const { [STORE_USER_STATE_SIGNING_IN]: signingIn } = items
	if (signingIn) {
		storeUserSetSigningIn(true)
	}
})

history.listen(() => {
	// close sign in modal whenever route change
	storeSignInClose()
})

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.register()
