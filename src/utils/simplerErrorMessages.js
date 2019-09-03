const simplerFirebaseErrorMessage = (error = '', defaultErrorMessage = '') => {
	const { code, message } = error
	// code is error from firebase, message is error from graphql
	if (
		(code && code.includes('network-request-failed')) ||
		(message && message.includes('Network error: Failed to fetch'))
	) {
		return 'network failure'
	} else {
		return defaultErrorMessage
	}
}

export { simplerFirebaseErrorMessage }
