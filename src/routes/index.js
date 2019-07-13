// constants
import { ROUTE_INDEX } from 'constantValues'

const onSignedInRouting = (history, lastLocation) => {
	if (
		lastLocation &&
		lastLocation.pathname.toLowerCase() !== '/signin' &&
		lastLocation.pathname.toLowerCase() !== '/signup'
	) {
		history.goBack()
	} else {
		history.push(ROUTE_INDEX)
	}
}

export { onSignedInRouting }
