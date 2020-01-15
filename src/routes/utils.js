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
	const currentPath = history.location.pathname
	const isCurrentLocationPublic = locationAccessibilityMatch(
		currentPath,
		ROUTE_ACCESSIBILITY_PUBLIC
	)

	if (isCurrentLocationPublic) {
		const lastPathname = lastLocation.pathname
		return locationAccessibilityMatch(lastPathname, ROUTE_ACCESSIBILITY_PUBLIC)
			? ROUTE_PAGE_INDEX
			: lastLocation
			? lastPathname
			: ROUTE_PAGE_INDEX
	} else {
		return currentPath
	}
}

const isLocationPrivate = () => {
	const currentPathname = window.location.pathname

	return locationAccessibilityMatch(
		currentPathname,
		ROUTE_ACCESSIBILITY_PRIVATE
	)
		? [history.push, ROUTE_PAGE_INDEX]
		: [history.replace, currentPathname]
}

export { isLocationPublic, setLastRoute, goLastRoute, isLocationPrivate }
