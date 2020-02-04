import {
	FUNCTION_STATUS,
	FUNCTION_CODE,
	FUNCTION_MESSAGE,
	FUNCTION_DATA,
} from '0_constants'

const simplerErrorMessage = (error = {}, defaultErrorMessage = ['']) => {
	// * do error report/log/feedback here
	const { code, message } = error
	// code is error from firebase
	if (
		(code && code.includes('network-request-failed')) ||
		(message && message.includes('Network error: Failed to fetch'))
	) {
		return 'network failure'
	} else {
		return Array.isArray(defaultErrorMessage)
			? defaultErrorMessage[1]
			: defaultErrorMessage
	}
}

const resObj = (status = false, message = [''], data = {}) => {
	const message_ = Array.isArray(message) ? message[1] : message
	const code = Array.isArray(message) ? message[0] : -1
	return {
		[FUNCTION_STATUS]: status,
		[FUNCTION_CODE]: code,
		[FUNCTION_MESSAGE]: message_,
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
