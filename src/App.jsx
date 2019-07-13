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
import {
	USER_SIGNED_IN,
	ROUTE_INDEX,
	ROUTE_PROFILE,
	ROUTE_SIGN_UP,
	ROUTE_SIGN_IN,
	ROUTE_SETTINGS,
	ROUTE_PASSWORD_RESET,
} from 'constantValues'

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
	{ page: ProfilePage, path: ROUTE_PROFILE, guarded: true },
	{ page: SettingsPage, path: ROUTE_SETTINGS, guarded: true },
	{ page: SignUpPage, path: ROUTE_SIGN_UP, guarded: false },
	{ page: SignInPage, path: ROUTE_SIGN_IN, guarded: false },
	{ page: PasswordResetPage, path: ROUTE_PASSWORD_RESET, guarded: false },
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
							<Route
								path={ROUTE_INDEX}
								render={props => <IndexPage {...props} />}
							/>
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
												<Redirect from={path} to={ROUTE_INDEX} />
											)
										}
									/>
								)
							})}
							<Redirect from='/' to={ROUTE_INDEX} />
						</Switch>
					</LastLocationProvider>
				</BrowserRouter>
			</Provider>
		</ApolloProvider>
	)
}

export default App
