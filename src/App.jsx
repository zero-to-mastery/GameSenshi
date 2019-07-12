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

// pages
import {
	IndexPage,
	ProfilePage,
	SettingsPage,
	SignInPage,
	SignUpPage,
	PasswordResetPage,
} from 'views'

const routes = [
	{ page: ProfilePage, path: '/profile', guarded: true },
	{ page: SettingsPage, path: '/settings', guarded: true },
	{ page: SignUpPage, path: '/signUp', guarded: false },
	{ page: SignInPage, path: '/signIn', guarded: false },
	{ page: PasswordResetPage, path: '/resetPassword', guarded: false },
]

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
							{routes.map((route, i) => {
								const { page: Page, path, guarded } = route
								return (
									<Route
										key={i}
										path={path}
										render={props =>
											(guarded && userStore.state[USER_SIGNED_IN]) ||
											(!guarded && !userStore.state[USER_SIGNED_IN]) ? (
												<Page {...props} />
											) : (
												<Redirect from={path} to='/index' />
											)
										}
									/>
								)
							})}
							<Redirect from='/' to='/index' />
						</Switch>
					</LastLocationProvider>
				</BrowserRouter>
			</Provider>
		</ApolloProvider>
	)
}

export default App
