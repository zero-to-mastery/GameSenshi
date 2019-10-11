import React from 'react'
import ReactDOM from 'react-dom'
import App from 'App'
import * as serviceWorker from 'serviceWorker'
// state management
import {
	storeAuthModalInitialize,
	storeUserInitialize,
	storeAlertShow,
} from 'state'
import { goLastRoute } from 'routes'
// Initialize firebase
import 'firebaseInit'
// styles
import 'assets/css/nucleo-icons.css'
import 'assets/scss/blk-design-system-pro-react.scss?v1.0.0'
import 'assets/demo/demo.css'
import 'assets/demo/react-demo.css'
import 'assets/css/game-senshi.css'

// check if user data in indexed db, pre-sign in user
storeUserInitialize()
goLastRoute()

// modal for auth
storeAuthModalInitialize(() => {
	storeAlertShow(
		'Connection timeout, please sign in manually',
		'danger',
		'tim-icons icon-alert-circle-exc'
	)
})

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.register()

// test test
