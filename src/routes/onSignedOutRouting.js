import {
	ROUTE_PATH,
	ROUTE_PAGE_INDEX,
	ROUTE_ACCESSIBILITY,
	ROUTE_ACCESSIBILITY_PRIVATE,
} from 'constantValues'

import routes from 'routes/routes'

const onSignedOutRouting = props => {
	const { pathname } = window.location
	const winFirstSubPaths = pathname.toLowerCase().split('/')[1]
	routes.some(route => {
		const { [ROUTE_PATH]: path, [ROUTE_ACCESSIBILITY]: accessibility } = route
		if (
			path.toLowerCase().split('/')[1] === winFirstSubPaths &&
			accessibility === ROUTE_ACCESSIBILITY_PRIVATE
		) {
			window.location = ROUTE_PAGE_INDEX
			return true
		} else {
			return false
		}
	})
}

export default onSignedOutRouting
