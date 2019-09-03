// * unlike sign out redirect, the behavior of sign in redirect cannot turn into universal (automatically run when auth changed) as condition can be very specific
// * example,
// * if sign in with password and email, call this function AFTER signed in, this is usual flow
// * if user sign in with social auth, call this function BEFORE signed in, this is because firebase redirect back to your last page and you want your last page to be meaningful
// * there is case that you need to reauthenticate user (eg, reset password) and you want to stay in the same page, in this case you dont want to call this function

import { ROUTE_PAGE_SIGN_UP, ROUTE_PAGE_SIGN_IN } from 'routes/constants'

import { history } from 'routes/constants'

const onSignedInRouting = lastLocation => {
	if (lastLocation) {
		const { pathname } = lastLocation
		if (
			pathname.toLowerCase() !== ROUTE_PAGE_SIGN_IN.toLowerCase() &&
			pathname.toLowerCase() !== ROUTE_PAGE_SIGN_UP.toLowerCase()
		) {
			history.goBack()
		}
	}
}

export { onSignedInRouting }
