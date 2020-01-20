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
} from 'state'
import { history } from 'routes'
import { goLastRoute } from 'routes'
import { getRedirectResult } from 'firebaseInit'
import { onAuthStateChange } from 'onAuthStateChange'
import 'assets/css/nucleo-icons.css'
import 'assets/scss/blk-design-system-pro-react.scss?v1.0.0'
import 'assets/demo/demo.css'
import 'assets/demo/react-demo.css'
import 'assets/css/game-senshi.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'slick-carousel/slick/slick-theme.css'

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
