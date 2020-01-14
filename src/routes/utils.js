import {
	ROUTES,
	ROUTE_PATH,
	ROUTE_ACCESSIBILITY,
	ROUTE_ACCESSIBILITY_PUBLIC,
	ROUTE_ACCESSIBILITY_PRIVATE,
	ROUTE_PAGE_INDEX,
	history,
} from 'routes/constants'

const LAST_ROUTE = 'lastRoute'
const LAST_ROUTE_REAL = 'lastRouteReal'

const setLastRoute = pathname => {
	localStorage.setItem(LAST_ROUTE, pathname)
	localStorage.setItem(LAST_ROUTE_REAL, history.location.pathname)
}

const goLastRoute = () => {
	const lastRoute = localStorage.getItem(LAST_ROUTE)
	if (lastRoute) {
		history.replace(lastRoute)
		localStorage.removeItem(LAST_ROUTE)
		localStorage.removeItem(LAST_ROUTE_REAL)
	}
}

const isLocationPublic = lastLocation => {
	const isCurrentLocationPublic = ROUTES.some(route => {
		return (
			route[ROUTE_ACCESSIBILITY] === ROUTE_ACCESSIBILITY_PUBLIC &&
			route[ROUTE_PATH].toLowerCase() ===
				history.location.pathname.toLowerCase()
		)
	})
	if (isCurrentLocationPublic && lastLocation) {
		const isLastLocationPublic = ROUTES.some(route => {
			return (
				route[ROUTE_ACCESSIBILITY] === ROUTE_ACCESSIBILITY_PUBLIC &&
				route[ROUTE_PATH].toLowerCase() === lastLocation.pathname.toLowerCase()
			)
		})
		return isLastLocationPublic ? ROUTE_PAGE_INDEX : lastLocation.pathname
	} else if (isCurrentLocationPublic && !lastLocation) {
		return ROUTE_PAGE_INDEX
	} else {
		return lastLocation.pathname
	}
}

const isLocationPrivate = () => {
	const isCurrentLocationPrivate = ROUTES.some(route => {
		return (
			route[ROUTE_ACCESSIBILITY] === ROUTE_ACCESSIBILITY_PRIVATE &&
			route[ROUTE_PATH].toLowerCase() === window.location.pathname.toLowerCase()
		)
	})

	return isCurrentLocationPrivate ? ROUTE_PAGE_INDEX : window.location.pathname
}

export { isLocationPublic, setLastRoute, goLastRoute, isLocationPrivate }
