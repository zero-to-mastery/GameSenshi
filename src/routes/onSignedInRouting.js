// constants
import {
	ROUTE_PAGE_INDEX,
	ROUTE_PAGE_SIGN_UP,
	ROUTE_PAGE_SIGN_IN,
} from 'constantValues'

const onSignedInRouting = (history, lastLocation) => {
	const { pathname } = lastLocation
	if (
		lastLocation &&
		pathname.toLowerCase() !== ROUTE_PAGE_SIGN_IN.toLowerCase() &&
		pathname.toLowerCase() !== ROUTE_PAGE_SIGN_UP.toLowerCase()
	) {
		history.goBack()
	} else {
		history.push(ROUTE_PAGE_INDEX)
	}
}

export default onSignedInRouting
