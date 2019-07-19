const simplerFirebaseErrorMessage = (error = '', defaultErrorMessage = '') => {
	const { code } = error
	if (code && code.includes('network-request-failed')) {
		return 'network failure'
	}
	return defaultErrorMessage
}

export { simplerFirebaseErrorMessage }
