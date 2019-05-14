import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'assets/css/nucleo-icons.css'
import 'assets/scss/blk-design-system-react.scss?v=1.0.0'
import 'assets/demo/demo.css'

import Index from 'views/Index'
import LandingPage from 'views/LandingPage'
import SignUpPage from 'views/SignUpPage'
import ProfilePage from 'views/ProfilePage'
import SignInPage from 'views/SignInPage'

import * as serviceWorker from 'serviceWorker'

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path='/' render={props => <Index {...props} />} />
			<Route
				path='/landing-page'
				render={props => <LandingPage {...props} />}
			/>
			<Route path='/signUp-page' render={props => <SignUpPage {...props} />} />
			<Route
				path='/profile-page'
				render={props => <ProfilePage {...props} />}
			/>
			<Route path='/signIn-page' render={props => <SignInPage {...props} />} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
)

serviceWorker.register()
