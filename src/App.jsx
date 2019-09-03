import React, { useState, useEffect } from 'react'
import { stopUndefined } from 'utils'
// Apollo
import { tempClient, initApollo, setClient } from 'apolloInit'
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
	ROUTE_PAGE_404,
} from 'routes'
// state management
import {
	Provider,
	Subscribe,
	userStore,
	USER_SIGNED_IN,
	STATE,
	STORE_USER_STATE_IS_SOFT_SIGNED_IN,
} from 'state'
//core components
import { ExportViews } from 'componentViews'

const {
	SettingsPage,
	IndexPage,
	ProfilePage,
	SignInPage,
	SignUpPage,
	PasswordResetPage,
	Error404Page,
	FormSignInPropedDefaultStoreSignIn,
	ModalAuthStoreAuthModal,
} = stopUndefined(ExportViews)

const MapRoutesToPages = {
	[ROUTE_PAGE_INDEX]: IndexPage,
	[ROUTE_PAGE_PROFILE]: ProfilePage,
	[ROUTE_PAGE_SIGN_UP]: SignUpPage,
	[ROUTE_PAGE_SIGN_IN]: SignInPage,
	[ROUTE_PAGE_SETTINGS_COMMON]: SettingsPage,
	[ROUTE_PAGE_PASSWORD_RESET]: PasswordResetPage,
	[ROUTE_PAGE_404]: Error404Page,
}

const App = props => {
	const [apolloClient, setApolloClient] = useState(tempClient)

	useEffect(() => {
		const initApolloClient = async () => {
			const apolloClient = await initApollo()
			setApolloClient(apolloClient)
			setClient(apolloClient)
		}
		initApolloClient()
	}, [])

	return (
		<ApolloProvider client={apolloClient}>
			<Provider>
				<Subscribe to={[userStore]}>
					{userStore => {
						const {
							[STATE]: {
								[USER_SIGNED_IN]: isUserSignedIn,
								[STORE_USER_STATE_IS_SOFT_SIGNED_IN]: isUserSoftSignedIn,
							},
						} = userStore
						return (
							<Router
								isUserSignedIn={isUserSignedIn || isUserSoftSignedIn}
								pages={MapRoutesToPages}>
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
