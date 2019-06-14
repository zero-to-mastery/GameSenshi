const onSignedInRouting = (history, lastLocation) => {
	if (
		lastLocation &&
		lastLocation.pathname.toLowerCase() !== '/signin' &&
		lastLocation.pathname.toLowerCase() !== '/signup'
	) {
		history.goBack()
	} else {
		history.push('/index')
	}
}

export { onSignedInRouting }
