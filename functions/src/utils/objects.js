// in future this should turn into npm library so that backend can use the same code
import { STATUS, CODE, MESSAGE, DATA } from 'utils/commonConstants'

const resObj = (status = false, message = '', code = 9999, data = {}) => ({
	[STATUS]: status,
	[CODE]: code,
	[MESSAGE]: message,
	[DATA]: data,
})

export { resObj }
