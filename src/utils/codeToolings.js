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

export { stopUndefined }
