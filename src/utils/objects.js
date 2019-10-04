import { API_STATUS, API_CODE, API_MESSAGE, API_DATA } from 'constantValues'

const simplerErrorMessage = (error = {}, defaultErrorMessage = '') => {
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

const resObj = (status = false, message = '', code = 9999, data = {}) => {
	return {
		[API_STATUS]: status,
		[API_CODE]: code,
		[API_MESSAGE]: message,
		[API_DATA]: data,
	}
}

const signUpResObj = (status = false, message = '', code = 9999, data = {}) => {
	for (const key in data) {
		if (!Array.isArray(data[key])) {
			data[key] && (data[key] = [data[key]])
		}
	}
	return resObj(status, message, code, data)
}

const simplerResponseHandling = (
	status = false,
	defaultErrorMessage = '',
	err = {}
) => {
	return resObj(status, simplerErrorMessage(err, defaultErrorMessage))
}

export {
	resObj,
	signUpResObj,
	simplerResponseHandling,
	simplerErrorMessage,
	API_STATUS,
	API_CODE,
	API_MESSAGE,
	API_DATA,
}
