// in future this should turn into npm library so that backend can use the same code
import { STATUS, CODE, MESSAGE, DATA } from 'constantValues'

const resObj = (status = false, message = '', code = 9999, data = {}) => {
	for (const key in data) {
		if (!Array.isArray(data[key])) {
			data[key] = [data[key]]
		}
	}

	return { [STATUS]: status, [CODE]: code, [MESSAGE]: message, [DATA]: data }
}

export { resObj }
