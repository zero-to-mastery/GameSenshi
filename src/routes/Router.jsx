import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { LastLocationProvider } from 'react-router-last-location'
import routes from 'routes/routes'
// state management
import { userStore } from 'state'
// constants
import {
	USER_SIGNED_IN,
	ROUTE_PAGE_INDEX,
	ROUTE_PAGE,
	ROUTE_PATH,
	ROUTE_ACCESSIBILITY,
	ROUTE_ACCESSIBILITY_PRIVATE,
	ROUTE_ACCESSIBILITY_PUBLIC,
	ROUTE_ACCESSIBILITY_FREE,
} from 'constantValues'

const Router = props => {
	return (
		<BrowserRouter>
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
								render={props =>
									accessibility === ROUTE_ACCESSIBILITY_FREE ||
									(accessibility === ROUTE_ACCESSIBILITY_PRIVATE &&
										userStore.state[USER_SIGNED_IN]) ||
									(accessibility === ROUTE_ACCESSIBILITY_PUBLIC &&
										!userStore.state[USER_SIGNED_IN]) ? (
										<Page {...props} />
									) : (
										<Redirect from={path} to={ROUTE_PAGE_INDEX} />
									)
								}
							/>
						)
					})}
					<Redirect from='/' to={ROUTE_PAGE_INDEX} />
				</Switch>
			</LastLocationProvider>
		</BrowserRouter>
	)
}

export default Router
