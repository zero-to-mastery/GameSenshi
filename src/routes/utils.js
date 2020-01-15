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

const parseRouteParamValues = route => {
	const [pathnameNoParam, param] = route.split(':')
	if (param) {
		try {
			const paramValues = param
				.split('(')[1]
				.split(')')[0]
				.split('|')

			return paramValues.map(paramValue =>
				(pathnameNoParam + paramValue).toLowerCase()
			)
		} catch (err) {
			return [pathnameNoParam]
		}
	} else {
		return [route]
	}
}

const locationAccessibilityMatch = (location, accessibility) => {
	const targetPathname = location
	return ROUTES.some(route => {
		const pathnames = parseRouteParamValues(route[ROUTE_PATH])
		return (
			route[ROUTE_ACCESSIBILITY] === accessibility &&
			pathnames.some(
				pathname =>
					targetPathname.toLowerCase().includes(pathname) &&
					(targetPathname.match(/\//g) || []).length ===
						(pathname.match(/\//g) || []).length
			)
		)
	})
}

const isLocationPublic = lastLocation => {
	const isCurrentLocationPublic = locationAccessibilityMatch(
		history.location.pathname,
		ROUTE_ACCESSIBILITY_PUBLIC
	)

	if (isCurrentLocationPublic && lastLocation) {
		const lastPathname = lastLocation.pathname
		return locationAccessibilityMatch(lastPathname, ROUTE_ACCESSIBILITY_PUBLIC)
			? ROUTE_PAGE_INDEX
			: lastPathname
	} else if (isCurrentLocationPublic && !lastLocation) {
		return ROUTE_PAGE_INDEX
	} else if (!isCurrentLocationPublic && lastLocation) {
		// normally this case would not be trigger because it is not possible for non sign in user to enter private route (because private Link is hidden if user not sign in)
		// the only way for non sign in user to enter private route is manually type in the browser url where in this case the lastLocation is null
		// but still add this case for safety
		return lastLocation.pathname
	} else {
		return ROUTE_PAGE_INDEX
	}
}

const isLocationPrivate = () => {
	const currentPathname = window.location.pathname

	return locationAccessibilityMatch(
		currentPathname,
		ROUTE_ACCESSIBILITY_PRIVATE
	)
		? ROUTE_PAGE_INDEX
		: currentPathname
}

export { isLocationPublic, setLastRoute, goLastRoute, isLocationPrivate }
