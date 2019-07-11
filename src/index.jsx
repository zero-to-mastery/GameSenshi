import React from 'react'
import ReactDOM from 'react-dom'
import App from 'App'
import * as serviceWorker from 'serviceWorker'
// state management
import { authModalStore, userStore } from 'state'

// Initialize firebase
import 'firebaseInit'

// check if user data in indexed db, pre-sign in user
userStore.initialize()

// modal for auth
authModalStore.initialize()

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.register()
