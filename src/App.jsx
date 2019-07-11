import React, { useState, useEffect } from 'react'
// Apollo
import { tempClient, initApollo } from 'apolloInit'
import { ApolloProvider } from 'react-apollo'

// routing
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { LastLocationProvider } from 'react-router-last-location'

// state management
import { Provider, userStore } from 'state'

// constants
import { USER_SIGNED_IN } from 'constantValues'

// styles
import 'assets/css/nucleo-icons.css'
import 'assets/scss/blk-design-system-pro-react.scss?v1.0.0'
import 'assets/demo/demo.css'
import 'assets/demo/react-demo.css'
import 'assets/css/game-senshi.css'

// pages pages
import {
	IndexPage,
	ProfilePage,
	SettingsPage,
	SignInPage,
	SignUpPage,
	PasswordResetPage,
} from 'views'

const App = props => {
	const [apolloClient, setApolloClient] = useState(tempClient)

	useEffect(() => {
		const initApolloClient = async () => {
			const apolloClient = await initApollo()
			setApolloClient(apolloClient)
		}
		initApolloClient()
	}, [])

	return (
		<ApolloProvider client={apolloClient}>
			<Provider>
				<BrowserRouter>
					<LastLocationProvider>
						<Switch>
							<Route path='/index' render={props => <IndexPage {...props} />} />
							<Route
								path='/profile'
								render={props => <ProfilePage {...props} />}
							/>
							<Route
								path='/settings'
								render={props =>
									userStore.state[USER_SIGNED_IN] ? (
										<SettingsPage {...props} />
									) : (
										<Redirect from='/settings' to='/index' />
									)
								}
							/>
							<Route
								path='/signUp'
								render={props =>
									userStore.state[USER_SIGNED_IN] ? (
										<Redirect from='/signUp' to='/index' />
									) : (
										<SignUpPage {...props} />
									)
								}
							/>
							<Route
								path='/signIn'
								render={props =>
									userStore.state[USER_SIGNED_IN] ? (
										<Redirect from='/signIn' to='/index' />
									) : (
										<SignInPage {...props} />
									)
								}
							/>
							<Route
								path='/resetPassword'
								render={props =>
									userStore.state[USER_SIGNED_IN] ? (
										<Redirect from='/resetPassword' to='/index' />
									) : (
										<PasswordResetPage {...props} />
									)
								}
							/>
							<Redirect from='/' to='/index' />
						</Switch>
					</LastLocationProvider>
				</BrowserRouter>
			</Provider>
		</ApolloProvider>
	)
}

export default App
