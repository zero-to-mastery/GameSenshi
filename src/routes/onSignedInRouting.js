// constants
import {
	ROUTE_PAGE_INDEX,
	ROUTE_PAGE_SIGN_UP,
	ROUTE_PAGE_SIGN_IN,
} from 'routes/constants'

const onSignedInRouting = (history, lastLocation) => {
	if (lastLocation) {
		const { pathname } = lastLocation
		if (
			pathname.toLowerCase() !== ROUTE_PAGE_SIGN_IN.toLowerCase() &&
			pathname.toLowerCase() !== ROUTE_PAGE_SIGN_UP.toLowerCase()
		) {
			history.goBack()
		} else {
			history.push(ROUTE_PAGE_INDEX)
		}
	} else {
		history.push(ROUTE_PAGE_INDEX)
	}
}

export default onSignedInRouting
