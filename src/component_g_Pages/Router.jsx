import React, { memo, useCallback } from 'react'
import {
	Router as ReactRouter,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom'
import { LastLocationProvider } from 'react-router-last-location'
import { stopUndefined } from '1_utils'
import { storeSignInShow } from 'state'
import { onLogin } from 'component_0_Utils'
import {
	ROUTE_PAGE_INDEX,
	ROUTE_PAGE_SIGN_IN,
	ROUTE_TO,
	ROUTE_FROM,
	ROUTE_PATH,
	ROUTE_ACCESSIBILITY,
	ROUTE_ACCESSIBILITY_PRIVATE,
	ROUTE_ACCESSIBILITY_PUBLIC,
	ROUTE_ACCESSIBILITY_FREE,
	ROUTE_PAGE_FILTER,
	ROUTE_PAGE_HELP,
	ROUTE_PAGE_PROFILE,
	ROUTE_PAGE_PROFILE_COMMON,
	ROUTE_PAGE_SIGN_UP,
	ROUTE_PAGE_POLICY_COMMON,
	ROUTE_PAGE_CHECKOUT,
	ROUTE_PAGE_SETTINGS_COMMON,
	ROUTE_PAGE_CHAT,
	ROUTE_PAGE_PASSWORD_RESET,
	history,
	ROUTES,
	REDIRECTS,
	useLastLocation,
} from '2_routes'

import { PageProfileStoreUser } from './PageProfile'
import { PageSettings } from './PageSettings'
import { SignInPage } from './PageSignIn'
import { PageSignUp } from './PageSignUp'
import { PagePasswordReset } from './PagePasswordReset'
import { PagePolicies } from './PagePolicies'
import { PageCheckout } from './PageCheckout'
import { PageIndex } from './PageIndex'
import { PageFilter } from './PageFilter'
import { PageHelp } from './PageHelp'
import { PageChat } from './PageChat'

import { Exports } from 'component_f_MultiOrganisms'

const {
	PageError,
	PAGE_ERROR_CODE_UNAUTHORIZED,
	PAGE_ERROR_CODE_NOT_FOUND,
	FormSignInStoreSignInPropedApp,
	ModalStoreModalPropedAuth,
	Footer,
	NavbarIndexStoreAlertPropApp,
} = stopUndefined(Exports)

const MapRoutesToPages = {
	[ROUTE_PAGE_INDEX]: PageIndex,
	[ROUTE_PAGE_FILTER]: PageFilter,
	[ROUTE_PAGE_HELP]: PageHelp,
	[ROUTE_PAGE_PROFILE]: PageProfileStoreUser,
	[ROUTE_PAGE_PROFILE_COMMON]: PageProfileStoreUser,
	[ROUTE_PAGE_SIGN_UP]: PageSignUp,
	[ROUTE_PAGE_SIGN_IN]: SignInPage,
	[ROUTE_PAGE_POLICY_COMMON]: PagePolicies,
	[ROUTE_PAGE_CHECKOUT]: PageCheckout,
	[ROUTE_PAGE_SETTINGS_COMMON]: PageSettings,
	[ROUTE_PAGE_CHAT]: PageChat,
	[ROUTE_PAGE_PASSWORD_RESET]: PagePasswordReset,
}

const Router = memo(props => {
	const { isUserSignedIn } = props
	const lastLocation = useLastLocation()
	const onLogin_ = useCallback(() => {
		onLogin(lastLocation)
	}, [lastLocation])

	return (
		<ReactRouter history={history}>
			<LastLocationProvider>
				<NavbarIndexStoreAlertPropApp />
				<FormSignInStoreSignInPropedApp />
				<ModalStoreModalPropedAuth />
				<Switch>
					{ROUTES.map(route => {
						const {
							[ROUTE_PATH]: path,
							[ROUTE_ACCESSIBILITY]: accessibility,
						} = route
						const Page = MapRoutesToPages[path]
						return (
							<Route
								key={path}
								path={path}
								exact
								render={props => {
									if (accessibility === ROUTE_ACCESSIBILITY_FREE) {
										return <Page {...props} />
									} else if (isUserSignedIn) {
										if (accessibility === ROUTE_ACCESSIBILITY_PRIVATE) {
											return <Page {...props} />
										} else {
											return <Redirect from={path} to={ROUTE_PAGE_INDEX} />
										}
									} else {
										if (accessibility === ROUTE_ACCESSIBILITY_PUBLIC) {
											return <Page {...props} />
										} else {
											storeSignInShow(null, onLogin_)
											return (
												<PageError
													code={PAGE_ERROR_CODE_UNAUTHORIZED}
													{...props}
												/>
											)
										}
									}
								}}
							/>
						)
					})}
					{REDIRECTS.map(redirect => {
						const { [ROUTE_FROM]: from, [ROUTE_TO]: to } = redirect
						return <Redirect key={to} from={from} to={to} exact />
					})}
					<Route
						path='/'
						render={props => {
							return <PageError code={PAGE_ERROR_CODE_NOT_FOUND} {...props} />
						}}
					/>
				</Switch>
				<Footer />
			</LastLocationProvider>
		</ReactRouter>
	)
})

export { Router }
