import React, { memo } from 'react'
import {
	Router as ReactRouter,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom'
import { LastLocationProvider } from 'react-router-last-location'
import { stopUndefined } from 'utils'

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
	ROUTE_PAGE_PROFILE_ID,
	ROUTE_PAGE_SIGN_UP,
	ROUTE_PAGE_POLICY_COMMON,
	ROUTE_PAGE_CHECKOUT,
	ROUTE_PAGE_SETTINGS_COMMON,
	ROUTE_PAGE_CHAT,
	ROUTE_PAGE_PASSWORD_RESET,
	history,
	ROUTES,
	REDIRECTS,
} from 'routes'

import { PageProfile } from './PageProfile'
import { PageSettings } from './PageSettings'
import { SignInPage } from './PageSignIn'
import { PageSignUp } from './PageSignUp'
import { PagePasswordReset } from './PagePasswordReset'
import { PagePolicies } from './PagePolicies'
import { CheckoutPage } from './CheckoutPage'
import { IndexPage } from './IndexPage'
import { PageFilter } from './PageFilter'
import { HelpPage } from './HelpPage'
import { PageChat } from './PageChat'

import { Exports } from 'componentpMultiOrganisms'

const {
	PageError,
	FormSignInStoreSignInPropedApp,
	ModalStoreModalPropedAuth,
	Footer,
	NavbarIndexStoreAlertPropApp,
} = stopUndefined(Exports)

const MapRoutesToPages = {
	[ROUTE_PAGE_INDEX]: IndexPage,
	[ROUTE_PAGE_FILTER]: PageFilter,
	[ROUTE_PAGE_HELP]: HelpPage,
	[ROUTE_PAGE_PROFILE]: PageProfile,
	[ROUTE_PAGE_PROFILE_ID]: PageProfile,
	[ROUTE_PAGE_SIGN_UP]: PageSignUp,
	[ROUTE_PAGE_SIGN_IN]: SignInPage,
	[ROUTE_PAGE_POLICY_COMMON]: PagePolicies,
	[ROUTE_PAGE_CHECKOUT]: CheckoutPage,
	[ROUTE_PAGE_SETTINGS_COMMON]: PageSettings,
	[ROUTE_PAGE_CHAT]: PageChat,
	[ROUTE_PAGE_PASSWORD_RESET]: PagePasswordReset,
}

const Router = memo(props => {
	const { isUserSignedIn } = props
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
											return <Redirect from={path} to={ROUTE_PAGE_SIGN_IN} />
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
							return <PageError {...props} />
						}}
					/>
				</Switch>
				<Footer />
			</LastLocationProvider>
		</ReactRouter>
	)
})

export { Router }
