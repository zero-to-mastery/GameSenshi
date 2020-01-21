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

const locationAccessibilityMatch = (pathname, accessibility) => {
	const targetPathname = pathname.toLowerCase()
	return ROUTES.some(route => {
		const pathnames = parseRouteParamValues(route[ROUTE_PATH])
		return (
			route[ROUTE_ACCESSIBILITY] === accessibility &&
			pathnames.some(pathname => {
				const pathname_ = pathname.toLowerCase()
				return (
					targetPathname.includes(pathname_.toLowerCase()) &&
					(targetPathname.match(/\//g) || []).length ===
						(pathname_.match(/\//g) || []).length
				)
			})
		)
	})
}

const isLocationPublic = lastLocation => {
	const currentPathname = history.location.pathname
	const isCurrentLocationPublic = locationAccessibilityMatch(
		currentPathname,
		ROUTE_ACCESSIBILITY_PUBLIC
	)

	if (isCurrentLocationPublic) {
		const lastPathname = lastLocation ? lastLocation.pathname : ROUTE_PAGE_INDEX
		return [
			history.replace,
			locationAccessibilityMatch(lastPathname, ROUTE_ACCESSIBILITY_PUBLIC)
				? ROUTE_PAGE_INDEX
				: lastPathname,
		]
	} else {
		return [() => {}, currentPathname]
	}
}

const isLocationPrivate = () => {
	const currentPathname = window.location.pathname

	return locationAccessibilityMatch(
		currentPathname,
		ROUTE_ACCESSIBILITY_PRIVATE
	)
		? [history.push, ROUTE_PAGE_INDEX]
		: [() => {}, currentPathname]
}

export { isLocationPublic, setLastRoute, goLastRoute, isLocationPrivate }
