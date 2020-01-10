import React, { useState, useEffect } from 'react'
import { stopUndefined } from 'utils'
import { tempClient, initApollo, setClient } from 'apolloInit'
import { ApolloProvider } from 'react-apollo'
import { Router } from 'routes'
import {
	ROUTE_PAGE_INDEX,
	ROUTE_PAGE_SEARCHED,
	ROUTE_PAGE_HELP,
	ROUTE_PAGE_PROFILE,
	ROUTE_PAGE_PROFILE_ID,
	ROUTE_PAGE_SIGN_UP,
	ROUTE_PAGE_SIGN_IN,
	ROUTE_PAGE_POLICY_COMMON,
	ROUTE_PAGE_SETTINGS_COMMON,
	ROUTE_PAGE_PASSWORD_RESET,
	ROUTE_PAGE_404,
	ROUTE_PAGE_CHECKOUT,
	ROUTE_PAGE_CHAT,
} from 'routes'
import {
	Provider,
	Subscribe,
	storeUser,
	STORE_USER_STATE_SIGNED_IN,
	STATE,
	STORE_USER_STATE_SIGNING_IN,
} from 'state'
import { Exports } from 'componentViews'

const {
	SettingsPage,
	IndexPage,
	SearchedPage,
	HelpPage,
	ProfilePage,
	SignInPage,
	SignUpPage,
	PasswordResetPage,
	PageError404,
	FormSignInStoreSignInPropedApp,
	ModalStoreModalPropedAuth,
	PoliciesPage,
	CheckoutPage,
	Footer,
	NavbarIndexStoreAlertPropApp,
	ChatPage,
} = stopUndefined(Exports)

const MapRoutesToPages = {
	[ROUTE_PAGE_INDEX]: IndexPage,
	[ROUTE_PAGE_SEARCHED]: SearchedPage,
	[ROUTE_PAGE_HELP]: HelpPage,
	[ROUTE_PAGE_PROFILE]: ProfilePage,
	[ROUTE_PAGE_PROFILE_ID]: ProfilePage,
	[ROUTE_PAGE_SIGN_UP]: SignUpPage,
	[ROUTE_PAGE_SIGN_IN]: SignInPage,
	[ROUTE_PAGE_POLICY_COMMON]: PoliciesPage,
	[ROUTE_PAGE_CHECKOUT]: CheckoutPage,
	[ROUTE_PAGE_SETTINGS_COMMON]: SettingsPage,
	[ROUTE_PAGE_CHAT]: ChatPage,
	[ROUTE_PAGE_PASSWORD_RESET]: PasswordResetPage,
	[ROUTE_PAGE_404]: PageError404,
}

const App = () => {
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
				<Subscribe to={[storeUser]}>
					{storeUser => {
						const {
							[STATE]: {
								[STORE_USER_STATE_SIGNED_IN]: isUserSignedIn,
								[STORE_USER_STATE_SIGNING_IN]: isUserSigningIn,
							},
						} = storeUser
						return (
							<Router
								isUserSignedIn={isUserSignedIn || isUserSigningIn}
								pages={MapRoutesToPages}
								header={
									<>
										<NavbarIndexStoreAlertPropApp />
										<FormSignInStoreSignInPropedApp />
										<ModalStoreModalPropedAuth />
									</>
								}
								footer={<Footer />}
							/>
						)
					}}
				</Subscribe>
			</Provider>
		</ApolloProvider>
	)
}

export default App
