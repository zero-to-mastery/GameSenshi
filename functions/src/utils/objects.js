// in future this should turn into npm library so that backend can use the same code
const resObj = (status = false, message = '', code = 9999, data = {}) => ({
	status,
	code,
	message,
	data,
})

const valObj = (type = 'None', errors = []) => ({
	type,
	errors,
})

export { resObj, valObj }
