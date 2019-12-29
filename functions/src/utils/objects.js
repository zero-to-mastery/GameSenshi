import {
	FUNCTION_STATUS,
	FUNCTION_CODE,
	FUNCTION_MESSAGE,
	FUNCTION_DATA,
} from 'constantValues'

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

const resObj = (status = false, message = [], data = {}) => {
	return {
		[FUNCTION_STATUS]: status,
		[FUNCTION_CODE]: message[0],
		[FUNCTION_MESSAGE]: message[1],
		[FUNCTION_DATA]: data,
	}
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
	simplerResponseHandling,
	simplerErrorMessage,
	FUNCTION_STATUS,
	FUNCTION_CODE,
	FUNCTION_MESSAGE,
	FUNCTION_DATA,
}
