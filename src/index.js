import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import * as serviceWorker from 'serviceWorker'

// state management
import { Provider } from 'unstated'
import { signUp } from 'state'

// css
import 'assets/css/nucleo-icons.css'
import 'assets/scss/blk-design-system-react.scss?v=1.0.0'
import 'assets/demo/demo.css'
import 'assets/css/temporary-changes.css'

// vies
import Index from 'views/Index'
import LandingPage from 'views/LandingPage'
import SignUpPage from 'views/SignUpPage'
import ProfilePage from 'views/ProfilePage'
import SignInPage from 'views/SignInPage'

ReactDOM.render(
	<Provider to={[signUp]}>
		<BrowserRouter>
			<Switch>
				<Route exact path='/' render={props => <Index {...props} />} />
				<Route path='/landing' render={props => <LandingPage {...props} />} />
				<Route path='/signUp' render={props => <SignUpPage {...props} />} />
				<Route path='/profile' render={props => <ProfilePage {...props} />} />
				<Route path='/signIn' render={props => <SignInPage {...props} />} />
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)

serviceWorker.register()
