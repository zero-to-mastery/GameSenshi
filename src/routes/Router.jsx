import React from 'react'
import {
	Router as ReactRouter,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom'
import { LastLocationProvider } from 'react-router-last-location'
import { routes, redirects, history } from 'routes/routes'
// state management
import { userStore } from 'state'
// constants
import {
	USER_SIGNED_IN,
	ROUTE_PAGE_INDEX,
	ROUTE_TO,
	ROUTE_FROM,
	ROUTE_PAGE,
	ROUTE_PATH,
	ROUTE_ACCESSIBILITY,
	ROUTE_ACCESSIBILITY_PRIVATE,
	ROUTE_ACCESSIBILITY_PUBLIC,
	ROUTE_ACCESSIBILITY_FREE,
} from 'constantValues'

const Router = props => {
	return (
		<ReactRouter history={history}>
			<LastLocationProvider>
				<Switch>
					{routes.map((route, i) => {
						const {
							[ROUTE_PAGE]: Page,
							[ROUTE_PATH]: path,
							[ROUTE_ACCESSIBILITY]: accessibility,
						} = route
						return (
							<Route
								key={i}
								path={path}
								render={props => {
									const isAccessible =
										accessibility === ROUTE_ACCESSIBILITY_FREE ||
										(accessibility === ROUTE_ACCESSIBILITY_PRIVATE &&
											userStore.state[USER_SIGNED_IN]) ||
										(accessibility === ROUTE_ACCESSIBILITY_PUBLIC &&
											!userStore.state[USER_SIGNED_IN])

									return isAccessible ? (
										<Page {...props} />
									) : (
										<Redirect from={path} to={ROUTE_PAGE_INDEX} />
									)
								}}
							/>
						)
					})}
					{// Redirect must be under Route to serve as "default" case
					redirects.map((redirect, i) => {
						const { [ROUTE_FROM]: from, [ROUTE_TO]: to } = redirect
						return <Redirect key={i} from={from} to={to} />
					})}
				</Switch>
			</LastLocationProvider>
		</ReactRouter>
	)
}

export default Router
