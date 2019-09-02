import React from 'react'
import {
	Router as ReactRouter,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { LastLocationProvider } from 'react-router-last-location'
import { routes, redirects } from 'routes/routes'
// constants
import {
	ROUTE_PAGE_SIGN_IN,
	ROUTE_PAGE_404,
	ROUTE_TO,
	ROUTE_FROM,
	ROUTE_PATH,
	ROUTE_ACCESSIBILITY,
	ROUTE_ACCESSIBILITY_PRIVATE,
	ROUTE_ACCESSIBILITY_PUBLIC,
	ROUTE_ACCESSIBILITY_FREE,
} from 'routes/constants'

const history = createBrowserHistory()

const Router = props => {
	const { children, pages, isUserSignedIn } = props
	return (
		<ReactRouter history={history}>
			<LastLocationProvider>
				{children}
				<Switch>
					{routes.map(route => {
						const {
							[ROUTE_PATH]: path,
							[ROUTE_ACCESSIBILITY]: accessibility,
						} = route
						const Page = pages[path]
						return (
							<Route
								key={path}
								path={path}
								exact
								render={props => {
									const isAccessible =
										accessibility === ROUTE_ACCESSIBILITY_FREE ||
										(accessibility === ROUTE_ACCESSIBILITY_PRIVATE &&
											isUserSignedIn) ||
										(accessibility === ROUTE_ACCESSIBILITY_PUBLIC &&
											!isUserSignedIn)
									return isAccessible ? (
										<Page {...props} />
									) : (
										<Redirect from={path} to={ROUTE_PAGE_SIGN_IN} />
									)
								}}
							/>
						)
					})}
					{// Redirect must be under Route to serve as "default" case
					redirects.map(redirect => {
						const { [ROUTE_FROM]: from, [ROUTE_TO]: to } = redirect
						return <Redirect key={to} from={from} to={to} exact />
					})}
					<Route
						path='/'
						render={props => {
							const Page404 = pages[ROUTE_PAGE_404]
							return <Page404 {...props} />
						}}
					/>
				</Switch>
			</LastLocationProvider>
		</ReactRouter>
	)
}

export { Router, history }
