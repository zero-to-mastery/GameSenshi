// https://stackoverflow.com/questions/50021137/how-to-throw-error-for-destructuring-non-existent-key
const stopUndefined = obj => {
	return new Proxy(obj, {
		get: function(obj, prop) {
			if (prop in obj) {
				return obj[prop]
			} else {
				throw new Error(`No such "${prop}" property exists `)
			}
		},
	})
}

const checkDuplicatedObject = (options, prop) => {
	const ids = options.map(option => option[prop])
	if (ids.length !== new Set(ids).size) {
		throw 'duplicated id'
	} else {
		return options
	}
}

const createGetOptions = (fullOptions, prop) => arrayString => {
	const criteria = Array.isArray(arrayString) ? arrayString : [arrayString]
	const getOptions = criteria.map(button =>
		checkDuplicatedObject(fullOptions, prop).find(
			option => option[prop] === button
		)
	)
	return getOptions
}

export { stopUndefined, checkDuplicatedObject, createGetOptions }
