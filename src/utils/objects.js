import { API_STATUS, API_CODE, API_MESSAGE, API_DATA } from 'constantValues'

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

export { resObj, signUpResObj }
