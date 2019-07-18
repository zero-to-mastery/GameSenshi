import { STATUS, CODE, MESSAGE, DATA } from 'constantValues'

const resObj = (status = false, message = '', code = 9999, data = {}) => {
	return { [STATUS]: status, [CODE]: code, [MESSAGE]: message, [DATA]: data }
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
