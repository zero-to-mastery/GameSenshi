import React, { useState, useEffect, useCallback } from 'react'
import { stopUndefined } from 'utils'
import { tempClient, initApollo, setClient } from 'apolloInit'
import { ApolloProvider } from 'react-apollo'
import { Router } from 'routes'
import ReactResizeDetector from 'react-resize-detector'
import {
	ROUTE_PAGE_INDEX,
	ROUTE_PAGE_SEARCHED,
	ROUTE_PAGE_PROFILE,
	ROUTE_PAGE_SIGN_UP,
	ROUTE_PAGE_SIGN_IN,
	ROUTE_PAGE_POLICY_COMMON,
	ROUTE_PAGE_SETTINGS_COMMON,
	ROUTE_PAGE_PASSWORD_RESET,
	ROUTE_PAGE_404,
	ROUTE_PAGE_CHECKOUT,
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
	ProfilePage,
	SignInPage,
	SignUpPage,
	PasswordResetPage,
	Error404Page,
	FormSignInPropedDefaultStoreSignIn,
	ModalCommonStoreModalPropedAuth,
	NavbarIndexStoreAlert,
	AlertCommonStoreAlert,
	PoliciesPage,
	CheckoutPage,
	Footer,
	WrapperPropedApp,
} = stopUndefined(Exports)

const MapRoutesToPages = {
	[ROUTE_PAGE_INDEX]: IndexPage,
	[ROUTE_PAGE_SEARCHED]: SearchedPage,
	[ROUTE_PAGE_PROFILE]: ProfilePage,
	[ROUTE_PAGE_SIGN_UP]: SignUpPage,
	[ROUTE_PAGE_SIGN_IN]: SignInPage,
	[ROUTE_PAGE_POLICY_COMMON]: PoliciesPage,
	[ROUTE_PAGE_CHECKOUT]: CheckoutPage,
	[ROUTE_PAGE_SETTINGS_COMMON]: SettingsPage,
	[ROUTE_PAGE_PASSWORD_RESET]: PasswordResetPage,
	[ROUTE_PAGE_404]: Error404Page,
}

const App = () => {
	const [apolloClient, setApolloClient] = useState(tempClient)
	const [offsetHeight, setOffsetHeight] = useState(80)

	useEffect(() => {
		const initApolloClient = async () => {
			const apolloClient = await initApollo()
			setApolloClient(apolloClient)
			setClient(apolloClient)
		}
		initApolloClient()
	}, [])

	const onResize = useCallback((width, height) => {
		setOffsetHeight(height)
	}, [])

	const Wrapper = useCallback(
		children => (
			<WrapperPropedApp offsetHeight={offsetHeight}>
				<div className='w-100' style={{ height: offsetHeight }} />
				{children}
			</WrapperPropedApp>
		),
		[offsetHeight]
	)

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
								wrapper={WrapperPropedApp}
								header={
									<>
										<NavbarIndexStoreAlert>
											<ReactResizeDetector handleHeight onResize={onResize} />
											<AlertCommonStoreAlert />
										</NavbarIndexStoreAlert>
										<FormSignInPropedDefaultStoreSignIn modal passwordOnly />
										<ModalCommonStoreModalPropedAuth />
									</>
								}
								footer={<Footer />}
							></Router>
						)
					}}
				</Subscribe>
			</Provider>
		</ApolloProvider>
	)
}

export default App
