import { fireStored } from '1_fire_init/core'

const createDocGetSet = path => {
	const ref = (...args) => fireStored.doc(path(...args))
	const get = (...args) => ref(...args).get()
	const set = (...args) => (data, options = { merge: true }) =>
		ref(...args).set(data, options)
	return [get, set]
}

export { createDocGetSet }
