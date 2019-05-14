import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'assets/css/nucleo-icons.css'
import 'assets/scss/blk-design-system-react.scss?v=1.0.0'
import 'assets/demo/demo.css'

import Index from 'views/Index.jsx'
import LandingPage from 'views/examples/LandingPage.jsx'
import RegisterPage from 'views/examples/RegisterPage.jsx'
import ProfilePage from 'views/examples/ProfilePage.jsx'
import SigninPage from 'views/Signin/SigninPage'

import * as serviceWorker from 'serviceWorker'

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path='/' render={props => <Index {...props} />} />
			<Route
				path='/landing-page'
				render={props => <LandingPage {...props} />}
			/>
			<Route
				path='/register-page'
				render={props => <RegisterPage {...props} />}
			/>
			<Route
				path='/profile-page'
				render={props => <ProfilePage {...props} />}
			/>
			<Route path='/signin-page' render={props => <SigninPage {...props} />} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
)

serviceWorker.register()
