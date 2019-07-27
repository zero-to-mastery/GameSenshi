import React, { useState, useEffect } from 'react'
// Apollo
import { tempClient, initApollo } from 'apolloInit'
import { ApolloProvider } from 'react-apollo'
// routing
import { Router } from 'routes'
import {
	ROUTE_PAGE_INDEX,
	ROUTE_PAGE_PROFILE,
	ROUTE_PAGE_SIGN_UP,
	ROUTE_PAGE_SIGN_IN,
	ROUTE_PAGE_SETTINGS_COMMON,
	ROUTE_PAGE_PASSWORD_RESET,
} from 'routes'
// state management
import {
	Provider,
	Subscribe,
	storeRoute,
	STATE,
	STORE_ROUTE_STATE_IS_SIGNED_IN,
} from 'state'
//modal
import { FormSignInPropedDefaultStoreSignIn } from 'componentOrganisms'
import { ModalAuthStoreAuthModal } from 'componentMolecules'
// pages
import {
	IndexPage,
	ProfilePage,
	SettingsPage,
	SignInPage,
	SignUpPage,
	PasswordResetPage,
} from 'componentPages'

const MapRoutesToPages = {
	[ROUTE_PAGE_INDEX]: IndexPage,
	[ROUTE_PAGE_PROFILE]: ProfilePage,
	[ROUTE_PAGE_SIGN_UP]: SignUpPage,
	[ROUTE_PAGE_SIGN_IN]: SignInPage,
	[ROUTE_PAGE_SETTINGS_COMMON]: SettingsPage,
	[ROUTE_PAGE_PASSWORD_RESET]: PasswordResetPage,
}

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
				<Subscribe to={[storeRoute]}>
					{storeRoute => {
						const {
							[STATE]: { [STORE_ROUTE_STATE_IS_SIGNED_IN]: isUserSignedIn },
						} = storeRoute
						return (
							<Router isUserSignedIn={isUserSignedIn} pages={MapRoutesToPages}>
								<FormSignInPropedDefaultStoreSignIn modal passwordOnly />
								<ModalAuthStoreAuthModal />
							</Router>
						)
					}}
				</Subscribe>
			</Provider>
		</ApolloProvider>
	)
}

export default App
