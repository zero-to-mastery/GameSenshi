import { history } from 'routes/constants'

const LAST_ROUTE = 'lastRoute'

const setLastRoute = location => {
	if (location) {
		localStorage.setItem(LAST_ROUTE, location.pathname)
	}
}

const removeLastRoute = () => {
	localStorage.removeItem(LAST_ROUTE)
}

const goLastRoute = () => {
	const lastRoute = localStorage.getItem(LAST_ROUTE)
	if (lastRoute) {
		history.replace(lastRoute)
		removeLastRoute()
	}
}

export { setLastRoute, removeLastRoute, goLastRoute }
