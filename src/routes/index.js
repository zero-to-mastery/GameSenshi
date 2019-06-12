const onSignedInRouting = (history, lastLocation) => {
	if (
		lastLocation &&
		lastLocation.pathname !== '/signIn' &&
		lastLocation.pathname !== '/signUp'
	) {
		history.goBack()
	} else {
		history.push('/index')
	}
}

export { onSignedInRouting }
