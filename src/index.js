import React from 'react'
import ReactDOM from 'react-dom'
import App from 'App'
import * as serviceWorker from 'serviceWorker'
import {
	storeModalInitialize,
	storeUserInitialize,
	storeUserSetSigningIn,
} from 'state'
import { goLastRoute } from 'routes'
import { getRedirectResult, onAuthChange } from 'firebaseInit'
import 'assets/css/nucleo-icons.css'
import 'assets/scss/blk-design-system-pro-react.scss?v1.0.0'
import 'assets/demo/demo.css'
import 'assets/demo/react-demo.css'
import 'assets/css/game-senshi.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'slick-carousel/slick/slick-theme.css'

//handle auth change
onAuthChange()

//handle redirect
getRedirectResult()

// check if user data in indexed db, pre-sign in user
storeUserInitialize()
goLastRoute()

// modal for auth
storeModalInitialize(() => {
	storeUserSetSigningIn(true)
})

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.register()
