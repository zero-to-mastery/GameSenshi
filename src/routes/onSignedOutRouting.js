//this code is no longer in used, now sign out state is set by store, easier to write, universal and less error prone

// import {
// 	ROUTE_PATH,
// 	ROUTE_PAGE_INDEX,
// 	ROUTE_ACCESSIBILITY,
// 	ROUTE_ACCESSIBILITY_PRIVATE,
// } from 'routes/constants'

// import { routes } from 'routes/routes'
// import { history } from 'routes/Router'

// // if user log out of protected page, redirect them to index page
// const onSignedOutRouting = props => {
// 	const { pathname } = window.location
// 	const winFirstSubPaths = pathname.toLowerCase().split('/')[1]
// 	routes.some(route => {
// 		const { [ROUTE_PATH]: path, [ROUTE_ACCESSIBILITY]: accessibility } = route
// 		const firstSubPath = path.toLowerCase().split('/')[1]
// 		if (
// 			firstSubPath === winFirstSubPaths &&
// 			accessibility === ROUTE_ACCESSIBILITY_PRIVATE
// 		) {
// 			history.push(ROUTE_PAGE_INDEX)
// 			return true
// 		} else {
// 			return false
// 		}
// 	})
// }

// export default onSignedOutRouting
