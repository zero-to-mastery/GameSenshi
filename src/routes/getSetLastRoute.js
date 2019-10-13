// ! anti pattern import
import { history } from './constants'

const LAST_ROUTE = 'lastRoute'
const LAST_ROUTE_REAL = 'lastRouteReal'

const setLastRoute = pathname => {
	localStorage.setItem(LAST_ROUTE, pathname)
	localStorage.setItem(LAST_ROUTE_REAL, history.location.pathname)
}

const removeLastRoute = () => {
	localStorage.removeItem(LAST_ROUTE)
	localStorage.removeItem(LAST_ROUTE_REAL)
}

const goLastRoute = () => {
	const lastRoute = localStorage.getItem(LAST_ROUTE)
	if (lastRoute) {
		history.replace(lastRoute)
		removeLastRoute()
	}
}

export { setLastRoute, removeLastRoute, goLastRoute }
