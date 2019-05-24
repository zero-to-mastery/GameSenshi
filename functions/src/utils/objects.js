// in future this should turn into npm library so that backend can use the same code
const resObj = (status = false, errors = [], code = 9999, data = {}) => ({
	status,
	code,
	errors,
	data,
})

const valObj = (type = 'None', errors = []) => ({
	type,
	errors,
})

export { resObj, valObj }
